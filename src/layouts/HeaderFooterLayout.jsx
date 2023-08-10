import { Outlet } from 'react-router-dom'

import Headline from '../components/Headline/Headline'
import Footer from '../components/Footer/Footer'

export const HeaderFooterLayout = () => {
  return (
    <>
      <Headline />
      <Outlet />
      <Footer />
    </>
  )
}
