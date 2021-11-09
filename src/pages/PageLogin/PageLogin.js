import React from 'react'
import PropTypes from 'prop-types'

import classes from './styles.module.css'

export const PageLogin = (props) => {
  const {
    className,
    onLogInClick,
    ...otherProps
  } = props

  return (
    <div
      className={`${classes.root}${className ? ` ${className}` : ''}`}
      {...otherProps}
    >
      PageLogin
      <button
        onClick={onLogInClick}
      >
        CLICK TO LOG IN
      </button>
    </div>
  )
}

PageLogin.propTypes = {
  className: PropTypes.string,
  onLogInClick: PropTypes.func
}

export default PageLogin
