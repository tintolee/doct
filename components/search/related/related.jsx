import React from 'react'
import Image from 'next/image'
import { Button } from 'antd'
import {
  AimOutlined
} from '@ant-design/icons';


const Related = () => {
  return (
    <div className="relateddoctor">
      <div className="img">
        <Image
          src="/img/bookdoc.svg"
          alt="bookdoctor"
          layout="fill"
        />
      </div>
      <p className="relateddoctor-name">
        Dr Monisola Adanijo
        </p>
      <div className="location">
        <div className="eimg">
          <Image
            src="/img/locationn.svg"
            alt="bookdoctor"
            layout="fill"
          />
        </div>
        <span>
          Isolo, Lagos
            </span>
      </div>
      <span>
        (3.2 km from you)
      </span>
      <br />
      <br />
      <Button block>
        Book
      </Button>
    </div>
  )
}

export default Related
