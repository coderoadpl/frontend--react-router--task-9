import React from 'react'
import PropTypes from 'prop-types'

import { Navigate } from 'react-router-dom'

import { useUser } from '../../contexts/UserContext'

import classes from './styles.module.css'

export const PageLogout = (props) => {
  const {
    className,
    ...otherProps
  } = props

  const { logOut } = useUser()

  React.useEffect(() => {
    logOut()
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
  className: PropTypes.string
}

export default PageLogout
