import React from 'react'

import { Routes, Route } from 'react-router-dom'

import NavBar from './components/NavBar'
import NavLink from './components/NavLink'

import PageHome from './pages/PageHome'
import PageMoviesSearch from './pages/PageMoviesSearch'
import PageMoviesSearchResults from './pages/PageMoviesSearchResults'

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
        >
          <Route
            path={':searchPhrase'}
            element={<PageMoviesSearchResults />}
          />
        </Route>
      </Routes>
    </div>
  )
}

export default App
