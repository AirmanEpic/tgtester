// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

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

type dataTypeSent = {
    email:string,
    password:string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<dataType>
) {
    

    if (req.method !== 'POST') {
        res.status(400).json({ success: false, data:null })
        return
    }

    const { email, password } = req.body

    if (email === undefined || password === undefined) {
        res.status(400).json({ success: false, data:null })
        return
    }

    if (password != "hunter2") {
        res.status(400).json({ success: false, data:null })
        return
    }

    res.status(200).json({ success: true, data:{
        id: 1,
        email: "email@example.com",
        first_name: "John",
        last_name: "Doe",
        avatar: "https://reqres.in/img/faces/1-image.jpg"
    }})
}
