import React from 'react'
import AppsIcon from '@mui/icons-material/Apps';

export default function Navbar() {

  const login = () => window.open("https://accounts.google.com/signin");

  return (
    <div className='container-nav'>
      <a className='link' href="https://mail.google.com/mail/">Gmail</a>
      <a className='link' href="https://www.google.com.mx/imghp">Imágenes</a>
      <a className='link' href="https://about.google/products/">
        <AppsIcon style={{ color: '#5f6368' }}></AppsIcon>
      </a>

      <button className='login-Button' onClick={login}>Iniciar sesión</button>
    </div>

  )
}
