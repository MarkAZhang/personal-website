import fetch from 'isomorphic-fetch'
import {map, flow, includes, isArray, flatten, toPairs, join} from 'lodash/fp'

const expandArrayPairs = ([key, value]) =>
  isArray(value)
    ? value.map(val => [key, val])
    : [[key, value]]

const stringify = ([key, value]) => `${key}=${encodeURIComponent(value)}`

export const stringifyParams = flow(
  toPairs,
  map(expandArrayPairs),
  flatten,
  map(stringify),
  join('&'),
)

const deserialize = async response => {
  const header = response.headers.get('Content-Type')
  return includes('application/json', header)
    ? response.json()
    : response.text()
}

const doRequest = async (url, params) => {
  const response = await fetch(url, params)
  const body = await deserialize(response)
  if (response.status >= 500) {
    // TODO(mark): Better error messages.
    throw new Error('Error on api response')
  }
  return body
}

const get = (baseUrl, data) => {
  const url = data ? `${baseUrl}?${stringifyParams(data)}` : baseUrl
  return doRequest(url, {
    headers: {
      Accept: 'application/json',
    },
  })
}

const post = (url, data) => doRequest(url, {
  method: 'POST',
  body: JSON.stringify(data),
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

export const request = {get, post}
