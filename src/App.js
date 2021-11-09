import React from 'react'

import { Routes, Route, Link } from 'react-router-dom'

import PageHome from './pages/PageHome'
import PageMoviesSearch from './pages/PageMoviesSearch'

export const App = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to={'/'}>
              Home
            </Link>
          </li>
          <li>
            <Link to={'/movies/search'}>
              Movies search
            </Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route
          path={'/'}
          element={<PageHome />}
        />
        <Route
          path={'/movies/search'}
          element={<PageMoviesSearch />}
        />
      </Routes>
    </div>
  )
}

export default App
