import React from 'react'

import { Routes, Route } from 'react-router-dom'

import PageHome from './pages/PageHome'
import PageMoviesSearch from './pages/PageMoviesSearch'

export const App = () => {
  return (
    <div>
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
