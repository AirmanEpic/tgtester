import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })
type dataType = {
  success:boolean,
  data:{
    id:number,
    email:string,
    first_name:string,
    last_name:string,
    avatar:string
  }|null
}


export default function Home() {

  let [data, setData] = useState<dataType>({success:false, data:null})

  async function fetchData(){
    const res = await fetch('/api/user')
    const json = await res.json()
    setData(json)
  }

  let successData = <></>
  if (data.success && data.data) {
    successData = <>{data.data.first_name}</>
  }

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold">Click the button</h1>
      </div>
      <div className="flex flex-col items-center justify-center">
        <button
          onClick={fetchData}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >Click me</button>
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold">Data</h1>
        </div>
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold">{successData}</h1>
        </div>
      </div>
    </main>
  )
}
