import React, { useState, useEffect } from 'react'
import { Form, Row, Col, Select, DatePicker, notification, Button } from 'antd';
import moment from 'moment'
import axios from 'axios'
import api from '../../config/api'
import { disabledDate } from '../../utils/helper'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { updateResult, startSearchLoading, updateSearch } from '../../core/actions/searchAction'


const { Option } = Select;

const openNotificationWithIcon = (type, msg, desc) => {
  notification[type]({
    message: msg,
    description: desc
  })
}

const Homevisit = ({ loading, specialization, locations, predefinedSpeciality, forDash, updateRequesting }) => {
  const router = useRouter()
  const dispatch = useDispatch()

  const { search } = useSelector(state => ({
    search: state.searchReducer
  }))

  const onFinish = (values) => {
    dispatch(updateResult([], false, [], []))
    dispatch(startSearchLoading())
    updateRequesting(true)
    axios.post(`${api}/api/search`, {
      ...values,
      visit_type: 'Home Visit',
      // specialization: 'community'
    }).then((res) => {
      // setTimeout(() => {
      //   updateRequesting(false)
      // }, 1000);
      if (res.data.status === 'success') {
        dispatch(updateSearch({
          searchObj: values,
          from: router.pathname === '/search' ? 'search' : router.pathname === '/' ? 'homepage' : 'dashboard',
          searchType: 'home',
          visitType: 'Home Visit',
        }))
        let useAlternative = res.data.data.alternateResult.length === 0 ? false : true
        let alternativeResult = useAlternative ? res.data.data.alternateResult : []

        dispatch(updateResult(res.data.data.professional, useAlternative, alternativeResult, res.data.data.groupPractice))

        updateRequesting(false)

        if (forDash) {
          switchView('2')
        } else {
          router.push(`/search`)
          //   let slug = values.specialization.toLowerCase().replace(/[' '|&|,|(|)|&|@|!|%|^|+|=]/gi, "-")
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
      }
    }).catch((err) => {
      console.log(err)
      openNotificationWithIcon('error', 'Error', 'Something went wrong')
      updateRequesting(false)
    })
  }

  return (
    <div>
      <Form
        onFinish={onFinish}
        initialValues={{
          specialization: predefinedSpeciality ? predefinedSpeciality : null
        }}
      >
        <Row gutter={10}>
          <Col lg={6} xs={24}>
            <Form.Item
              name="specialization"
              rules={[
                {
                  required: true,
                  message: 'Required field',
                },
              ]}
            >
              <Select
                placeholder="Specialty (e.g Dermatology)"
                allowClear
                showSearch
              >
                {
                  specialization.map((item) => (
                    <Option value={item.name} key={item.name}>{item.name}</Option>
                  ))
                }
              </Select>
            </Form.Item>
          </Col>
            <Col lg={6} xs={24}>
              <Form.Item
                name="location"
              // rules={[
              //   {
              //     required: true,
              //     message: 'Required field',
              //   },
              // ]}
              >
                <Select
                  placeholder="Location (e.Lekki)"
                  allowClear
                  showSearch
                >
                  {
                    locations.map((item) => (
                      <Option value={item.landmark} key={item.landmark}>{item.landmark}</Option>
                    ))
                  }
                </Select>
              </Form.Item>
            </Col>


          <Col lg={6} xs={24}>
            <Form.Item
              name="date"
            // rules={[
            //   {
            //     required: true,
            //     message: 'Required field',
            //   },
            // ]}
            >
              <DatePicker
                disabledDate={disabledDate}
                className="select-date-time"
                format="YYYY-MM-DD"
              // showTime={{ defaultValue: moment('00:00:00', 'HH:mm') }}
              />
            </Form.Item>
          </Col>
          <Col lg={6} xs={24}>
            <Button
              htmlType="submit"
              className="go-btn" disabled={loading} loading={loading}>
              SEARCH
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  )
}

export default Homevisit
