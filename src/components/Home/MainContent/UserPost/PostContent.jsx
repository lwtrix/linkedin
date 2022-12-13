import React, { useEffect, useState } from 'react'
import '../../../css/main-content/user-post/post-content.css'

export const PostContent = () => {

  const [images, setImages] = useState([]);

  const getRandomImages = async () => {
    const apiKey = '7CmE_4PcbCx1FWZDRUPdBruzRBUGsgGIJE5QhoqbFU0'
    const res = await fetch(`https://api.unsplash.com/photos?page=1&per_page=16&client_id=${apiKey}`)
    const data = await res.json()
    console.log(data)
    setImages(data)
  }

  useEffect(() => {
    getRandomImages()
  }, [])

  return (
    <div className='post-content'>
        <div className="post-img-container">
            <img className='img' src="https://media-exp1.licdn.com/dms/image/C4D22AQFfzNSU47XxmA/feedshare-shrink_2048_1536/0/1669800019262?e=1673481600&v=beta&t=ExdmnWiESORYduYc4Pci9UJfSxieMMP0UiTwrgj-_1Q" alt="" />
        </div>
    </div>
  )
}
