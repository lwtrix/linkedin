import React from 'react'
import '../../../css/main-content/user-post/user-info.css'

export const UserInfo = () => {
  return (
    <div className='user-info'>
        <img src="https://media-exp1.licdn.com/dms/image/C4D03AQGQukuVemAsUQ/profile-displayphoto-shrink_100_100/0/1601570097725?e=1676505600&v=beta&t=fQFzdqM6wq82tBQ98DtFom59CwNFGJ-3oDIaJDjzszY" alt="" />
        <div className="user-details">
            <span className='user-name'>Tyler</span>
            <span className='user-followers'>765.261 followers</span>
            <span className='time-passed'>8h</span>
        </div>
    </div>
  )
}
