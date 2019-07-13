import React from 'react'

import ExampleComponent from '#/components/ExampleComponent'
import reactLogo from '#/assets/images/react.svg'

import styles from './styles.css'

const exampleContainer = () => {
  return <ExampleComponent src={reactLogo} alt="React Logo" styles={styles} />
}

export default exampleContainer
