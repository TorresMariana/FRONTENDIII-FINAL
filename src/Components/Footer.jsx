import React from 'react'
import { useNavigate } from 'react-router-dom'



const Footer = () => {

  const navigate = useNavigate()
  return (
    <footer>
      <div>
        <button className="back-button" onClick={() => navigate(-1)}>« Volver </button>
      </div>
        <div className="footer">
          <div className="dh-logo">
        <p>Powered by</p>
        <img src="./img/DH.png" alt='DH-logo' />
        </div>
        <div className="iconos-footer">
          <img className="icon" src="/images/ico-facebook.png" alt="Facebook-logo"/>
          <img className="icon" src="/images/ico-instagram.png" alt="Instagram-logo"/>
          <img className="icon" src="/images/ico-whatsapp.png" alt="Whatsapp-logo"/>
        </div>
      </div> 
    </footer>
  )
}

export default Footer
