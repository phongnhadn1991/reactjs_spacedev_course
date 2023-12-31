import React, { useEffect, useState } from 'react'
import { courseService } from '../../services/course_service'
import { Col, Pagination, Row, Space, Spin } from 'antd';
import styled from 'styled-components'
import { Link, useNavigate, useSearchParams } from 'react-router-dom';

export default function Course() {
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()
  const [searchParams] = useSearchParams();
  const pageParam = parseInt(searchParams.get('page'));
  const itemsPerPage = 9
  const [courses, setCourses] = useState([])
  const [paginate, setPaginate] = useState(null)
  const [currentPage, setCurrentPage] = useState(null)

  const fetchData = async () => {
    setLoading(true)
    const res = await courseService.getCourse()
    if (res) {
      setCourses(res?.data?.data)
      setPaginate(res?.data?.meta?.pagination)
    }
    setLoading(false)
  }
  useEffect(() => {
    fetchData();
  }, [])

  const totalPage = Math.ceil(paginate?.total / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage - 1, paginate?.pageSize - 1);
  const itemsForCurrentPage = courses.slice(startIndex, endIndex + 1);

  useEffect(() => {
    const page = pageParam || 1;
    if (page > totalPage && !isNaN(page) || page <= 0) {
      navigate(`/course?page=1`);
    } else {
      setCurrentPage(page);
    }
  }, [pageParam, totalPage, navigate]);

  const onChangePage = (page) => {
    navigate({
      pathname: '/course',
      search: `?page=${page}`,
    });
    setCurrentPage(page)
  }

  return (
    <div className='l-course'>
      {itemsForCurrentPage.length <= 0 && loading ?
        <Space direction="horizontal" style={{ width: '100%', justifyContent: 'center' }}>
          <Spin />
        </Space> : (
          <>
            <Row gutter={[30, 30]}>
              {itemsForCurrentPage.map(item => <Col key={item.id} span={8}><ItemCourse item={item} /></Col>)}
            </Row>
            <Pagination
              current={currentPage}
              total={paginate?.total}
              pageSize={itemsPerPage}
              onChange={(currentPage) => onChangePage(currentPage)}
              style={{ margin: '60px 0 30px', display: 'flex', justifyContent: 'center' }} />
          </>
        )}
    </div>
  )
}


export const ImgStyle = styled.div`
width: 100%;
height: 220px;
margin-bottom: 15px;
background: #fafafa;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`
export const DesStyle = styled.div`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;  
  overflow: hidden;
  color: #000;
`
export const ItemCourse = ({ item }) => {
  return (
    <Link to={`/course/${item.id}`} className='itemCourse'>
      <div className='itemCourse_thumb'>
        <ImgStyle>
          {item?.attributes?.thumbnailUrl && <img src={'http://localhost:1337' + item.attributes?.thumbnailUrl?.data?.attributes?.url} alt={item?.attributes?.title} />}
        </ImgStyle>
      </div>
      <div className='itemCourse_body'>
        <h4>{item.attributes.title}</h4>
        <DesStyle>
          {item.attributes.short_description}
        </DesStyle>
      </div>
    </Link>
  )
}