import logo from '../../assets/[PLACEHOLDER LOGO].png'

const Footer = () => {
  return (
    <footer id='footer' role="contentinfo">
      <div className='footer'>
        <p className='col-1 gr1'>
          <img src={logo} alt='PLACEHOLDER LOGO' width='20px' />{' '}
          <span>Project</span>
        </p>
        <p className='col-3 row-1'>123 Street, Anytown, USA 12345</p>
        <a className='col-3 row-2' href='#s'>
          hello@website.com
        </a>
        <p className='col-6 row-2'>© 2021 Project. All rights reserved</p>
      </div>
    </footer>
  )
}

export default Footer
