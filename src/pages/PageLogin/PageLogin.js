import React from 'react'
import PropTypes from 'prop-types'

import { useUser } from '../../contexts/UserContext'

import classes from './styles.module.css'

export const PageLogin = (props) => {
  const {
    className,
    ...otherProps
  } = props

  const { logIn } = useUser()

  return (
    <div
      className={`${classes.root}${className ? ` ${className}` : ''}`}
      {...otherProps}
    >
      PageLogin
      <button
        onClick={logIn}
      >
        CLICK TO LOG IN
      </button>
    </div>
  )
}

PageLogin.propTypes = {
  className: PropTypes.string
}

export default PageLogin
