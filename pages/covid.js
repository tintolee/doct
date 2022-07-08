import React, { useState, useRef } from 'react'
import Nav from '../components/nav/nav'
import Image from 'next/image'
import Footer from '../components/footer/footer';
import { Button, Collapse, DatePicker, Form, Col, Row, Input, Checkbox } from 'antd'
import { disabledDate } from '../utils/helper'
import Headtags from '../components/seo/headtags';

const { Panel } = Collapse;

const Covid = () => {
  const formRef = useRef(null)
  const [loading, setLoading] = useState(false)


  const bookingChange = (values) => {
    let newAssign = values[1] === undefined ? values[0] : values[1]
    formRef.current.setFieldsValue({
      booktype: newAssign === undefined ? [] : [newAssign]
    })
  }

  const modeChange = (values) => {
    let newAssign = values[1] === undefined ? values[0] : values[1]
    formRef.current.setFieldsValue({
      mode: newAssign === undefined ? [] : [newAssign]
    })
  }

  const testimonyList = [
    {
      name: 'Tola',
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
      name: 'Charles',
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

  const text = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto eveniet dignissimos quibusdam beatae numquam est rerum quaerat molestias libero veritatis pariatur quisquam laborum rem reiciendis obcaecati, doloribus assumenda odio ipsum!'

  return (
    <div className="covid">
      <Headtags
        title="Doctoora - Get Covid-19 Vaccination at Home or Clinic Near You"
        desc="Get vaccinated against Covid-19 with Doctoora. Book appointments online and skip long queues at hospitals near you or request home vaccination."
        keywords="the best healthcare services in Nigeria, good doctors in Nigeria, Quality Healthcare You can trust, Healthcare Cover, Health Insurance, Low cost healthcare, Affordable hospitals, digital health, telemedicine"
      />
      <Nav />
      <div className="covid-main">
        <div className="banner">
          <div className="banner-text">
            <h1 className="title">
              Protect Yourself And Your
              <br />
              Loved Ones From
              <br />
              Covid-19
            </h1>
            <p className="footnote">
              Get your Covid-19 vaccination done at a facility
              <br />
              near you or request in-home vaccination.
            </p>
            <p className="footnote below">
              1728 Vaccinations Completed
            </p>

            <Button className="into-btn">
              Book Appointment
            </Button>

            <p className="footnote below-down">
              Avoid “Had i Known” Schedule your Vaccination now
            </p>
          </div>
          <div className="bannerimg">
            <Image
              src="/img/covidbanner.svg" alt="doccirclehome"
              layout="fill"
            />
          </div>
        </div>

        <div className="dataform-holder">
          <div className="dataform">
            <Form>
              <Row gutter={16}>
                <Col lg={9} xs={24}>
                  <Form.Item
                    name="location"
                    rules={[
                      {
                        required: true,
                        message: 'Required field',
                      },
                    ]}
                  >
                    <Input placeholder="Locaton" />
                  </Form.Item>
                </Col>
                <Col lg={9} xs={24}>
                  <Form.Item
                    name="date"
                    rules={[
                      {
                        required: true,
                        message: 'Required field',
                      },
                    ]}
                  >
                    <DatePicker
                      disabledDate={disabledDate}
                      className="select-date-time"
                      format="YYYY-MM-DD"
                    />
                  </Form.Item>
                </Col>
                <Col lg={6} xs={24}>
                  <Button
                    block
                    htmlType="submit"
                    className="go-btn"
                    disabled={loading}
                    loading={loading}>
                    SEARCH
            </Button>
                </Col>
              </Row>
            </Form>
          </div>
        </div>

        <div className="types">
          <div className="img-holder">
            <Image
              src="/img/moderna.svg" alt="moderna"
              layout="fill"
            />
          </div>
          <div className="img-holder">
            <Image
              src="/img/astrazeneca.svg" alt="astrazeneca"
              layout="fill"
            />
          </div>
        </div>


        <div className="why">
          <div className="img-holder">
            <Image
              src="/img/coviddrug.svg" alt="coviddrug"
              layout="fill"
            />
          </div>

          <div className="text-info">
            <h1 className="title">
              Why You Should Get Vaccinated
            </h1>

            <div className="headings">
              <div className="img-icon">
                <Image
                  src="/img/dbcircle.svg" alt="dbcircle"
                  layout="fill"
                />
              </div>
              <p className="heading-text">
                Protect Yourself
              </p>
            </div>
            <p className="texts">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam maiores natus, possimus esse libero velit sed beatae. Earum, officiis officia atque vero recusandae porro minima nemo reprehenderit, quasi, minus dolorem.
            </p>

            <div className="headings">
              <div className="img-icon">
                <Image
                  src="/img/dbcircle.svg" alt="dbcircle"
                  layout="fill"
                />
              </div>
              <p className="heading-text">
                Stop The Spread of Covid-19
              </p>
            </div>
            <p className="texts">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam maiores natus, possimus esse libero velit sed beatae. Earum, officiis officia atque vero recusandae porro minima nemo reprehenderit, quasi, minus dolorem.
            </p>

            <div className="headings">
              <div className="img-icon">
                <Image
                  src="/img/dbcircle.svg" alt="dbcircle"
                  layout="fill"
                />
              </div>
              <p className="heading-text">
                Enhance Herd Immunity
              </p>
            </div>
            <p className="texts">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam maiores natus, possimus esse libero velit sed beatae. Earum, officiis officia atque vero recusandae porro minima nemo reprehenderit, quasi, minus dolorem.
            </p>
          </div>
        </div>

        <div className="advantage">
          <h1 className="title">
            The Doctoora Advantage
          </h1>


          <div className="headings">
            <div className="img-icon">
              <Image
                src="/img/dbcircle.svg" alt="dbcircle"
                layout="fill"
              />
            </div>
            <p className="heading-text">
              Fast And Easy Booking
              </p>
          </div>
          <div className="headings">
            <div className="img-icon">
              <Image
                src="/img/dbcircle.svg" alt="dbcircle"
                layout="fill"
              />
            </div>
            <p className="heading-text">
              Flexibility Of Vaccination Venue
              </p>
          </div>
          <div className="headings">
            <div className="img-icon">
              <Image
                src="/img/dbcircle.svg" alt="dbcircle"
                layout="fill"
              />
            </div>
            <p className="heading-text">
              No More Queuing at Vaccination Center
              </p>
          </div>
          <div className="headings">
            <div className="img-icon">
              <Image
                src="/img/dbcircle.svg" alt="dbcircle"
                layout="fill"
              />
            </div>
            <p className="heading-text">
              Post Vaccination Guidance
              </p>
          </div>
        </div>


        <div className="main-form">
          <div className="img-holder">
            <Image
              src="/img/inject.svg" alt="inject"
              layout="fill"
            />
          </div>

          <div className="form-holder">
            <h1 className="title">
              Protect Yourself and Those  Around
              <br />
You. Get Vaccinated
              </h1>

            <Form
              layout="vertical"
              ref={formRef}
            >
              <Form.Item
                name="booktype"
                label="I am booking for"
                rules={[
                  {
                    required: true,
                    message: 'Required field',
                  },
                ]}
              >
                <Checkbox.Group onChange={bookingChange} >
                  <Row>
                    <Col>
                      <Checkbox
                        value="Myself">
                        Myself
                      </Checkbox>
                    </Col>
                    <Col>
                      <Checkbox value="Someone Else">
                        Someone Else
                      </Checkbox>
                    </Col>
                  </Row>
                </Checkbox.Group>
              </Form.Item>
              <Form.Item
                label="Full Name"
                name="fullname"
                rules={[
                  {
                    required: true,
                    message: 'Required field',
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Email"
                name="email"
                rules={[
                  {
                    type: 'email',
                    message: 'The input is not valid email',
                  },
                  {
                    required: true,
                    message: 'Required field',
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Phone"
                name="phone"
                rules={[
                  {
                    required: true,
                    message: 'Required field',
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Location"
                name="location"
                rules={[
                  {
                    required: true,
                    message: 'Required field',
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Date"
                name="date"
                rules={[
                  {
                    required: true,
                    message: 'Required field',
                  },
                ]}
              >
                <DatePicker
                  disabledDate={disabledDate}
                  className="select-date-time"
                  format="YYYY-MM-DD"
                />
              </Form.Item>
              <Form.Item
                name="mode"
                label="Preferred Mode of Vaccination"
                rules={[
                  {
                    required: true,
                    message: 'Required field',
                  },
                ]}
              >
                <Checkbox.Group
                  onChange={modeChange}
                >
                  <Row>
                    <Col>
                      <Checkbox value="Home Vaccination">
                        Home Vaccination
                      </Checkbox>
                    </Col>
                    <Col>
                      <Checkbox value="Center Vaccination">
                        Center Vaccination
                      </Checkbox>
                    </Col>
                  </Row>
                </Checkbox.Group>
              </Form.Item>
              <Form.Item>
                <Button

                  htmlType="submit"
                  className="submit-btn"
                  disabled={loading}
                  loading={loading}>
                  Submit
            </Button>
              </Form.Item>
            </Form>
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
            <p/>
            <Panel header="This is panel header 2" key="2">
              <p>{text}</p>
            </Panel>
            <p/>
            <Panel header="This is panel header 3" key="3">
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
    </div>
  )
}

export default Covid
