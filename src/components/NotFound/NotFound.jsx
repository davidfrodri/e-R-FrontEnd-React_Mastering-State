import { Link } from 'react-router-dom'

import Nav from '../Nav/Nav'
import Footer from '../Footer/Footer'

const NotFound = () => {
  return (
    <>
      <div className='container-not-found'>
        <Nav />
        <div className='container-404'>
          <h1>Page Not Found</h1>
          <p>Looks like you&apos;ve followed a broken link or entered a URL that doesn&apos;t exist on this site.</p>
          <Link to='/'>&larr; Back to our site</Link>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default NotFound
