import React from 'react'

import { Routes, Route } from 'react-router-dom'

import PageHome from './pages/PageHome'
import PageMoviesSearch from './pages/PageMoviesSearch'

export const App = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <a href={'/'}>
              Home
            </a>
          </li>
          <li>
            <a href={'/movies/search'}>
              Movies search
            </a>
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
