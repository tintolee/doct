import React from 'react'
import Nav from '../components/nav/nav'
import Image from 'next/image'
import Link from 'next/link'
import Bannerform from '../components/bannerform/bannerform'
import { Row, Col, Rate } from 'antd'
import {
  ArrowRightOutlined,
} from '@ant-design/icons';
import Footer from '../components/footer/footer';
import Headtags from '../components/seo/headtags'

const frequently = [
  `Dentist`,
  `Optician`,
  `Optometrist`,
  `Allegist`,
  `Anesthesiologist`,
  `Behavioural Therapist`,
  `Cadiologist`,
  `Cardiothoracic Surgeon`,
  `Child Psychologist`,
  `Community Physician`,
  `Counselor`,
  `Critical Care Physician`,
  `Dermatologist`,
  `Dietician`,
  `Family Medicine`,
  `General Surgeon`,
  `Gynecologist`,
  `Psychiatrist`
]

const levelOne = [
  `Dentist in Abuja`,
  `Dermatologist in Lekki`,
  `Urologist in Surulere`,
  `Dietician in Yaba`
]

const levelTwo = [
  `Cardiologist in Lekki`,
  `Nephrologist in Ikeja`,
  `General Surgeon in Abule-egba`,
  `Oncologist in Ketu`
]

const steps = [
  {
    img: '/img/step1.svg',
    text: `Select your 
    type of care`
  },
  {
    img: '/img/step4.svg',
    text: `Select Date of  
    appointment`
  },
  {
    img: '/img/step3.svg',
    text: `Search for Available 
    Providers`
  },
  {
    img: '/img/step2.svg',
    text: `Select your 
    Preferred Caregiver`
  },
  {
    img: '/img/step5.svg',
    text: `Pay for your 
    Appointment`
  }
]

const findDoc = [
  `Aerobics instructor`,
  `Dentist`,
  `Infectious Disease Specialist`,
  `Allergist`,
  `Homecare Nurse`,
  `Lifestyle Coach`,
  `Anaesthethiologist`,
  `Dermatologist`,
  `Dermatologist`,
  `Massage Therapist`,
  `Community Physician`,
  `E.N.T ( Ear, Nose 
    and Throat Surgeon)`,
  `Medical Geneticist`,
  `Bariatic Surgeon`,
  `Cardiothoracic Surgeon`,
  `Clinical Hermatologist`,
  `Cardiologist`,
  `Chiropractor`,
  `Child Psychologist`,
  `Counsellor`,
  `Critical Care Physician`,
  `Dietician`,
  `Emergency 
  Medicine Specialist `,
  `Endocrinologist`,
  `General Practitioner`,
  `Gastroenterologist`,
  `First Aider`,
  `Family Medicine `,
  `General Surgeon`,
  `Gynecologist`,
  `Hermatologist`,
  `Medical Geneticist`,
  `Medical Officer`,
  `Midwife`,
  `Nephrologist`,
  `Neurologist`,
  `Neurosurgeon`,
  `Nurse`,
  `Nutritionist`,
  `Optician`,
  `Optometrist`,
  `Pathologist`,
  `Psychiatrist`
]

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

