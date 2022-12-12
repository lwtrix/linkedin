import React from 'react'
import '../../css/main-content/user-post.css'
import { PostContent } from './UserPost/PostContent'
import { PostControls } from './UserPost/PostControls'
import { PostDescription } from './UserPost/PostDescription'
import { PostStats } from './UserPost/PostStats'
import { UserInfo } from './UserPost/UserInfo'

const UserPost = () => {
  return (
    <div className='user-post'>
        <UserInfo />
        <PostDescription />
        <PostContent />
        <PostStats />
        <PostControls />
    </div>
  )
}

export default UserPost
