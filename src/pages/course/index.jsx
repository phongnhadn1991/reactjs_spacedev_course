import React, { useEffect, useState } from 'react'
import { courseService } from '../../services/course.service'
import { Col, Pagination, Row } from 'antd';
import styled from 'styled-components'
import { Link, useNavigate } from 'react-router-dom';

export default function Course() {
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()
  const itemsPerPage = 9
  const [cousrses, setCourses] = useState([])
  const [paginate, setPaginate] = useState(null)
  const [currentPage, setCurrentPage] = useState(1)

  const fetchData = async () => {
    setLoading(true)
    const res = await courseService.getCourse()
    if (res) {
      setCourses(res?.data?.data)
      setPaginate(res?.data?.paginate)
    }
    setLoading(false)
  }
  useEffect(() => {
    fetchData();
  }, [])

  const onChangePage = (page) => {
    navigate({
      pathname: '/course',
      search: `?page=${page}`,
    });
    setCurrentPage(page)
  }


  const totalPage = Math.ceil(paginate?.count / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage - 1, paginate?.count - 1);
  const itemsForCurrentPage = cousrses.slice(startIndex, endIndex + 1);

  return (
    <div className='l-course'>
      <Row gutter={[30, 30]}>
        {itemsForCurrentPage.map(item => <Col key={item._id} span={8}><ItemCourse item={item} /></Col>)}
      </Row>
      <Pagination
        current={currentPage}
        total={paginate?.count}
        pageSize={itemsPerPage}
        onChange={(currentPage) => onChangePage(currentPage)}
        style={{ margin: '60px 0 30px', display: 'flex', justifyContent: 'center' }} />
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
      <div className='itemCourse_thumb' >
        <ImgStyle>
          {item.thumbnailUrl && <img src={item.thumbnailUrl} alt={item.title} />}
        </ImgStyle>
      </div>
      <div className='itemCourse_body'>
        <h4>{item.title}</h4>
        <DesStyle>
          {item.long_description}
        </DesStyle>
      </div>
    </Link>
  )
}