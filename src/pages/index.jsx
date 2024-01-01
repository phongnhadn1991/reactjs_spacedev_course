import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import { Carousel, Card, Col, Row, Statistic } from 'antd';
import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';

export default function Home() {
  const uniqueId = uuidv4();
  const dataBanner = [
    {
      id: uniqueId,
      srcImg: 'https://static.vecteezy.com/system/resources/previews/002/294/862/non_2x/digital-courses-web-banner-design-student-watching-online-courses-online-education-digital-classroom-e-learning-concept-header-or-footer-banner-free-vector.jpg'
    },
    {
      id: uniqueId,
      srcImg: 'https://static.vecteezy.com/system/resources/previews/002/294/855/non_2x/online-math-courses-web-banner-design-free-vector.jpg'
    },
    {
      id: uniqueId,
      srcImg: 'https://static.vecteezy.com/system/resources/previews/002/294/872/non_2x/question-and-answer-web-banner-design-header-or-footer-banner-illustration-free-vector.jpg'
    },
  ]
  return (
    <div className='l-homepage'>
      <div className='p-carousel mb-8'>
        <Carousel autoplay>
          {dataBanner && dataBanner.map(item => (
            <div key={item.id}>
              <img src={item.srcImg} />
            </div>
          ))}
        </Carousel>
      </div>
      <div className='p-topList'>
        <Row gutter={20}>
          <Col span={8}>
            <Card bordered={true}>
              <Statistic
                title="Courses"
                value={5}
                valueStyle={{ color: '#3f8600' }}
                prefix={<ArrowUpOutlined />}
              />
            </Card>
          </Col>
          <Col span={8}>
            <Card bordered={true}>
              <Statistic
                title="Todos"
                value={3}
                valueStyle={{ color: 'green' }}
                prefix={<ArrowUpOutlined />}
              />
            </Card>
          </Col>
          <Col span={8}>
            <Card bordered={true}>
              <Statistic
                title="Products"
                value={6}
                valueStyle={{ color: '#cf1322' }}
                prefix={<ArrowDownOutlined />}
              />
            </Card>
          </Col>
        </Row>
      </div>

    </div>
  )
}
