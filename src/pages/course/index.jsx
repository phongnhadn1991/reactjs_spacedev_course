import React, { useEffect, useState } from 'react'
import { courseService } from '../../services/course.service'
import { Avatar, List, Radio, Space } from 'antd';

export default function Course() {
  const [loading, setLoading] = useState(true)
  const [cousrses, setCourses] = useState([])

  const data = [
    {
      title: 'Ant Design Title 1',
    },
    {
      title: 'Ant Design Title 2',
    },
    {
      title: 'Ant Design Title 3',
    },
    {
      title: 'Ant Design Title 4',
    },
  ];

  const fetchData = async () => {
    setLoading(true)
    const res = await courseService.getCourse()
    if (res) {
      setCourses(res?.data?.data)
    }
    setLoading(false)
  }

  useEffect(() => {
    fetchData();
  }, [])


  return (
    <div className='l-course'>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Title
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                Video
              </th>
              <th scope="col" className="px-6 py-3">
                Time
              </th>
            </tr>
          </thead>
          <tbody>
            {
              loading ? <Spiner /> :
                cousrses && cousrses.map(item => <CourseItem key={item._id} item={item} />)
            }
          </tbody>
        </table>
      </div>
      <List
        pagination
        dataSource={cousrses}
        renderItem={(item, index) => (
          <List.Item>
            <List.Item.Meta
              avatar={
                <Avatar src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`} />
              }
              title={<a href="https://ant.design">{item.title} - {item.money}</a>}
              description={item.opening_time}
            />
          </List.Item>
        )}
      />
    </div>
  )
}

export const CourseItem = ({ item }) => {
  return (
    <tr className="bg-white border-b hover:bg-gray-50">
      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        {item.title}
      </th>
      <td className="px-6 py-4">
        {item.money}
      </td>
      <td className="px-6 py-4">
        {item.count_video}
      </td>
      <td className="px-6 py-4">
        {item.opening_time}
      </td>
    </tr>
  )
}

export const Spiner = () => {
  return (
    <tr>
      <td colSpan={4} className='text-center py-4 px-4'>
        <div role="status">
          <svg aria-hidden="true" className="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
          </svg>
          <span className="sr-only">Loading...</span>
        </div>
      </td>
    </tr>
  )
}