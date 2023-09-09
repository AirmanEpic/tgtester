// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import type { userDataResponse, userDataInput } from '@/types/main'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<userDataResponse>
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
