import React, { useState, useRef, useEffect, useCallback } from 'react'
import Nav from '../components/nav/nav'
import Bannerform from '../components/bannerform/bannerform'
import Footer from '../components/footer/footer';
import {
  ArrowLeftOutlined,
  LoadingOutlined
} from '@ant-design/icons';
import { useRouter } from 'next/router'
import { Form, Row, Col, Select, Rate, Pagination, Drawer, Input, DatePicker, Checkbox, Button, notification, message, Modal } from 'antd'
import { useSelector } from 'react-redux'
import Related from '../components/search/related/related';
import Doctor from '../components/search/doctor/doctor';
import Pageloader from '../components/pageloader/pageloader';
import moment from 'moment'
import numeral from 'numeral'
import axios from 'axios'
import api from '../config/api'
import { disabledDate, getNumberForDay } from '../utils/helper';
import { PaystackButton } from "react-paystack"
import Headtags from '../components/seo/headtags';

const { Option } = Select

const openNotificationWithIcon = (type, msg, desc) => {
  notification[type]({
    message: msg,
    description: desc
  })
}

const visitTypes = [
  'Home Visit', 'Facility Visit', 'Video Consultation'
]

const titles = [
  'Dr.', 'Mr.', 'Mrs.', 'Ms.', 'Miss', 'Prof', 'PT'
]

const reasons = [
  'First Time Visit', 'Follow Up', 'Procedure'
]

// const location = []

// const conditions = []

// const slots = []

// const loadingSlot = false

// const loading = false


