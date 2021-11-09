import React from 'react'

import { Routes, Route, NavLink } from 'react-router-dom'

import PageHome from './pages/PageHome'
import PageMoviesSearch from './pages/PageMoviesSearch'

export const App = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink
              to={'/'}
              style={({ isActive }) => ({
                fontWeight: isActive ? 700 : 400
              })}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={'/movies/search'}
              style={({ isActive }) => ({
                fontWeight: isActive ? 700 : 400
              })}
            >
              Movies search
            </NavLink>
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
