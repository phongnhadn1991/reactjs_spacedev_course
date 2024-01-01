import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import { Carousel, Card, Col, Row, Statistic } from 'antd';
import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';

export default function Home() {
  const dataBanner = [
    {
      id: uuidv4(),
      srcImg: 'https://static.vecteezy.com/system/resources/previews/002/294/862/non_2x/digital-courses-web-banner-design-student-watching-online-courses-online-education-digital-classroom-e-learning-concept-header-or-footer-banner-free-vector.jpg'
    },
    {
      id: uuidv4(),
      srcImg: 'https://static.vecteezy.com/system/resources/previews/002/294/855/non_2x/online-math-courses-web-banner-design-free-vector.jpg'
    },
    {
      id: uuidv4(),
      srcImg: 'https://static.vecteezy.com/system/resources/previews/002/294/872/non_2x/question-and-answer-web-banner-design-header-or-footer-banner-illustration-free-vector.jpg'
    },
  ]
  const products = [
    {
      id: uuidv4(),
      name: 'Earthen Bottle',
      href: '#',
      price: '$48',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
      imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
      id: uuidv4(),
      name: 'Nomad Tumbler',
      href: '#',
      price: '$35',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
      imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
    {
      id: uuidv4(),
      name: 'Focus Paper Refill',
      href: '#',
      price: '$89',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
      imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    },
    {
      id: uuidv4(),
      name: 'Machined Mechanical Pencil',
      href: '#',
      price: '$35',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    {
      id: uuidv4(),
      name: 'Earthen Bottle',
      href: '#',
      price: '$48',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-05.jpg',
      imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
      id: uuidv4(),
      name: 'Nomad Tumbler',
      href: '#',
      price: '$35',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-06.jpg',
      imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
    {
      id: uuidv4(),
      name: 'Focus Paper Refill',
      href: '#',
      price: '$89',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-07.jpg',
      imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    },
    {
      id: uuidv4(),
      name: 'Machined Mechanical Pencil',
      href: '#',
      price: '$35',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-08.jpg',
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    }
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
      <div className='p-products'>
        <div className="bg-white">
          <div className="mx-auto py-16 sm:py-16 lg:w-full">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">Products</h2>
            <div className="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
              {products.map((product) => (
                <a key={product.id} href={product.href} className="group">
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                    <img
                      src={product.imageSrc}
                      alt={product.imageAlt}
                      className="h-full w-full object-cover object-center group-hover:opacity-75"
                    />
                  </div>
                  <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                  <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