const Book = () => {
  return (
    <div className="book">
      <Headtags
        title="Doctoora - Same-Day Appointments With The Best Doctors Near You. "
        desc="Doctoora provides easy and affordable online and offline access to verified, quality healthcare services by Doctors, other experts and hospitals in Nigeria"
        keywords="the best healthcare services in Nigeria, the best doctors near me, search and compare top doctors, find the best specialists in Nigeria, The best dermatologists, Cardiology specialist doctors in nigeria, emergency healthcare, doctor ratings in Nigeria, Health Insurance, Low cost healthcare, Affordable hospitals, digital health, telemedicine"
      />
     
      <div className="book-main">
        <div className="banner">
          <h1 className="title">
            Book The Best Doctors
          <br />
          on Doctoora
          </h1>
          <p className="footnote">
            Book Online or Call  <Link href="tel: +2348105094729">
              +2348105094729
                </Link>
          </p>
          <Bannerform />
        </div>


        {/* top rated */}
        <div className="top-rated">
          <h1 className="title">
            Top Rated Medical Professionals
          </h1>
          <p className="footnote">
            Meet some of our top rated Professionals, Patients have vetted over time.
          </p>

          <div className="top-rated-holder">
            {
              [1, 2, 3].map((item) => (
                <div className="ratedcotor" key={`ratedcotor-${item}`}>
                  <div className="img">
                    <Image
                      src="/img/bookdoc.svg"
                      alt="bookdoctor"
                      layout="fill"
                    />
                  </div>
                  <p className="ratedcotor-name">
                    Dr Monisola Adanijo
                  </p>
                  <p className="speciality">
                    Ophthamologist
                  </p>

                  <Row>
                    <Col lg={12} xs={24}>
                      <div className="drate-holder">
                        <span className="drate">
                          Overall Rating.
                      </span>
                        <Rate disabled allowHalf defaultValue={4.5} />
                      </div>
                    </Col>
                    <Col lg={12} xs={24}>
                      <div className="drate-holder">
                        <span className="drate">
                          Wait Time
                      </span>
                        <Rate disabled allowHalf defaultValue={4.5} />
                      </div>
                    </Col>
                    <Col lg={12} xs={24}>
                      <div className="drate-holder">
                        <span className="drate">
                          Communication
                      </span>
                        <Rate disabled allowHalf defaultValue={4.5} />
                      </div>
                    </Col>
                    <Col lg={12} xs={24}>
                      <div className="drate-holder">
                        <span className="drate">
                          Bedside Manner
                      </span>
                        <Rate disabled allowHalf defaultValue={4.5} />
                      </div>
                    </Col>
                  </Row>

                  <div className="experience">
                    <div className="eimg">
                      <Image
                        src="/img/medicalbag.svg"
                        alt="bookdoctor"
                        layout="fill"
                      />
                    </div>
                    <span>
                      14 years Experience
                      </span>
                  </div>

                  <p className="quote">
                    “Dr Monisola was calm and professional,
                    easy to talk to and helped me understand my
                    health challenges better”  - Tayo Olaide
                  </p>

                </div>
              ))
            }
          </div>
        </div>


        <div className="frequently">
          <h1 className="title">
            Top Rated Medical Professionals
          </h1>

          <div className="frequently-holder">
            {
              frequently.map((item) => (
                <div className="item" key={item}>
                  <p className="text">
                    {item}
                  </p>
                </div>
              ))
            }
          </div>
        </div>


        <div className="search">
          <h1 className="title">
            Popular Searches
          </h1>


          <div className="levels">
            {
              levelOne.map((item) => (
                <p className="search-item" key={item}>
                  {item}
                </p>
              ))
            }
          </div>

          <div className="levels second">
            {
              levelTwo.map((item) => (
                <p className="search-item" key={item}>
                  {item}
                </p>
              ))
            }
          </div>
        </div>

        <div className="steps">
          <h1 className="title">
            5 Easy Steps To Get Started
          </h1>

          <div className="stepsholder">
            {
              steps.map((item, index) => (
                <div className="step-item" key={`step-${index}`}>
                  <div className="img">
                    <Image
                      src={item.img}
                      alt={item.img}
                      layout="fill"
                    />
                  </div>
                  <p>
                    {item.text}
                  </p>
                </div>
              ))
            }
          </div>
        </div>

        <div className="search-find">
          <div className="text-holder">
            <p className="footnote">
              Search and book for medical personnel and hospitals closest to you.<br />
              Compare prices, see ratings from real patients.
              Organise your doctor’s appointments with ease from anywhere! <br />
              Book any doctor or healthcare service now and get seen on time.<br />
            </p>
          </div>
          <div className="img">
            <Image
              src="/img/searchbook.svg"
              alt="searchbook"
              layout="fill"
            />
          </div>
        </div>


        <div className="weoffer">
          <h1 className="title">
            The Only Healthcare Provider You’ll Ever Need
            </h1>

          <p className="footnote">
            No matter where in Nigeria you live, our dedicated specialists will help diagnose and provide
            treatment advice as soon as possible. See a medical specialist at home, in clinic or via telemedicine.
            Get medication delivered to your home or pick up at a pharmacy near you.
            </p>

          <div className="weoffer-holder">
            <div className="weoffer-item">
              <div className="item-side"></div>
              <div className="item-main">
                <p className="main-info">
                  Child Care
                  <br />
Services
                  </p>
              </div>
            </div>

            <div className="weoffer-item">
              <div className="item-side"></div>
              <div className="item-main">
                <p className="main-info">
                  Mental Health
                  <br />
Services
                  </p>
              </div>
            </div>

            <div className="weoffer-item">
              <div className="item-side"></div>
              <div className="item-main">
                <p className="main-info">
                  Dental Care
                  <br />
Services
                  </p>
              </div>
            </div>
          </div>

          <div className="weoffer-holder">
            <div className="weoffer-item">
              <div className="item-side"></div>
              <div className="item-main">
                <p className="main-info">
                  Eye Care
                  <br />
Services
                  </p>
              </div>
            </div>

            <div className="weoffer-item">
              <div className="item-side"></div>
              <div className="item-main">
                <p className="main-info">
                  Surgical Health
                  <br />
Services
                  </p>
              </div>
            </div>

            <div className="weoffer-item">
              <div className="item-side"></div>
              <div className="item-main">
                <p className="main-info">
                  Skin Care
                  <br />
Services
                  </p>
              </div>
            </div>
          </div>


          <div className="aciton-holder">
            <p className="view-more" >
              View More Services <ArrowRightOutlined />
            </p>
          </div>

        </div>

        <div className="best">
          <h1 className="title">
            Book The Best Doctors On Doctoora
          </h1>
          <p className="footnote">
            Book Online or Call  <Link href="tel: +2348105094729">
              +2348105094729
                </Link>
          </p>
        </div>

        <div className="rightdoctor">
          <h1 className="title">
            Find The Right Specialist Near You
          </h1>

          <div className="doctor-holder">
            {
              findDoc.sort((a, b) => a.localeCompare(b)).map((item, index) => (
                <p className="doctor-type" key={`doctype-find-${item}-${index}`}>
                  {item}
                </p>
              ))
            }
          </div>
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

export default Book
