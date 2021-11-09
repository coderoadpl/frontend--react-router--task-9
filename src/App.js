import React from 'react'

import { Routes, Route } from 'react-router-dom'

import NavBar from './components/NavBar'
import NavLink from './components/NavLink'

import PageHome from './pages/PageHome'
import PageMoviesSearch from './pages/PageMoviesSearch'

export const App = () => {
  return (
    <div>
      <NavBar>
        <NavLink
          to={'/'}
        >
          Home
        </NavLink>
        <NavLink
          to={'/movies/search'}
        >
          Movies search
        </NavLink>
      </NavBar>
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
