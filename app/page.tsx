// 'use client'
import React from 'react'
import fs from "fs"
import path from "path"

export default function page() {
  const filePath=path.join(process.cwd(), 'app/products/product.txt');
  const data=fs.writeFileSync(filePath, 'hello world11123gggggg', 'utf-8');
  // console.log('1111111111111111file được đọc với nội dung', data);

  return (
    <div>
      123
    </div>
  )
}
