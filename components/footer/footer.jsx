import React, { Component } from 'react'
import { Row, Col } from 'antd'
// import Subcribe from './subcribe'
import {
  FacebookOutlined,
  // InstagramOutlined,
  TwitterOutlined,
  LinkedinOutlined
} from '@ant-design/icons';
import Link from 'next/link'

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <Row gutter={32}>
          <Col lg={6} xs={12}>
            <ul>
              <li>
              <Link href="#" passHref>
                  Create Community
                </Link>
              </li>
              <li>
                <Link href="/careFinder" passHref>
                 Join Community
                </Link>
              </li>
            </ul>
          </Col>
          <Col lg={6} xs={12}>
            <ul>
              <li>
                <Link href="https://www.doctoora.com/doctor/register" passHref>
                 Office Address
                </Link>
              </li>
            </ul>
            <ul>
            <li>
                <Link href="/" onClick={(e) => e.preventDefault()}>
                  11 Gbajumo Crescent,
                  Surulere, Lagos
                </Link>
              
              </li>
            </ul>
          </Col>
          {/* <Col lg={4} xs={24}>
            <ul>
              <li>
                <a href="/">
                  Become a partner
                </a>
              </li>
            </ul>
          </Col> */}
          <Col lg={6} xs={24}>
            <ul>
              <li>
                <Link href="/" onClick={(e) => e.preventDefault()} className="weighted">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="tel: +2348105094729">
                  +2348105094729
                </Link>
              </li>
              <li>
                <Link href="/" onClick={(e) => e.preventDefault()} className="weighted">
                  Address
                </Link>
              </li>
              <li>
                <Link href="/" onClick={(e) => e.preventDefault()}>
                  11 Gbajumo Crescent,
                  Surulere, Lagos
                </Link>
              </li>
            </ul>
            {/* <Subcribe /> */}
          </Col>
          <Col lg={6} xs={24}>
            <ul>
              <li>
                <Link href="/" onClick={(e) => e.preventDefault()} className="weighted">
                  Follow Us
                </Link>
              </li>
              <li>
                <Link href="https://web.facebook.com/doctoorahomecare" passHref>
                  <div>
                    <FacebookOutlined />  Facebook
                  </div>

                </Link>
              </li>
              {/* <li>
                <a href="/">
                <InstagramOutlined /> Instgram
                </a>
              </li> */}
              <li>
                <Link href="https://www.linkedin.com/company/doctoora" passHref>
                  <div>
                    <LinkedinOutlined /> LinkedIn
                  </div>
                </Link>
              </li>
              <li>
                <Link href="https://twitter.com/doctoorahealth" passHref>
                  <div>
                    <TwitterOutlined /> Twitter
                  </div>
                </Link>
              </li>
            </ul>
            {/* <Subcribe /> */}
          </Col>
        </Row>
        <p className="cc">
          (c)  2021  Doctoora E-Health
        </p>
      </div>
    )
  }
}
