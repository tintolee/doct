import React from 'react'
import { Col, Row, Rate, Checkbox, Button } from 'antd'
import Image from 'next/image'
import ReadMoreReact from 'read-more-react';


const Doctor = ({ openDrawer, doctor }) => {

  const runCheck = (value) => {
    return doctor.appointment_intervals.some((item) => item.type === value)
  }

  return (
    <div className="doctor-result">
      <Row gutter={16}>
        <Col lg={6} xs={24}>
          <div className="doctor-img">
            <Image
              src={doctor.dp}
              alt="bookdoctor"
              layout="fill"
            />
          </div>
        </Col>
        <Col lg={12}>
          <p className="doctor-name">
            Dr {doctor.firstname} {doctor.lastname}
          </p>
          <p className="speciality">
            {doctor.specialization}
          </p>

          <Row gutter={2}>
            <Col lg={12} xs={24}>
              <div className="drate-holder">
                <span className="drate">
                  Overall Rating.
                </span>
                <Rate disabled allowHalf defaultValue={doctor.review} />
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


          <div className="experience">
            <div className="eimg">
              <Image
                src="/img/thestoscope.svg"
                alt="bookdoctor"
                layout="fill"
              />
            </div>
            <span>
              Consultant
            </span>
          </div>

        </Col>
        <Col lg={6}>
          <div className="availanle-for">
            <p className="heading">
              Available for:
          </p>

            <p className="types">
              <span>
                Telemedicine  <Checkbox defaultChecked={runCheck('Video Consultation')} disabled />
              </span>
            </p>
            <p className="types">
              <span>
                Facility Visit  <Checkbox defaultChecked={runCheck('Facility Visit')} disabled />
              </span>
            </p>
            <p className="types">
              <span>
                Home Visit  <Checkbox defaultChecked={runCheck('Home Visit')} disabled />
              </span>
            </p>

            <Button className="action-btn" block onClick={() => openDrawer(doctor)}>
              Book Professional
            </Button>
          </div>

        </Col>
      </Row>

      <div className="review">
        <p className="heading">
          Patient’s Review
        </p>

        <p className="text">
          “Dr Monisola was calm and professional, easy to talk to and helped me understand my
          health challenges better”  - Tayo Olaide
        </p>

        <p className="text">
          “Dr Monisola was calm and professional, easy to talk to and helped me understand my
          health challenges better”  - Gbenga Soyoye
        </p>

        <Button className="readmore-btn">
          Read More
        </Button>

      </div>

      {
        doctor.info &&
        <div className="review">
          <p className="text normal-text">
            <ReadMoreReact text={doctor.info} readMoreText="Read more" />
          </p>

          {/* <Button className="readmore-btn">
          Read More
        </Button> */}

        </div>
      }



    </div>
  )
}

export default Doctor
