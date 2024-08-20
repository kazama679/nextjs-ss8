import { NextResponse } from "next/server"

let users=[
    {
        id:1,
        name:'quang',
        age:19
    },
    {
        id:2,
        name:'quang2',
        age:19
    },
    {
        id:3,
        name:'quang3',
        age:19
    }
]

export async function GET(){
    return NextResponse.json({
        message:'lấy danh sách user',
        data: users
    })
}

