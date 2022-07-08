import React, { useState, useRef } from 'react';
import { Collapse, Modal, Form, Checkbox, Row, Col, Button } from 'antd';
import Footer from '../components/footer/footer';
import Image from 'next/image'
import Headtags from '../components/seo/headtags';
import Slider from "react-slick";
import Link from 'next/link';
const { Panel } = Collapse;

const todoLinks = [
  {
    title: 'Home Care',
    link: '/',
    img: '/img/td1.svg'
  },
  {
    title: 'Bookings',
    link: '/careFinder',
    img: '/img/td5.svg'
  },
  {
    title: 'Consultation',
    link: '/',
    img: '/img/td3.svg'
  },
  {
    title: 'Tele Medicine',
    link: '/',
    img: '/img/td4.svg'
  },
  
]

const works = [
  'Sign Up/Create Account',
  'Choose Preferred Service',
  'Enjoy Uninterrupted Healthcare'
]

const text = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto eveniet dignissimos quibusdam beatae numquam est rerum quaerat molestias libero veritatis pariatur quisquam laborum rem reiciendis obcaecati, doloribus assumenda odio ipsum!'

const testimonyList = [
  {
    name: 'Stears Business',
    text: `Not every industry needs an “Uber” model, 
    but healthcare might. This story unpacks the 
    Doctoora business model to see how its 
    utilizingspare capacity to provide Nigerians 
    with affordable healthcare.`,
    img: '/img/userimg.png'
  },
  {
    name: 'Femi',
    text: `Doctoora health Is doing great stuff in the 
    private space. The government should be 
    focusing on the affordability of these 
    services for Nigerians. We're lightyears 
    behind on that`,
    img: '/img/userimg.png'
  },
  {
    name: 'Guarantee Trust',
    text: `Health care is a right, not a privilege.   
    Everyone deserves access to a healthcare 
    system that is well equipped and inclusive.
    That's why we gave the Doctoora team all 
    the support they needed to re-innovate and 
    improve the healthcare system in their 
    community.`,
    img: '/img/userimg.png'
  }
]

const servicesPool = ['Homecare', 'Diagnostics', 'In-Patient Care', 'Telemedicine', 'Online Pharmacy']

const howoften = [
  'Very Often',
  'Monthly',
  'Yearly',
  'Only when there is need'
]

const annalList = [
  'Yes',
  'No'
]

const approaches = [
  'Regular exercise',
  'Healthy eating',
  'Calorie counting',
  'Preventative health screening',
  'Yoga',
  'Natural herbs'
]

const loading = false

