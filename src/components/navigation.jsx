export const Navigation = (props) => {
  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
      <div className='container'>
        <div className='navbar-header'>
          <button
            type='button'
            className='navbar-toggle collapsed'
            data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1'
          >
            {' '}
            <span className='sr-only'>Toggle navigation</span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
          </button>
          <a href='#page-top'>
            <img className="page-scroll" src='../img/header-mfm.jpg'></img>
          </a>{' '}
        </div>

        <div
          className='collapse navbar-collapse'
          id='bs-example-navbar-collapse-1'
        >
          <ul className='nav navbar-nav navbar-right'>
            <li>
              <a href='#beranda' className='page-scroll'>
                Beranda
              </a>
            </li>
            <li>
              <a href='#profil' className='page-scroll'>
                Profil
              </a>
            </li>
            <li>
              <a href='#artikel' className='page-scroll'>
                Artikel
              </a>
            </li>
            <li>
              <a href='#layanan' className='page-scroll'>
                Layanan
              </a>
            </li>
            <li>
              <a href='#masjidfatimahmuhammadtv' className='page-scroll'>
                Majsid Fatimah Muhammad TV
              </a>
            </li>
            <li>
              <a href='#kontak' className='page-scroll'>
                Kontak
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
