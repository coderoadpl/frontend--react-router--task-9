import React from 'react'
import PropTypes from 'prop-types'

import { Navigate } from 'react-router-dom'

import classes from './styles.module.css'

export const PageLogout = (props) => {
  const {
    className,
    onLogOut,
    ...otherProps
  } = props

  React.useEffect(() => {
    onLogOut()
    // mount-only
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div
      className={`${classes.root}${className ? ` ${className}` : ''}`}
      {...otherProps}
    >
      <Navigate
        to={'/'}
      />
    </div>
  )
}

PageLogout.propTypes = {
  className: PropTypes.string,
  onLogOut: PropTypes.func
}

export default PageLogout
