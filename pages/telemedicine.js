import React from 'react'
import Image from 'next/image'
import Nav from '../components/nav/nav'
import { Button, Collapse } from 'antd'
import Footer from '../components/footer/footer';
import Headtags from '../components/seo/headtags';

const { Panel } = Collapse;

const text = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto eveniet dignissimos quibusdam beatae numquam est rerum quaerat molestias libero veritatis pariatur quisquam laborum rem reiciendis obcaecati, doloribus assumenda odio ipsum!'

const weOffer = [
  {
    img: '/img/clarity.svg',
    title: '24/7 Access',
    text: `Lorem ipsum dolor sit amet, 
    consectetur adipiscing elit. Sed 
    odio quam sit libero risus.`
  },
  {
    img: '/img/laptop.svg',
    title: 'Video Consultation',
    text: `Lorem ipsum dolor sit amet, 
    consectetur adipiscing elit. Sed 
    odio quam sit libero risus.`
  },
  {
    img: '/img/message.svg',
    title: 'Instant Messaging',
    text: `Lorem ipsum dolor sit amet, 
    consectetur adipiscing elit. Sed 
    odio quam sit libero risus.`
  }
]

const Telemedicine = () => {
  return (
    <div className="telemedicine">
      <Headtags
        title="Doctoora - Online Consultation With Top Doctors in Nigeria"
        desc="Get prompt resolution to medical concerns with affordable healthcare services from verified Doctors via telemedicine on Doctoora"
        keywords="the best healthcare services in Nigeria, good doctors in Nigeria, Quality Healthcare You can trust, Healthcare Cover, Health Insurance, Low cost healthcare, Affordable hospitals, digital health, telemedicine"
      />
      <Nav />
      <div className="telemedicine-main">
        <div className="banner">
          <div className="banner-text">
            <h1 className="title">
              Get Care With Telemedicine
            </h1>
            <p className="footnote">
              Take your doctor with you everytime.
            </p>
          </div>
          <div className="bannerimg">
            <Image
              src="/img/membershipbanner.svg" alt="doccirclehome"
              layout="fill"
            />
          </div>
        </div>

        <div className="plans">
          <div className="plans-holder">
            {
              [1, 2, 3].map((item) => (
                <div className="plans-item" key={`plans-${item}`}>
                  <p className="footnote">
                    Monthly
                    Primary Care
                </p>
                  {
                    item !== 2 &&
                    <div className="pricing">
                      <span className="pricing-amount">
                        N950
                    </span>
                      <span className="pricing-duration">
                        /Month
                  </span>
                    </div>
                  }

                  {
                    item === 2 &&
                    <div className="big-pricing">
                      <p className="footnote">
                        N4000/Year
                      </p>
                    </div>
                  }

                  <ul>
                    <li>
                      <div className="img">
                        <Image
                          src="/img/check-circlewhite.svg"
                          alt="check-circle"
                          layout="fill"
                        />
                      </div>
                      <span>
                        Unlimited Consultation
                    </span>
                    </li>
                    <li>
                      <div className="img">
                        <Image
                          src="/img/check-circlewhite.svg"
                          alt="check-circle"
                          layout="fill"
                        />
                      </div>
                      <span>
                        24/7 access to a
                        <br />
                        primary care provider
                    </span>
                    </li>
                    <li>
                      <div className="img">
                        <Image
                          src="/img/check-circlewhite.svg"
                          alt="check-circle"
                          layout="fill"
                        />
                      </div>
                      <span>
                        Audio Call
                    </span>
                    </li>
                    <li>
                      <div className="img">
                        <Image
                          src="/img/check-circlewhite.svg"
                          alt="check-circle"
                          layout="fill"
                        />
                      </div>
                      <span>
                        Video Call
                    </span>
                    </li>
                    <li>
                      <div className="img">
                        <Image
                          src="/img/check-circlewhite.svg"
                          alt="check-circle"
                          layout="fill"
                        />
                      </div>
                      <span>
                        Instant Messaging
                    </span>
                    </li>
                  </ul>

                  <div className="btn-holder">
                    <Button block className="plan-btn">
                      Purchase
                </Button>
                  </div>

                </div>
              ))
            }
          </div>
        </div>


        <div className="offer">
          <h1 className="title">
            What We Offer
          </h1>

          <div className="offer-holder">
            {
              weOffer.map((item) => (
                <div className="offer-item" key={`offer-item-${item.title}`}>
                  <div className="img-extra">
                    <div className="img">
                      <Image
                        src={item.img}
                        alt="offer icon"
                        layout="fill"
                      />
                    </div>
                  </div>

                  <p className="offer-title">
                    {item.title}
                  </p>
                  <span className="text">
                    {item.text}
                  </span>
                </div>
              ))
            }
          </div>
        </div>


        <div className="questions">
          <h1 className="title">
            Let’s Answer Some of your Frequent Questions
          </h1>

          <Collapse defaultActiveKey={['1']} expandIconPosition="right" accordion>
            <Panel header="This is panel header 1" key="1">
              <p>{text}</p>
            </Panel>
            <p />
            <Panel header="This is panel header 2" key="2">
              <p>{text}</p>
            </Panel>
            <p />
            <Panel header="This is panel header 3" key="3">
              <p>{text}</p>
            </Panel>
          </Collapse>
        </div>


        <div className="appoimtments">
          <div className="text-holder">
            <h1 className="title">
              Tired Of Endless Waiting For Doctor’s Appointment?
            </h1>
            <p className="footnote">
              The All-in-One Portal to get your Hospital Seamlessly running
            </p>
            <Button className="into-btn">
              Purchase Plan
            </Button>
          </div>
          <div className="img">
            <Image
              src={'/img/removebg-preview.png'}
              alt="tired of endless waiting"
              layout="fill"
            />
          </div>
        </div>

        <div className="testby">
          <h1 className="title">
            Tested And Supported By:
            </h1>

          <div className="img-holder">
            <div className="img">
              <Image
                src="/img/strastophere.svg"
                alt="strastophere"
                layout="fill"
              />
            </div>
            <div className="img">
              <Image
                src="/img/smilewithmelogo.svg"
                alt="smilewithmelogo"
                layout="fill"
              />
            </div>
            <div className="img">
              <Image
                src="/img/SLA-fav-icon-1.svg"
                alt="SLA-fav-icon-1"
                layout="fill"
              />
            </div>
            <div className="img">
              <Image
                src="/img/marquee.svg"
                alt="marquee"
                layout="fill"
              />
            </div>
            <div className="img">
              <Image
                src="/img/TEF-social-banner.svg"
                alt="TEF-social-banner"
                layout="fill"
              />
            </div>
          </div>
        </div>

        <div className="testby other">
          <h1 className="title">
            Featured On:
            </h1>

          <div className="img-holder">
            <div className="img">
              <Image
                src="/img/BusinessdayLogo.png"
                alt="BusinessdayLogo"
                layout="fill"
              />
            </div>
            <div className="img">
              <Image
                src="/img/CGTN.png"
                alt="CGTN"
                layout="fill"
              />
            </div>
            <div className="img">
              <Image
                src="/img/stears-business-coloured.svg"
                alt="stears-business-coloured"
                layout="fill"
              />
            </div>
            <div className="img">
              <Image
                src="/img/Channels_TV.jpeg"
                alt="Channels_TV"
                layout="fill"
              />
            </div>
          </div>
        </div>

      </div>
      <Footer />
    </div>
  )
}

export default Telemedicine
