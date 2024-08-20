'use client'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { Router } from 'next/router'
import React, { useEffect, useState } from 'react'

export default function Page() {
    const [products, setProducts] = useState<any>()
    const router = useRouter();
    // lấy api lấy data để đi render ra màn hình trình duyệt
    // fetch
    // axios 
    useEffect(() => {
        axios.get('http://localhost:3000/api/products')
            .then((res) => {
                console.log('thành công', res);
                setProducts(res.data.data)
            })
            .catch((err) => {
                console.log('thất bại', err);
            })
    }, [])
    const handleClick=(id:number)=>{
        axios.get(`http://localhost:3000/api/products/${id}`)
        .then((res)=>{
            router.push(`/products/${id}`);
        })
        .catch((err)=>{
            console.log('thất bại',err);
        })
    }
    return (
        <div>
            danh sách sản phẩm: {products?.map((item: any) => {
                return (<div key={item.id}>
                    <p>tên: {item.name}</p>
                    <p>giá: {item.price}</p>
                    <button onClick={()=>handleClick(item.id)} className='border border-black'>chi tiết sản phẩm</button>
                    <p></p>
                </div>)
            })}
        </div>
    )
}