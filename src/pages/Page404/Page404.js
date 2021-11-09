import React from 'react'
import PropTypes from 'prop-types'

import classes from './styles.module.css'

export const Page404 = (props) => {
  const {
    className,
    ...otherProps
  } = props

  return (
    <div
      className={`${classes.root}${className ? ` ${className}` : ''}`}
      {...otherProps}
    >
      Nothing here
    </div>
  )
}

Page404.propTypes = {
  className: PropTypes.string
}

export default Page404