const Homepage = () => {
  const formRef = useRef(null)
 const slider= React.createRef()
 const settings ={
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  
  }

  const [visible, setVisible] = useState(false)
  // const [loading, setLoading] = useState(false)

  const openModal = () => {
    setVisible(true)
  }

  const closeMoal = () => {
    setVisible(false)
  }

  const onFinish = (values) => {
    console.log(values)
  }

  // const { user } = useSelector(state => ({
  //   user: state.userReducer.user,
  // }))

  // console.log(user)

  return (
    <div className="homepage">
      <Headtags
        title="Doctoora - Affordable Patient-Focused Healthcare Services Near You"
        desc="Doctoora provides affordable healthcare services in community hospitals near you. Get quality and affordable health services at home or within your community."
        keywords="the best healthcare services in Nigeria, good doctors in Nigeria, Quality Healthcare You can trust, Healthcare Cover, Health Insurance, Low cost healthcare, Affordable hospitals, digital health, telemedicine"
      />
     
      <div className="homepage-main">
        {/* banner */}
        <div className="banner">
          <div className="banner-text">
            <h1 className="title">
              Live Healthier, Live Better
            <br />
            With Doctoora
            </h1>
            <p className="footnote">
              Get Affordable Healthcare Everytime, Wherever You Are
            </p>
            <Button className="into-btn"
              onClick={() => {
                openModal()
              }}
            >
              I’M INTERESTED
            </Button>
          </div>

          <div className="bannerimg">
            <Image
              src="/img/nwhompage.svg"
              alt="doccirclehome"
              layout="fill"
            />
          </div>

          {/* <img src="/img/homedocside.png" alt="doccirclehome" className="bannerimg" /> */}

        </div>

        {/* tested by section */}

        <div className="tested">
          <p className="footnote">
            Tested and Supported by
          </p>
          <div className="img-holder">
            <Image
              src="/img/naveen2.svg" alt="naveen"
              layout="fill"
            />
          </div>
          <div className="img-holder">
            <Image
              src="/img/PHARMACY.svg" alt="myp"
              layout="fill"
            />
          </div>
          <div className="img-holder">
            <Image
              src="/img/nes2.svg" alt="nes"
              layout="fill"
            />
          </div>
          <div className="img-holder">
            <Image
              src="/img/TEF-social-banner.svg" alt="tef"
              layout="fill"
            />
          </div>
          {/* <img src="/img/naveen.png" alt="naveen" />
          <img src="/img/myp.png" alt="myp" />
          <img src="/img/nes.png" alt="nes" />
          <img src="/img/tef.png" alt="tef" /> */}
        </div>

        {/* todo */}

        <div className="todo">
          <h1 className="title">
            What Would You Like To Do Today?
          </h1>
          <p className="footnote">
            We have an array of healthcare services to ensure that you and your loved ones are in perfect condition
          </p>

          {/* todo holder */}

          <div className="todo-holder">
            <div className="action-icon" onClick={() => slider.current.slickPrev()}>
              <Image
                src="/img/arrowleft.png" alt="arrowleft"
                layout="fill"
              />
            </div>

            {/* <img src="/img/arrowleft.png" alt="arrowleft" className="action-icon left" /> */}
            
            <div className="todos-main">
              {
                todoLinks.map((item, index) => (
                  
                  <div className="todo-item" key={`todo-item-${index}`}>
                     
                    <div className="img">
                    <Link href={item.link}>
                      <Image
                        src={item.img}
                        alt={`todo-${index}`}
                        layout="fill"
                      />
                      </Link>
                    </div>

                    {/* <img src={item.img} alt={`todo-${index}`} /> */}

                    <p className="todo-title">
                      {item.title}
                    </p>
                   
                  </div>
            
                 
                ))
              }
           </div>
           
            <div className="action-icon" onClick={() => slider.current.slickNext()}>
              <Image
                src="/img/arrowright.png" alt="arrowright"
                layout="fill"
              />
            </div>

            {/* <img src="/img/arrowright.png" alt="arrowleft" className="action-icon right" /> */}
          </div>
        </div>

        {/* works section */}

        <div className="works">
          <h1 className="title">
            How The Doctoora Healthcare System Works
          </h1>
          <p className="footnote">
            Getting started on the Doctoora Healthcare system is as simple as A,B,C.
            <br />
Follow the steps below and you are on your way to enjoying premium healthcare
          </p>

          <div className="img">
            <Image
              src="/img/line.png" alt="spiral"
              layout="fill"
            />
          </div>

          <div className="works-holder">
            {
              works.map((work, index) => (
                <p key={`work-${index}`} className="works-item">
                  {work}
                </p>
              ))
            }
          </div>
        </div>


        {/* all in one section */}
        <div className="allinone">
          <h1 className="title">
            How The Doctoora Healthcare System Works
          </h1>
          <p className="footnote">
            Our passion is your health. All your health needs are now just one click away from being met. <br />
for convenience and peace of mind.
Become a member today to see how Doctoora Health <br />
can help you live healthier lives and enjoy exclusive discounts!.
          </p>
          <div className="action-holder">
            <Button className="action-btn"
              onClick={() => {
                openModal()
              }}
            >
              BECOME A MEMBER
            </Button>
          </div>
        </div>

        <div className="questions">
          <h1 className="title">
            Let’s Answer Some of your Frequent Questions
          </h1>

          <Collapse defaultActiveKey={['1']} expandIconPosition="right" accordion>
            <Panel header="Question 1" key="1">
              <p>{text}</p>
            </Panel>
            <p/>
            <Panel header=" Question 2" key="2">
              <p>{text}</p>
            </Panel>
            <p/>
            <Panel header="Question 3" key="3">
              <p>{text}</p>
            </Panel>
          </Collapse>
        </div>

        {/* testimonies section */}
        <div className="testimonies">
          <h1 className="title">
           What Doctoora users have to say
          </h1>

          <div className="testimonies-holder">
            {
              testimonyList.map((item, index) => (
                <div className="testimony" key={`tesitimony-${index}`}>
                  <p className="test-test">
                    {item.text}
                  </p>
                  <div className="user-info">

                    <div className="img">
                      <Image
                        src={item.img} alt="usertesti"
                        layout="fill"
                      />
                    </div>

                    {/* <img src={item.img} alt="usertesti" /> */}

                    <p className="user-name">
                      {item.name}
                    </p>
                  </div>
                </div>
              ))
            }
          </div>
        </div>

      </div>
      <Footer />

      <Modal
        className="interested-modal"
        footer={null}
        title={null}
        onOk={closeMoal}
        onCancel={closeMoal}
        visible={visible}
      >
        <div className="form-holder">
          <p className="footnote">
            Kindly fill the form below to help us determine the healthcare package
            that best suites your taste and lifestyle
          </p>

          <Form
            layout="vertical"
            ref={formRef}
            onFinish={onFinish}
          >
            <Form.Item
              label="Which of our service(s) would you be most interested in?"
              name="services"
              rules={[
                {
                  required: true,
                  message: 'Required field',
                },
              ]}
            >
              <span> (Select as many as apply to you) <br /></span>
              <Checkbox.Group
                onChange={(values) => {
                  formRef.current.setFieldsValue({
                    services: values
                  })
                }}
              >
                <Row gutter={8}>
                  {
                    servicesPool.map((item, index) => (
                      <Col key={`ser-list-${index}`}>
                        <Checkbox value={item} >
                          {item}
                        </Checkbox>
                      </Col>
                    ))
                  }
                </Row>
              </Checkbox.Group>
            </Form.Item>
            <Form.Item
              label="How often do you use healthcare services (see a doctor, buy medication, 
                hospital admission, run diagnostics etc) every year?"
              name="frequency"
              rules={[
                {
                  required: true,
                  message: 'Required field',
                },
              ]}
            >
              <Checkbox.Group
                onChange={(values) => {
                  let newAssign = values[1] === undefined ? values[0] : values[1]
                  formRef.current.setFieldsValue({
                    frequency: newAssign
                  })
                }}
              >
                <Row gutter={8}>
                  {
                    howoften.map((item, index) => (
                      <Col key={`freq-${index}`}>
                        <Checkbox value={item} >
                          {item}
                        </Checkbox>
                      </Col>
                    ))
                  }
                </Row>
              </Checkbox.Group>
            </Form.Item>
            <Form.Item
              label="Do you get annual health & wellness check ups done?"
              name="annually"
              rules={[
                {
                  required: true,
                  message: 'Required field',
                },
              ]}
            >
              <Checkbox.Group
                onChange={(values) => {
                  let newAssign = values[1] === undefined ? values[0] : values[1]
                  formRef.current.setFieldsValue({
                    annually: newAssign
                  })
                }}
              >
                <Row gutter={8}>
                  {
                    annalList.map((item, index) => (
                      <Col key={`freq-${index}`}>
                        <Checkbox value={item} >
                          {item}
                        </Checkbox>
                      </Col>
                    ))
                  }
                </Row>
              </Checkbox.Group>
            </Form.Item>
            <Form.Item
              label="Which of our service(s) would you be most interested in?"
              name="approaches"
              rules={[
                {
                  required: true,
                  message: 'Required field',
                },
              ]}
            >
              <span> (Select as many as apply to you) <br /></span>
              <Checkbox.Group
                onChange={(values) => {
                  formRef.current.setFieldsValue({
                    approaches: values
                  })
                }}
              >
                <Row gutter={8}>
                  {
                    approaches.map((item, index) => (
                      <Col key={`app-list-${index}`}>
                        <Checkbox value={item} >
                          {item}
                        </Checkbox>
                      </Col>
                    ))
                  }
                </Row>
              </Checkbox.Group>
            </Form.Item>
            <Form.Item>
              <Button
                loading={loading}
                disabled={loading}
                htmlType="submit"
              >
                Proceed to Signup
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Modal>
    </div>
  )
}

export default Homepage
