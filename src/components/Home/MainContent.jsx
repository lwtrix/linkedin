import React from 'react'
import '../css/main-content/main-content.css'
import JobSearch from './MainContent/JobSearch'
import { StartPost } from './MainContent/StartPost'
import UserPost from './MainContent/UserPost'

export const MainContent = () => {
  return (
    <div className='main-content'>
        <JobSearch />
        <StartPost />
        <UserPost />
        <UserPost />
    </div>
  )
}
