const fontStyles = {
  default: {
    fontFamily: 'Lato, Arial, sans-serif',
    fontWeight: 300,
    fontSize: 14,
  },
  heroTitle: {
    fontSize: 72,
    fontWeight: 400, /* Get Semibold Lato */
  },
  sidebarTitle: {
    fontSize: 16,
    fontWeight: 400,
    textTransform: 'uppercase',
    letterSpacing: '0.25em',
  },
  sidebarLink: {
    fontSize: 14,
    fontWeight: 400,
    textTransform: 'uppercase',
    letterSpacing: '0.2em',
  },
}

const font = (rule, type) => {
  if (!fontStyles[type]) throw rule.error(`Invalid font type: ${type}`)
  return fontStyles[type]
}

module.exports = font
