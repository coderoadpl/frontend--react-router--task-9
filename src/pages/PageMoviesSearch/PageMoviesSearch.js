import React from 'react'
import PropTypes from 'prop-types'

import { useParams, useNavigate, Outlet } from 'react-router-dom'

import classes from './styles.module.css'

export const PageMoviesSearch = (props) => {
  const {
    className,
    ...otherProps
  } = props

  const { searchPhrase } = useParams()
  const navigate = useNavigate()

  return (
    <div
      className={`${classes.root}${className ? ` ${className}` : ''}`}
      {...otherProps}
    >
      PageMoviesSearch
      <input
        value={searchPhrase || ''}
        onChange={(e) => navigate(e.target.value.replaceAll('/', ''))}
      />
      <Outlet />
    </div>
  )
}

PageMoviesSearch.propTypes = {
  className: PropTypes.string
}

export default PageMoviesSearch
