import React from 'react'
import { useState, useEffect } from 'react'
import { useLocation } from 'react-router'
import { axiosInstance } from '../../../config'
import Posts from '../../posts/Posts'
import Sidebar from '../../sidebar/Sidebar'
import './home.css'

export default function Home() {
  const [posts, setPosts] = useState([])
  const { search } = useLocation()

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await axiosInstance.get('/posts' + search) //http://localhost:8000/posts
        setPosts(res.data)
      } catch (err) {
        console.log(err)
      }
    }
    fetchPost()
  }, [search])

  return (
    <div className="home">
      <Posts posts={posts} />
      <Sidebar />
    </div>
  )
}
