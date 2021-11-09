import React from 'react'
import PropTypes from 'prop-types'

import { useParams, useNavigate, Outlet } from 'react-router-dom'

import { useDebounce } from 'react-use'

import classes from './styles.module.css'

export const PageMoviesSearch = (props) => {
  const {
    className,
    ...otherProps
  } = props

  const { searchPhrase } = useParams()
  const navigate = useNavigate()

  const [tmpSearchPhrase, setTmpSearchPhrase] = React.useState(searchPhrase || '')

  const [, cancel] = useDebounce(() => {
    // that is relative path so we only passes searchPhrase URL param
    if (searchPhrase !== tmpSearchPhrase) navigate(tmpSearchPhrase)
  }, 1000, [tmpSearchPhrase])

  React.useEffect(() => {
    return () => cancel()
  }, [cancel])

  return (
    <div
      className={`${classes.root}${className ? ` ${className}` : ''}`}
      {...otherProps}
    >
      PageMoviesSearch
      <input
        value={tmpSearchPhrase}
        onChange={(e) => setTmpSearchPhrase(e.target.value.replaceAll('/', ''))}
      />
      <Outlet />
    </div>
  )
}

PageMoviesSearch.propTypes = {
  className: PropTypes.string
}

export default PageMoviesSearch
