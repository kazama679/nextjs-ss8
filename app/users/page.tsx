import axios from 'axios'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

export default function Page() {
  const [users, setUsers] = useState<any>()
  const router = useRouter()
  useEffect(() => {
    axios.get('http://localhost:3000/baitapapi/users')
      .then((res) => {
        console.log('thành công', res);
        setUsers(res.data.data)
      })
      .catch((err) => {
        console.log('thất bại', err);
      })
  }, [])
  const handleClick = (id: number) => {
    axios.get(`http://localhost:3000/baitapapi/users/${id}`)
      .then((res) => {
        router.push(`users/${id}`)
      })
      .catch((err) => {
        console.log('thất bại', err);
      })
  }
  return (
    <div>
      danh sách user: {users?.map((item: any) => {
        return (<div key={item.id}>
          <p>tên: {item.name}</p>
          <p>tuổi: {item.age}</p>
          <button onClick={() => handleClick(item.id)} className='border border-black'>chi tiết user</button>
          <p></p>
        </div>)
      })}
    </div>
  )
}
