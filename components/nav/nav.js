import React, { useState } from 'react'
import { Button } from 'antd'
import Link from 'next/link'
import Image from 'next/image'

const links = [
  {
    title: 'Home',
    link: '/'
  },
  {
    title: 'About',
    link: '/'
  },
  {
    title: 'Membership',
    link: '/membership'
  },
  {
    title: 'Services',
    link: '/'
  },
  {
    title: 'For Business (Corporate)',
    link: '/'
  }
]


const Nav = () => {
  const [menuToggleIcon, setMenuToggleIcon] = useState(false)

  const toggleMenuIcon = () => {
    setMenuToggleIcon(!menuToggleIcon)
  }

  return (
    <div className="navbar">
      <div className="logo-holder">
        <Link href="/"  passHref>
          <div className="logo-img">
            <Image
               src="/img/logo.svg"
               alt="logo"
              layout="fill"
            />
          </div>
        </Link>
        {/* <a href="/">
          <img
            src="/img/logo.svg"
            alt="logo"
            className="logo-img"
          />
        </a> */}
      </div>
      <div className="navbar-item">
        <ul>
          {
            links.map((link) =>
            (
              <li key={`navbar-item-${link.title}`}>
                <Link href={link.link}>
                  {link.title}
                </Link>
              </li>
            ))
          }
        </ul>
      </div>
      <div className="navbar-right">
        <Button className="nav-btn">
          Register
        </Button>

        <div className={`nav-mobile ${menuToggleIcon ? 'change' : ''}`} onClick={() => toggleMenuIcon()}>
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>
      </div>

      {
        menuToggleIcon ?
          <div className="sidebar animated fadeInLeft">
            <ul className="menu-holder">
              {
                links.map((link) =>
                (
                  <li key={`navbar-item-${link.title}`}>
                    <Link href={link.link}>
                      {link.title}
                    </Link>
                  </li>
                ))
              }
              <li>
                <Button className="nav-btn">
                  Register
                </Button>
              </li>
            </ul>
          </div> : null
      }

    </div>
  )
}

export default Nav
