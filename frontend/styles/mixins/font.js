const fontStyles = {
  default: {
    fontFamily: 'Lato, Arial, sans-serif',
    fontWeight: 300,
    fontSize: 14,
  },
  heroTitle: {
    fontSize: 48,
    fontWeight: 700,
  },
  heroSubtitle: {
    fontSize: 24,
    fontWeight: 400,
    textTransform: 'uppercase',
    letterSpacing: '0.25em',
  },
  heroText: {
    fontSize: 32,
    lineHeight: '1.4em',
    fontWeight: 300,
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
  pageTitle: {
    fontSize: 48,
    fontWeight: 700,
  },
  heading: {
    fontSize: 24,
    fontWeight: 400,
  },
  bodyText: {
    fontSize: 24,
    lineHeight: '1.4em',
    fontWeight: 300,
  },
}

const font = (rule, type) => {
  if (!fontStyles[type]) throw rule.error(`Invalid font type: ${type}`)
  return fontStyles[type]
}

module.exports = font
