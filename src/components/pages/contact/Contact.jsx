import React from 'react'
import './contact.css'

export const Contact = () => {
  return (
    <div className="contact">
      <img
        src="https://upload.travelawaits.com/ta/uploads/2021/04/be9ded01f8f1aadfe83f9dbda76fcbe9ded-800x800.jpg"
        alt=""
        width="300px"
      />
      <div className="container-right">
        <h4>Follow us</h4>
        <div className="sidebarSocial">
          <a
            href={'https://www.facebook.com/'}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="sidebarIcon fab fa-facebook"></i>
          </a>
          <a
            href={'https://twitter.com/?lang=en'}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="sidebarIcon fab fa-twitter"></i>
          </a>
          <a
            href={'https://www.instagram.com/'}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="sidebarIcon fab fa-instagram"></i>
          </a>
          <a
            href={'https://www.pinterest.ca/'}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="sidebarIcon fab fa-pinterest"></i>
          </a>
        </div>
      </div>
    </div>
  )
}
