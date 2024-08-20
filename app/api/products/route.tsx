import { NextResponse } from 'next/server'

/*
    các phương thức làm việc với api

    1. GET: lấy về
    2. POST: thêm mới
    3. PUT: cập nhập all
    4. PATCH: cập nhập 1 phần
    5. DELETE: xóa
    - tên của function là tên của phương thức và phải viết hoa

*/

let products = [
    {
        id: 1,
        name: 'mèn mén1',
        price: 5000
    },
    {
        id: 2,
        name: 'mèn mén2',
        price: 6000
    },
    {
        id: 3,
        name: 'mèn mén3',
        price: 7000
    }
]

export async function GET() {
    return NextResponse.json({
        message: 'lấy danh sách sản phẩm thành công',
        data: products,
    });
}

export async function POST(req: any, res: any) {
    console.log(req, res);
    let data = await req.json();

    return NextResponse.json({
        message: 'thêm dữ liệu',
        data: data
    });
}