const Search = () => {
  const router = useRouter()
  const formRef = useRef(null)

  const [laoding, setLaoding] = useState(false)
  const [loadingSlot, setLoadingSlot] = useState(false)
  const [drawerVisible, setDrawerVisible] = useState(false)
  const [visible, setVisible] = useState(false)
  const [currentDoctor, setcurrentDoctor] = useState(null)
  const [validating, setValidating] = useState(false)
  const [couponData, setCouponData] = useState(null)
  const [price, setPrice] = useState(0)
  const [coupon, setCoupon] = useState('')
  const [formValues, setFormValues] = useState(null)
  const [locations, setLocations] = useState([])
  const [retainedLocations, setRetainedLocations] = useState([])
  const [alternativeLocations, setAlternativeLocations] = useState([])
  const [visitTypeChoosen, setVisitTypeChoosen] = useState(null)
  const [locationChoosen, setLocationChoosen] = useState(null)
  const [slots, setSlots] = useState([])
  const [availableDays, setAvailableDays] = useState([])
  const [conditions, setConditions] = useState([])
  const [processing, setProcessing] = useState(false)

  const { search } = useSelector(state => ({
    search: state.searchReducer
  }))

  const openDrawer = (currentDoctor) => {
    setDrawerVisible(true)
    setcurrentDoctor(currentDoctor)
  }

  const onClose = () => {
    if (validating === false && processing === false) {
      setDrawerVisible(false)
      setcurrentDoctor(null)
      formRef.current.resetFields()
      setCoupon('')
      setCouponData(null)
      setPrice(0)
      setSlots([])
      setFormValues(null)
    }
  }

  // get availble conditions 
  const getConditions = useCallback(
    () => {
      axios.get(`${api}/api/health-conditions`)
        .then((res) => {
          setConditions(res.data.data.health_conditions)
        }).catch((err) => {
          message.error('Get Conditions: Something went wrong!')
          console.log(err)
        })
    },
    // eslint-disable-next-line
    []
  )

  // get search materials
  const getSearchMaterials = useCallback(
    () => {
      axios.get(`${api}/api/search-criteria`)
        .then((res) => {
          setLocations(res.data.data.availableLocations)
          setRetainedLocations(res.data.data.availableLocations)
          if (search.visitType === "Home Visit") {
            getCoverageLocation()
          }
        }).catch((err) => {
          message.error('Get Specializations or Location: Something went wrong!')
          console.log(err)
        })
    },
    [search],
  )

  useEffect(() => {
    getSearchMaterials()
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    getConditions()
    // eslint-disable-next-line
  }, [])

  // initial mount to precheck visit type and set location
  useEffect(() => {
    if (search !== undefined && search.searchObj !== null) {
      setVisitTypeChoosen(search.visitType)
      setLocationChoosen(search.visitType === "Video Consultation" ? "Video Consultation" : search.searchObj.location)
    }
  }, [search])

  // get coverage location
  const getCoverageLocation = () => {
    axios.get(`${api}/api/appointments/coverage-locations`)
      .then((res) => {
        setLocations(res.data.data.locations)
        setAlternativeLocations(res.data.data.locations)
      }).catch((err) => {
        message.error('Get Coverage Location: Something went wrong!')
      })
  }

  // get price
  const getPrice = (values) => {
    let total = values.reduce((sum, { price }) => sum + price, 0)
    let cst = 2.5
    let bookingFee = 5.0
    let paymentCharge = 1.8
    let totalCharge = cst + bookingFee + paymentCharge
    let grandTotal = ((totalCharge / 100) * total) + total
    return grandTotal
  }

  // coupon change
  const handleCouponChange = (e) => {
    setCoupon(e.target.value)
  }

  // check visit type when clicked
  const checkVisitTypeChange = (value) => {
    formRef.current.setFieldsValue({
      date: null,
      time: [],
      location: ''
    })
    setSlots([])
    setPrice(0)
    if (value === 'Home Visit') {
      if (alternativeLocations.length === 0) {
        getCoverageLocation()
      } else {
        setLocations(alternativeLocations)
      }
    } else {
      setLocations(retainedLocations)
    }
    axios.get(`${api}/api/professional/check-id/${currentDoctor.id}`).then((res) => {
      if (res.data.status === 'success') {
        let availableDays = []
        res.data.data.availableDays.map((availableDay) => {
          if (availableDay.type === value) {
            availableDays.push(availableDay.day)
          }
        })
        if (value === 'Video Consultation') {
          setVisitTypeChoosen(value)
          setLocationChoosen("Video Consultation")
          setAvailableDays(availableDays)
        } else {
          setVisitTypeChoosen(value)
          setLocationChoosen(locationChoosen)
          setAvailableDays(availableDays)
        }
      } else {
        openNotificationWithIcon('warning', 'Professional not found!')
        // this.props.history.push('/search')
      }
    }).catch((err) => {
      setLaoding(false)
      console.log(err)
      message.error('Error: Something went wrong!')
      // this.props.history.push('/search')
    })
  }

  // location change
  const locationChange = (value) => {
    setLocationChoosen(value)
    setSlots([])
    setPrice(0)
    formRef.current.setFieldsValue({
      date: null,
      time: []
    })
  }

  // trigger date change
  const triggerChange = (e) => {
    setLoadingSlot(true)
    setPrice(0)
    formRef.current.setFieldsValue({
      time: []
    })
    let day = moment(e).format('dddd').toLowerCase()
    if (visitTypeChoosen === null) {
      openNotificationWithIcon('warning', 'Select a visit type!')
      setLoadingSlot(false)
      formRef.current.setFieldsValue({
        date: null
      })
    } else {
      if (visitTypeChoosen !== 'Video Consultation' && locationChoosen === null) {
        openNotificationWithIcon('warning', 'Select a location!')
        setLoadingSlot(false)
        formRef.current.setFieldsValue({
          date: null
        })
      } else {
        let location = locationChoosen
        axios.get(`${api}/api/professional/${currentDoctor.id}/sessions/${day}/${location}/${visitTypeChoosen}`).then((res) => {
          setSlots(res.data.data.available_Times)
          setLoadingSlot(false)
        }).catch((err) => {
          console.log(err)
          message.error('Slots: Something went wrong!')
          setLoadingSlot(false)
        })
      }
    }
  }
  // recalculate price adter clicking slots
  const calculatePrice = (values) => {
    let total = values.reduce((sum, { price }) => sum + price, 0)
    let cst = 2.5
    let bookingFee = 5.0
    let paymentCharge = 1.8
    let totalCharge = cst + bookingFee + paymentCharge
    let grandTotal = ((totalCharge / 100) * total) + total
    setPrice(grandTotal)
  }

  // close payment portal visiblility
  const closeActuallPay = () => {
    setVisible(false)
  }

  // inital submission
  const onFinish = (values) => {
    setFormValues(values)
    console.log(values)
    setValidating(true)
    setCouponData(null)
    axios.post(`${api}/api/guest/validate`, {
      email: values.email,
      phone: values.phone
    }).then((res) => {
      if (res.data.status === 'success') {
        if (coupon.trim().length > 0) {
          axios.post(`${api}/api/coupons/validate`, {
            professional_id: currentDoctor.id,
            coupon_code: coupon,
            service: values.type
          }).then((res) => {
            if (res.data.status === 'success') {
              setCouponData(res.data.data.coupon)
              message.success(`Validate Coupon: ${res.data.message}`)
              if (price > 0) {
                setValidating(false)
                setVisible(res.data.data.coupon.value > price ? false : true)
                setPrice(res.data.data.coupon.value > price ? false : true)
                if (res.data.data.coupon.value > price) {
                  saveBooking(null)
                }
              } else {
                setValidating(false)
                setVisible(false)
                saveBooking(null)
              }

            } else {
              setCoupon('')
              setValidating(false)
              setCouponData(null)
              message.error(`Validate Coupon: ${res.data.message}`)
            }
          }).catch((err) => {
            console.log(err)
            message.error('Validate Coupon: Something went wrong!')
            setCoupon('')
            setValidating(false)
            setCouponData(null)
          })
        } else {
          if (price > 0) {
            setValidating(false)
            setVisible(true)
          } else {
            setValidating(false)
            setVisible(false)
            saveBooking(null)
          }
        }
      } else {
        let getAllErrors = Object.values(res.data.data.errors)
        let errors = getAllErrors.map((trying) => {
          return trying[0]
        })
        let desc = (
          <div>
            {
              errors.map((error) => (
                <li key={error}>{error}</li>
              ))
            }
          </div>
        )
        openNotificationWithIcon('warning', res.data.message, desc)
        setValidating(false)
      }
    }).catch((err) => {
      message.error('Validation: Something went wrong!')
      setValidating(false)
    })
  }


  // savebooking
  const saveBooking = async (reference) => {
    setProcessing(true)
    setVisible(false)
    setDrawerVisible(false)
    let time = []
    let price_array = []
    let duration = []
    console.log(formValues)
    formRef.current.getFieldValue('time').map((item) => {
      time.push(item.time)
      price_array.push(item.price)
      duration.push(item.session)
    })
    let details = {
      reference: reference,
      booking_date: moment(formRef.current.getFieldValue('date')).format('YYYY-MM-DD'),
      time,
      duration,
      price: price_array,
      professional_id: currentDoctor?.id,
      location: formRef.current.getFieldValue('type') === "Video Consultation" ? "Video Consultation" : formRef.current.getFieldValue('location'),
      complaint: formRef.current.getFieldValue('complaint'),
      reason: formRef.current.getFieldValue('reason'),
      type: formRef.current.getFieldValue('type'),
      health_condition: formRef.current.getFieldValue('health_condition'),
      total_price: price,
      phone: formRef.current.getFieldValue('phone'),
      email: formRef.current.getFieldValue('email'),
      lastname: formRef.current.getFieldValue('lastname'),
      firstname: formRef.current.getFieldValue('firstname'),
      title: formRef.current.getFieldValue('title'),
    }
    axios.post(`${api}/api/appointments/guest/book`, {
      ...details
    }).then((res) => {
      setDrawerVisible(false)
      setProcessing(false)
      openNotificationWithIcon('success', 'Booking', 'Payment was made successfully.')
    })
      .catch((err) => {
        message.error('Booking: Something went wrong')
        console.log(err)
        setProcessing(false)
      })
  }

  //paystack payment props
  const componentProps = {
    email: formValues?.email,
    amount: price * 100,
    metadata: {
      name: `${formValues?.firstname + ' ' + formValues?.lastname}`,
      phone: formValues?.phone,
    },
    publicKey: process.env.NEXT_PUBLIC_PAYSTACKPUBLICK,
    text: "Pay",
    onClick: () => { console.log('pay') },
    onSuccess: (res) => {
      saveBooking(res.reference)
    }
  }

  return (
    <div className="search">
      {/* {
        processing &&
        <div className="processing">
          <LoadingOutlined style={{ fontSize: 60 }} />
          <p className="pro-text">
            Processing... <br />
            Don't move out of this page.
           </p>
        </div>
      } */}
      <Headtags
        title="Doctoora - Same-Day Appointments With The Best Doctors Near You. "
        desc="Doctoora provides easy and affordable online and offline access to verified, quality healthcare services by Doctors, other experts and hospitals in Nigeria"
        keywords="Doctor search results, Search results for doctors in Nigeria, the best doctors near me, search and compare top doctors, find the best specialists in Nigeria, The best dermatologists, Cardiology specialist doctors in nigeria, emergency healthcare, doctor ratings in Nigeria, Health Insurance, Low cost healthcare, Affordable hospitals, digital health, telemedicine"
      />
      <Nav />
      <div className="search-main">
        <div className="banner">
          <p className="footnote"
            onClick={() => {
              router.back()
            }}
          >
            <ArrowLeftOutlined />  Back
          </p>

          <Bannerform />
        </div>

        <div className="search-body">
          <hr className="custom-line" />

          <div className="search-body-content">
            {
              search.loading ?
                <Pageloader />
                :
                <Row gutter={64}>
                  <Col lg={6} xs={24} md={24}>
                    <div className="filter-holder">
                      <div className="filter-top">
                        <p className="heading">
                          Filter
                  </p>
                        <p className="clear-text">
                          Clear
                  </p>
                      </div>

                      <div className="filter-form">
                        <p className="fiterlabel">
                          Ratings
                  </p>
                        <Rate />

                        <br />
                        <br />

                        <p className="fiterlabel">
                          Language
                  </p>
                        <Select
                          style={{
                            width: '100%'
                          }}
                          allowClear
                          disabled={search.loading}
                        >
                          <Option value="english">
                            English
                    </Option>
                        </Select>

                        <br />
                        <br />

                        <p className="fiterlabel">
                          Gender
                  </p>
                        <Select
                          style={{
                            width: '100%'
                          }}
                          allowClear
                          disabled={search.loading}
                        >
                          <Option value="female">
                            Female
                    </Option>
                          <Option value="male">
                            Male
                    </Option>
                        </Select>

                        <br />
                        <br />

                        <p className="fiterlabel">
                          Consultation Fee
                  </p>
                        <Select
                          style={{
                            width: '100%'
                          }}
                          allowClear
                          disabled={search.loading}
                        >
                          <Option value="5000-10000">
                            ₦5,000 -₦10,000
                    </Option>
                        </Select>
                      </div>


                      <div className="related-searches">
                        <h1 className="title">
                          Related Searches
                  </h1>
                        <span>
                          Dermatologist Near Abule-Egba
                  </span>

                        <br />
                        <br />

                        <Related />
                      </div>

                    </div>
                  </Col>
                  <Col lg={18} xs={24} md={24}>
                    {
                      search.useAlternative &&
                      <>
                        <p className="resultnumber">
                          No results found for {search.searchObj.specialization} {search.searchObj.location === undefined ? null : `in ${search.searchObj.location}`} for {search.visitType} on {search.searchObj.date === null ? null : moment(search.searchObj.date).format('YYYY-MM-DD')}
                        </p>
                        <p className="resultnumber">
                          Showing results for {search.searchObj.specialization}
                          {search.searchObj.location === undefined ? null : ` close to ${search.searchObj.location}`}
                        </p>
                      </>
                    }

                    {
                      search.result.length === 0 && search.alternativeResult.length === 0 ?
                        <>
                          <p className="resultnumber">
                            There are no professionals found
                          </p>
                          <p className="resultnumber">
                            Contact us for a more custom search
                        </p>
                        </>
                        : null
                    }

                    {/* <p className="resultnumber">
                      22 Results Found For  Dermatologists In Abule-Egba
                    </p> */}

                    <span className="showing">
                      Showing 1-6 of 22 Results
                    </span>

                    <div className="result-holder">
                      {
                        !search.useAlternative ?
                          search.result.map((doctor) =>
                          (
                            <Doctor
                              doctor={doctor}
                              key={`doctor-key-${doctor.id}`}
                              openDrawer={openDrawer}
                            />
                          )) :
                          search.alternativeResult.map((doctor) =>
                          (
                            <Doctor
                              doctor={doctor}
                              key={`doctor-key-${doctor.id}`}
                              openDrawer={openDrawer}
                            />
                          ))
                      }
                    </div>

                    <Pagination />
                  </Col>
                </Row>
            }
          </div>

        </div>
      </div>

      {
        currentDoctor !== null &&

        <Drawer
          title={null}
          placement="left"
          onClose={onClose}
          visible={drawerVisible}
          className="book-drawer"
          footer={
            <Row gutter={16}>
              <Col lg={12} xs={12}>
                <Button
                  block
                  className="go-btn"
                  disabled={validating || processing}
                  loading={validating || processing}
                  onClick={() => {
                    formRef.current.submit()
                  }}
                >
                  {
                    processing ? 'Processing...' : 'Proceed'
                  }
                </Button>
              </Col>
              <Col lg={12} xs={12}>
                <Button
                  block
                  className="cancel-btn"
                  disabled={validating || processing}
                  loading={validating || processing}
                  onClick={() => {
                    onClose()
                  }}
                >
                  Cancel
                </Button>
              </Col>
            </Row>
          }
        >
          <h1 className="heading">
            Hi, I’m {currentDoctor?.firstname} {currentDoctor?.lastname}
            <br />
           Why would you like to see me?
         </h1>

          <p className="footnote">
            Please fill the information box below to complete booking
          </p>

          <div className="form-holder">
            <h1 className="heading hidctor">
              Hi, Dr {currentDoctor?.firstname}
            </h1>

            <Form
              layout="vertical"
              ref={formRef}
              onFinish={onFinish}
              initialValues={{
                date: search !== undefined && search.searchObj !== null && search.searchObj.date !== undefined ? moment(new Date(search.searchObj.date), 'DD-MM-YYYY') : null,
                // type: visitTypeChoosen,
                // location: locationChoosen,
                // time: search.slotsChoosen
              }}
            >

              <Row gutter={8}>
                <Col lg={24} xs={24}>
                  <Form.Item
                    name="title"
                    rules={[
                      {
                        required: true,
                        message: 'Input required',
                      },
                    ]}
                  >
                    <Select
                      className="book-select"
                      placeholder="Title"
                      style={{
                        width: '100%'
                      }}
                    >
                      {
                        titles.map((item) => (
                          <Option value={item} key={item}>{item}</Option>
                        ))
                      }
                    </Select>
                  </Form.Item>
                </Col>
                <Col lg={12} xs={24}>
                  <Form.Item
                    name="firstname"
                    rules={[
                      {
                        required: true,
                        message: 'Input required',
                      },
                    ]}
                  >
                    <Input placeholder="First Name" className="book-input" />
                  </Form.Item>
                </Col>
                <Col lg={12} xs={24}>
                  <Form.Item
                    name="lastname"
                    rules={[
                      {
                        required: true,
                        message: 'Input required',
                      },
                    ]}
                  >
                    <Input placeholder="Last Name"
                      className="book-input" />
                  </Form.Item>
                </Col>
                <Col lg={12} xs={24}>
                  <Form.Item
                    name="email"
                    rules={[
                      {
                        type: 'email',
                        message: 'The input is not valid email',
                      },
                      {
                        required: true,
                        message: 'Input required',
                      },
                    ]}
                  >
                    <Input placeholder="Email" className="book-input" />
                  </Form.Item>
                </Col>
                <Col lg={12} xs={24}>
                  <Form.Item
                    name="phone"
                    rules={[
                      {
                        required: true,
                        message: 'Input required',
                      },
                    ]}
                  >
                    <Input placeholder="Phone" className="book-input" />
                  </Form.Item>
                </Col>
                <Col lg={12} xs={24}>
                  <Form.Item
                    name="type"
                    rules={[
                      {
                        required: true,
                        message: 'Input required',
                      },
                    ]}
                  >
                    <Select
                      className="book-select"
                      placeholder="Visit Type"
                      style={{
                        width: '100%'
                      }}
                      onChange={(e) => checkVisitTypeChange(e)}
                    >
                      {
                        visitTypes.map((visit) => (
                          <Option value={visit} key={visit}>{visit}</Option>
                        ))
                      }
                    </Select>
                  </Form.Item>
                </Col>
                {
                  visitTypeChoosen !== 'Video Consultation' &&
                  <Col lg={12} xs={24}>
                    <Form.Item
                      name="location"
                      rules={[
                        {
                          required: true,
                          message: 'Input required',
                        },
                      ]}
                    >
                      <Select
                        onChange={(e) => locationChange(e)}
                        // disabled={search === undefined || search.searchObj === null ? false : true}
                        className="book-select"
                        placeholder="Location (e.Lekki)"
                        showSearch
                        style={{
                          width: '100%'
                        }}
                      >
                        {
                          locations.map((item) => (
                            <Option value={item.landmark} key={item.landmark}>{item.landmark}</Option>
                          ))
                        }
                      </Select>
                    </Form.Item>
                  </Col>
                }
                <Col lg={24} xs={24}>
                  <Form.Item
                    name="reason"
                    rules={[
                      {
                        required: true,
                        message: 'Input required',
                      },
                    ]}
                  >
                    <Select
                      className="book-select"
                      placeholder="Reason"
                      style={{
                        width: '100%'
                      }}
                    >
                      {
                        reasons.map((reason) => (
                          <Option value={reason} key={reason}>{reason}</Option>
                        ))
                      }
                    </Select>
                  </Form.Item>
                </Col>
              </Row>
              <Form.Item
                name="complaint"
                rules={[
                  {
                    required: true,
                    message: 'Input required',
                  },
                ]}
              >
                <Input.TextArea
                  className="book-input" placeholder="Reason for Visit/Complaint" />
              </Form.Item>
              <Form.Item
                name="date"
                rules={[
                  {
                    required: true,
                    message: 'Input required',
                  },
                ]}
              >
                <DatePicker
                  dateRender={current => {
                    const style = {};
                    getNumberForDay(availableDays).map((item) => {
                      if (moment(current).day() === item) {
                        style.border = '1px solid #1890ff';
                        style.borderRadius = '50%';
                      }
                    })
                    return (
                      <div className="ant-picker-cell-inner" style={style}>
                        {current.date()}
                      </div>
                    );
                  }}
                  onChange={triggerChange}
                  disabledDate={disabledDate}
                  className="book-date"
                  format="YYYY-MM-DD"
                />
              </Form.Item>
              <Form.Item
                name="time"
                label="Time (Pick a suitable time)"
                className="book-check"
                rules={[
                  {
                    required: true,
                    message: 'Input field',
                  },
                ]}
              >
                <Checkbox.Group
                  onChange={calculatePrice}
                >
                  <Row
                    gutter={32}
                    className={`slots-holder  ${loadingSlot ? 'loading' : ''}`}>
                    {
                      loadingSlot ?
                        <div className="x-loader">
                          <LoadingOutlined style={{ fontSize: 40 }} />
                        </div> :
                        <>
                          {
                            slots.length > 0 ?
                              slots.map((slot, index) => (
                                <Col
                                  key={index}
                                  lg={6}
                                  xs={24}
                                  className="book-check"
                                >
                                  <Checkbox value={slot} >
                                    {slot.time}
                                  </Checkbox>
                                </Col>
                              ))
                              :
                              <p className="none-found">
                                There are no slots availble</p>
                          }
                        </>
                    }
                  </Row>
                </Checkbox.Group>
              </Form.Item>
              <Form.Item
                name="health_condition"
                rules={[
                  {
                    required: true,
                    message: 'Input required',
                  },
                ]}
              >
                <Select
                  placeholder="Existing Conditions (Pick as suitable)"
                  allowClear
                  mode="tags"
                  tokenSeparators={[',']}
                  className="book-select"
                >
                  {
                    conditions.map((item) => (
                      <Option value={item.name} key={item.name}>{item.name}</Option>
                    ))
                  }
                </Select>
              </Form.Item>
            </Form>

            <div className="pricing">
              <h1 className="heading hidctor">
                Cost
              </h1>
              <div className="cost-numbers">
                {
                  couponData !== null &&
                  <h1 className={`heading amount ${couponData !== null ? 'former-price' : ''}`}>₦{numeral(price === 0 ? getPrice(formRef.current.getFieldValue('time')) : price + couponData.value).format('0,0')
                  }</h1>
                }
                <h1 className="heading amount">
                  ₦{numeral(price).format('0,0')}
                </h1>
              </div>
              <p className="footnote">
                ( 2.5% CSR fund, 5% booking fees and 1.8% payment charges incl.)
               </p>
            </div>

            <Form
              layout="vertical"
              className="coupon-form"
            >
              <Form.Item
                label="Coupon 
                (Optional)"
              >
                <Input
                  value={coupon}
                  name="coupon"
                  onChange={handleCouponChange}
                  placeholder="Coupon" />
              </Form.Item>
            </Form>
          </div>
        </Drawer>

      }

      <Modal
        visible={visible}
        footer={null}
        className="paystack-modal"
        onOk={closeActuallPay}
        onCancel={closeActuallPay}
      >
        <div className="payment-modal-main">
          <h1 className="heading hidctor">
            Total booking amount
          </h1>
          <div className="cost-btn">
            <div className="cost-numbers">
              {
                couponData !== null &&
                <h1 className={`heading amount ${couponData !== null ? 'former-price' : ''}`}>₦{numeral(price === 0 ? getPrice(formRef.current.getFieldValue('time')) : price + couponData.value).format('0,0')
                }</h1>
              }
              <h1 className="heading amount">
                ₦{numeral(price).format('0,0')}
              </h1>
            </div>
            <PaystackButton
              className={`ant-btn paystack-btn`}
              {...componentProps}
            />
          </div>

        </div>
      </Modal>
    </div>
  )
}

export default Search
