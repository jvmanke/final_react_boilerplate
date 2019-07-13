import React from 'react'
import PropTypes from 'prop-types'

import defaultStyles from './styles.css'

const ExampleComponent = ({ src, alt, styles }) => {
  const mergedStyles = { ...defaultStyles, ...styles }
  return (
    <>
      <span className={mergedStyles.exampleComponent}>exampleComponent</span>
      <img className={mergedStyles.reactLogo} src={src} alt={alt} />
    </>
  )
}

ExampleComponent.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  styles: PropTypes.shape(defaultStyles),
}

ExampleComponent.defaultProps = {
  styles: {},
}

export default ExampleComponent
