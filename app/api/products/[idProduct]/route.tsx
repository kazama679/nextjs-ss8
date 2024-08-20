import { NextResponse } from "next/server";
let products=[
    {
        id:1,
        name:'mèn mén1',
        price:5000
    },
    {
        id:2,
        name:'phika',
        price:6000
    },
    {
        id:3,
        name:'iphone',
        price:7000
    }
]

export async function GET(req: any, res:any) {
    console.log(req);
    let findItem = products.find((i)=>{
        return i.id=+res.params.idProduct
    })
    return NextResponse.json({
        message:'lấy danh sách 1 sản phẩm thành công',
        data:findItem,
    })
}