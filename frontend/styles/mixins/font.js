const fontStyles = {
  default: {
    fontFamily: 'IBM Plex Sans, sans-serif',
    fontWeight: 300,
    fontSize: 14,
  },
  heroTitle: {
    fontFamily: 'IBM Plex Serif',
    fontSize: 36,
    fontWeight: 400,
    letterSpacing: 6,
  },
  sidebarLink: {
    fontSize: 14,
    fontWeight: 300,
    textTransform: 'uppercase',
    letterSpacing: '0.2em',
  },
  heading: {
    fontSize: 36,
    fontWeight: 500,
    fontFamily: 'IBM Plex Serif, sans-serif',
  },
  bodyText: {
    fontSize: 16,
    lineHeight: '1.6em',
    letterSpacing: '0.4px',
    fontWeight: 400,
  },
  label: {
    fontSize: 11,
    textTransform: 'uppercase',
  },
}

const font = (rule, type) => {
  if (!fontStyles[type]) throw rule.error(`Invalid font type: ${type}`)
  return fontStyles[type]
}

module.exports = font
