'use client'

import React, { useState } from 'react'
import axios from 'axios'
import Link from 'next/link'
import toast, { Toast } from 'react-hot-toast'
import { useRouter } from 'next/navigation'

const ProfilePage = () => {
  const router = useRouter()
  const [data, setData] = useState("nothing")

  const getUserDetail = async () => {
    try {
      const res = await axios.post('/api/users/me')
      console.log(res.data.data._id)
      setData(res.data.data._id)
    } catch (error: any) {
      console.log("Logout Failed")
      toast.error(error.message)
    }
  }

  const logout = async () => {
    try {
      await axios.get('/api/users/logout')
      toast.success("Logout Successful")
      router.push('/login')
    } catch (error: any) {
      console.log(error.message);
      toast.error(error.message)
    }
  }

  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2'>
      <h1>Profile Page</h1>
      <hr />
      <h2>
        {data === "nothing" ? "Nothing to Display" : <Link href={`/profile/${data}`}>{data}</Link>}
      </h2>
      <hr />
      <button className='bg-blue-500 mt-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={logout}>
        Logout
      </button>
      <button className='bg-green-500 mt-4 hover:bg-green-700 text-white font-bold py-2 px-4 rounded' onClick={getUserDetail}>
        Get user Details
      </button>
    </div>
  )
}

export default ProfilePage
