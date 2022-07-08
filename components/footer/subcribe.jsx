import React, { Component } from 'react'
import { Form, Input } from 'antd';

export default class Subcribe extends Component {
  onFinish = (values) => {

  }

  onFinishFailed = (errorInfo) => {
    // //console.log('Failed:', errorInfo);
  }

  render() {
    return (
      <Form
        onFinish={this.onFinish}
        onFinishFailed={this.onFinishFailed}
      >
        <Form.Item
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
          <Input placeholder="Enter email here" className="footer-input" />
        </Form.Item>
        <button className="custom-btn prime-btn sub-btn" htmlType="submit">
          Subscribe
        </button>
      </Form>
    )
  }
}
