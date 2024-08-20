import { NextResponse } from "next/server";

let users = [
    {
        id: 1,
        name: 'quang',
        age: 19
    },
    {
        id: 2,
        name: 'quang2',
        age: 19
    },
    {
        id: 3,
        name: 'quang3',
        age: 19
    }
];

export async function GET(req: Request, { params }: { params: { id: string } }) {
    const userId = parseInt(params.id, 10);
    const findItem = users.find(user => user.id === userId);

    if (findItem) {
        return NextResponse.json({
            message: 'Lấy thông tin người dùng thành công',
            data: findItem
        });
    } else {
        return NextResponse.json({
            message: `Không tìm thấy người dùng có id = ${userId}`
        }, { status: 404 });
    }
}

// tìm kiếm người dùng theo tên
export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);
    const queryName = searchParams.get('name')?.toLowerCase() || '';
    const filteredUsers = users.filter(user =>
        user.name.toLowerCase().includes(queryName)
    );
    if (filteredUsers.length > 0) {
        return NextResponse.json({
            message: 'Tìm kiếm người dùng thành công',
            data: filteredUsers
        });
    } else {
        return NextResponse.json({
            message: `Không tìm thấy người dùng với tên chứa "${queryName}"`
        }, { status: 404 });
    }
}

// xóa
export async function DELETE(req: Request, { params }: { params: { id: string } }) {
    const userId = parseInt(params.id, 10);
    const userIndex = users.findIndex(user => user.id === userId);
    if (userIndex !== -1) {
        users.splice(userIndex, 1);
        return NextResponse.json({
            message: 'Xóa thông tin người dùng thành công',
        });
    } else {
        return NextResponse.json({
            message: `Không tìm thấy người dùng có id = ${userId}`
        }, { status: 404 });
    }
}

// thêm người dùng mới vào danh sách
export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { name, age } = body;
        if (!name || typeof age !== 'number') {
            return NextResponse.json({
                message: 'Dữ liệu không hợp lệ',
            }, { status: 400 });
        }
        const newUser = {
            id: users.length + 1,
            name,
            age,
        };
        users.push(newUser);
        return NextResponse.json({
            message: 'Thêm mới thông tin người dùng thành công',
            data: newUser
        });
    } catch (error) {
        return NextResponse.json({
            message: 'Lỗi trong quá trình thêm người dùng',
        }, { status: 500 });
    }
}

// cập nhật thông tin người dùng theo ID
export async function PUT(req: Request, { params }: { params: { id: string } }) {
    try {
        const userId = parseInt(params.id, 10);
        const body = await req.json();
        const { name, age } = body;
        const userIndex = users.findIndex(user => user.id === userId);
        if (userIndex === -1) {
            return NextResponse.json({
                message: `Không tìm thấy người dùng với id = ${userId}`
            }, { status: 404 });
        }
        users[userIndex] = { id: userId, name, age };
        return NextResponse.json({
            message: 'Cập nhật thông tin người dùng thành công',
            data: users[userIndex]
        });
    } catch (error) {
        return NextResponse.json({
            message: 'Lỗi trong quá trình cập nhật thông tin người dùng',
        }, { status: 500 });
    }
}

export async function GET() {
    return NextResponse.json({
        message: 'Lấy danh sách người dùng',
        data: users
    });
}