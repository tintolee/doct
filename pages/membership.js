import React, { useState } from 'react'
import Nav from '../components/nav/nav'
import { Button, Collapse, Modal, Tabs, Row, Col, Input, Form } from 'antd'
import Footer from '../components/footer/footer';
import Image from 'next/image'
import Headtags from '../components/seo/headtags';

const { TabPane } = Tabs;
const { Panel } = Collapse;

const text = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto eveniet dignissimos quibusdam beatae numquam est rerum quaerat molestias libero veritatis pariatur quisquam laborum rem reiciendis obcaecati, doloribus assumenda odio ipsum!'

const listings = ['No Approvals', 'No Waiting period', 'No pre-existing conditions excluded', 'No Age-groups excluded']

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

const Membership = () => {
  const [paymentModal, setPaymentModal] = useState(false)
  const [submitForm, setSubmitForm] = useState(false)

  const openSubmitForm = () => {
    setSubmitForm(true)
  }

  const closeSubmitForm = () => {
    setSubmitForm(false)
  }

  const openPaymentModal = () => {
    setPaymentModal(true)
  }

  const closePaymentModal = () => {
    setPaymentModal(false)
  }

  return (
    <div className="membership">
      <Headtags
        title="Doctoora - Affordable Community Hospitals For Nigerians - Become a Member"
        desc="Enjoy unlimited access to affordable healthcare from Nigeria's largest community hospital network for only N2000 per year."
        keywords="Hospital registration, membership based healthcare, health card, Health insurance, Affordable healthcare services, Community hospitals near me, Affordable private hospitals in Nigeria, Lagos private hospitals, personalised healthcare services, telemedicine, homecare, diagnostics, Starter pack for healthcare"
      />
      <Nav />
      <div className="membership-main">
        <div className="banner">
          <div className="banner-text">
            <h1 className="title">
              Affordable Healthcare
            <br />
            at just N2000
            </h1>
            <p className="footnote">
              We know and believe everyone deserves access to <br />
quality healthcare, and we know  this does <br />
not conventionally come cheap. <br />
With Doctoora, you can get 24/7 Access to healthcare<br />
at just N2000/Year
            </p>
            <Button className="into-btn">
              Get Me Signed Up
            </Button>
          </div>

          <div className="bannerimg">
            <Image
              src="/img/membershipbanner.svg" alt="doccirclehome"
              layout="fill"
            />
          </div>

          {/* <img src="/img/membershipbanner.svg" alt="doccirclehome" className="bannerimg" /> */}
        </div>


        <div className="tested">
          <p className="footnote">
            Tested and Supported by
          </p>
          <div className="img-holder">
            <Image
              src="/img/CCHUB-logo.svg" alt="naveen"
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
              src="/img/tsl.svg" alt="nes"
              layout="fill"
            />
          </div>
          <div className="img-holder">
            <Image
              src="/img/marquee.svg" alt="tef"
              layout="fill"
            />
          </div>
          {/* <img src="/img/naveen.png" alt="naveen" />
          <img src="/img/myp.png" alt="myp" />
          <img src="/img/nes.png" alt="nes" />
          <img src="/img/tef.png" alt="tef" /> */}
        </div>

        <div className="never-deal">
          <h1 className="title">
            Never Deal With HMO Palaver Ever Again
          </h1>

          <p className="footnote">
            Join Nigeria’s first members-only healthcare network and enjoy 24/7 access to the  best medical services
            <br />
            at affordable rates.
            <br />
            <br />
            Save Credits For Life, Add Dependents, Get Full Control Of Your Health Spend.
          </p>

          <ul>
            <li>

              <div className="img">
                <Image
                  src="/img/check-circle.svg"
                  alt="check-circle"
                  layout="fill"
                />
              </div>
              <span>
                No Approvals
                  </span>
            </li>
            <li>

              <div className="img">
                <Image
                  src="/img/check-circle.svg"
                  alt="check-circle"
                  layout="fill"
                />
              </div>
              <span>
                No Waiting period
                  </span>
            </li>
            <li>

              <div className="img">
                <Image
                  src="/img/check-circle.svg"
                  alt="check-circle"
                  layout="fill"
                />
              </div>
              <span>
                No pre-existing conditions excluded
                  </span>
            </li>
            <li>

              <div className="img">
                <Image
                  src="/img/check-circle.svg"
                  alt="check-circle"
                  layout="fill"
                />
              </div>
              <span>
                No Age-groups excluded
                  </span>
            </li>
          </ul>


        </div>


        <div className="howitworks">
          <h1 className="title">
            How Doctoora Membership Works
          </h1>

          <div className="works-holder">
            <div className="works-item">
              <p className="work-title">
                Register
              </p>
              <span className="work-text">
                Register and create an account
                <br />
                pay the N2000 membership fee
              </span>
            </div>

            <div className="works-item">
              <p className="work-title">
                Purchase E-Voucher
              </p>
              <span className="work-text">
                Purchase an E-voucher package
              <br />
of your choice
              </span>
            </div>

            <div className="works-item">
              <p className="work-title">
                Pay for Healthcare
              <br />
with Credits
              </p>
              <span className="work-text">
                Easily pay for healthcare services
              <br />
with the Doctoora credis
              </span>
            </div>

          </div>
        </div>

        <div className="valuebased">
          <h1 className="title">
            Our Value Based Pricing System
          </h1>

          <div className="value-holder">
            <p className="footnote">
              {` Let's take a malaria treatment example:`}
            </p>


            <div className="example">
              <p className="footnote">
                This is Nonso,  Nonso has symptoms of malaria,<br />
                as a Doctoora user, he can:
              </p>

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
                    decide to book a video consultation with his personal physician (4000 credits)
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
                    request a home test kit (6000 credits)
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
                    request antimalarial tablets via online pharmacy (8000 credits)
                  </span>
                </li>
              </ul>

              <p className="footnote total">
                Total : 18,000 Credits
              </p>

            </div>


            <div className="stand-img">
              <Image
                src="/img/standing-19.svg" alt="standing"
                layout="fill"
              />
            </div>

            {/* <img src="/img/standing-19.svg" alt="standing"
              className="stand-img"
            /> */}
          </div>

        </div>

        <div className="save">
          <div className="info">
            <h1 className="title">
              Save More on Heathcare <br />
              With Doctoora
            </h1>
            <p className="footnote">
              Obtain a Doctoora Health card or any other NFC device and <br />
              carry your Doctoora E-Voucher with you anywhere you go.  <br />
              Pay for health care services online or in-person at any
              <br />
              Doctoora facility nation-wide with your health credits.
            </p>
          </div>

          <div className="img">
            <Image
              src="/img/doccard.png" alt="carddoctoora"
              layout="fill"
            />
          </div>

          {/* <img src="/img/carddoctoora.svg" alt="carddoctoora" /> */}
        </div>

        <div className="afford">
          <h1 className="title">
            Affordable Healthcare Services For You
          </h1>

          <div className="afford-holder">
            <div className="afford-item">

              <div className="img">
                <Image
                  src="/img/tele.png" alt="telemedicine"
                  layout="fill"
                />
              </div>

              {/* <img src="/img/tele.png" alt="telemedicine" /> */}

              <p className="afford-title">
                Telemedicine
              </p>

              <span className="afford-text">
                Medical professionals
                can be consulted online
                from the convenience of
                your home.....
              </span>

              <p className="learnmore">
                Learn More
              </p>
            </div>

            <div className="afford-item">
              <div className="img">
                <Image
                  src="/img/homecare.png" alt="homecare"
                  layout="fill"
                />
              </div>

              {/* <img src="/img/homecare.png" alt="homecare" /> */}

              <p className="afford-title">
                Homecare
              </p>

              <span className="afford-text">
                Experience the best healthcare
                at home. Doctoora Home
                care medical teams provide
                the most convenient....
              </span>

              <p className="learnmore">
                Learn More
              </p>
            </div>

            <div className="afford-item">

              <div className="img">
                <Image
                  src="/img/epharm.png" alt="epharmacy"
                  layout="fill"
                />
              </div>

              {/* <img src="/img/epharm.png" alt="epharmacy" /> */}

              <p className="afford-title">
                E-Pharmacy
              </p>

              <span className="afford-text">
                Our system allows you to order
                the medications you
                need and have them delivered
                to your home....
              </span>

              <p className="learnmore">
                Learn More
              </p>
            </div>

            <div className="afford-item">

              <div className="img">
                <Image
                  src="/img/mdiag.png" alt="epharmacy"
                  layout="fill"
                />
              </div>

              {/* <img src="/img/mdiag.png" alt="diagnostics" /> */}

              <p className="afford-title">
                Diagnostics
              </p>

              <span className="afford-text">
                Finding a medical laboratory or
                diagnostic centre can be stressful
                and time-consuming......

              </span>

              <p className="learnmore">
                Learn More
              </p>
            </div>
          </div>
        </div>

        <div className="showcase">
          <div className="info-holder">
            <h1 className="title">
              Healthcare
              Suited <br />
              for your <br />
              pocket
            </h1>
            <p className="footnote normal">
              Become a member at just N2000/Year
            </p>

            <Button className="show-btn">
              I AM READY
            </Button>
          </div>
          <div className="plan-holder">
            <p className="footnote normal">
              Choose a Starter Pack
            </p>

            {
              [1, 2, 3].map((item) => (
                <div className="plan-item" key={`plan-${item}`}>
                  <div className="plan-top">
                    <p className="plan-title">
                      Bronze
                  </p>

                    <div className="price-included">
                      <p className="plan-title centered">
                        ₦8,000
                  </p>
                      <span>
                        ( N2000 Yearly membership included)
                  </span>
                    </div>
                  </div>

                  <ul>
                    <li>
                      <div className="img">
                        <Image
                          src="/img/foundation_checkbox.svg" alt="diagnostics"
                          layout="fill"
                        />
                      </div>
                      {/* <img src="/img/foundation_checkbox.svg" alt="check-cirlce" /> */}
                      <span>
                        Access to All Doctoora services
                    </span>
                    </li>
                    <li>
                      <div className="img">
                        <Image
                          src="/img/foundation_checkbox.svg" alt="diagnostics"
                          layout="fill"
                        />
                      </div>
                      {/* <img src="/img/foundation_checkbox.svg" alt="foundation_checkbox" /> */}
                      <span>
                        200,000 credits on Doctoora E-Voucher
                    </span>
                    </li>
                    <li>
                      <div className="img">
                        <Image
                          src="/img/foundation_checkbox.svg" alt="diagnostics"
                          layout="fill"
                        />
                      </div>
                      {/* <img src="/img/foundation_checkbox.svg" alt="check-cirlce" /> */}
                      <span>
                        One year Membership
                    </span>
                    </li>
                  </ul>

                  <Button className="plan-btn" onClick={() => openSubmitForm()}>
                    Get Started
                </Button>
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

      {/* contact modal */}
      {
        submitForm &&
        <Modal
          visible={submitForm}
          onOk={closeSubmitForm}
          onCancel={closeSubmitForm}
          className="submit-form-modal"
          footer={null}
          title={`Get Basic Plan`}
        >
          <div className="submit-form">
            <Tabs defaultActiveKey="1" centered>
              <TabPane tab="Register" key="1">
                <Form
                  layout="vertical"
                >
                  <Row gutter={8}>
                    <Col lg={12} xs={24}>
                      <Form.Item
                        label="First Name"
                        name="firstname"
                        rules={[
                          {
                            required: true,
                            message: 'Input required',
                          },
                        ]}
                      >
                        <Input placeholder="First Name" />
                      </Form.Item>
                    </Col>
                    <Col lg={12} xs={24}>
                      <Form.Item
                        label="Last Name"
                        name="lastname"
                        rules={[
                          {
                            required: true,
                            message: 'Input required',
                          },
                        ]}
                      >
                        <Input placeholder="Last Name" />
                      </Form.Item>
                    </Col>
                    <Col lg={12} xs={24}>
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
                            message: 'Please input your email',
                          },
                        ]}
                      >
                        <Input placeholder="Email" />
                      </Form.Item>
                    </Col>
                    <Col lg={12} xs={24}>
                      <Form.Item
                        label="Phone"
                        name="phone"
                        rules={[
                          {
                            required: true,
                            message: 'Input required',
                          },
                        ]}
                      >
                        <Input placeholder="Phone" />
                      </Form.Item>
                    </Col>
                  </Row>
                  <Form.Item
                  >
                    <Button
                      block
                      className="submit-btn"
                    >
                      Proceed
                    </Button>
                  </Form.Item>
                </Form>
              </TabPane>
              <TabPane tab="Have account?" key="2">
                <Form
                  layout="vertical"
                >
                  <Row gutter={8}>
                    <Col lg={24} xs={24}>
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
                            message: 'Please input your email',
                          },
                        ]}
                      >
                        <Input placeholder="Email" />
                      </Form.Item>
                    </Col>

                  </Row>
                  <Form.Item
                  >
                    <Button
                      block
                      className="submit-btn"
                    >
                      Proceed
                    </Button>
                  </Form.Item>
                </Form>
              </TabPane>
            </Tabs>
          </div>
        </Modal>
      }

      <Footer />
    </div>
  )
}

export default Membership
