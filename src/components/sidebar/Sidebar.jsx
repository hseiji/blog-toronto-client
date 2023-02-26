import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { axiosInstance } from '../../config'
import './sidebar.css'

export default function Sidebar() {
  const [cats, setCats] = useState([])

  useEffect(() => {
    const getCats = async () => {
      const res = await axiosInstance.get('/categories/')
      setCats(res.data)
    }
    getCats()
  }, [])

  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">About</span>
        <img
          src="https://upload.travelawaits.com/ta/uploads/2021/04/be9ded01f8f1aadfe83f9dbda76fcbe9ded-800x800.jpg"
          alt=""
        />
        <p>
          This blog contains the most famous places of the city of Toronto as
          well as the hidden gems that you must check it out. Please feel free
          to register and contribute with your favorites places and stories.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">Categories</span>
        <ul className="sidebarList">
          {cats.map((c) => (
            <Link to={`/?cat=${c.name}`} className="link">
              <li className="sidebarListItem" id={c.id}>
                {c.name}
              </li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">Follow us:</span>
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
