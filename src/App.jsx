import { Route, Routes } from 'react-router-dom'

import { HeaderFooterLayout } from './layouts/HeaderFooterLayout'
import MainPage from './pages/MainPage'
import BigCommunity from './components/BigCommunity/BigCommunity'
import UserCommunity from './components/UserCommunity.jsx/UserCommunity'
import NotFound from './components/NotFound/NotFound'

function App () {
  return (
    <Routes>
      <Route element={<HeaderFooterLayout />} >
        <Route path='/' element={<MainPage />} />
        <Route path='/community' element={<BigCommunity />} />
        <Route path='/community/:id' element={<UserCommunity />} />
        <Route path="/not-found" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App
