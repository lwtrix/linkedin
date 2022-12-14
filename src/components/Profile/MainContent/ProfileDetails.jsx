import React from 'react'
import '../../css/profile/ProfileDetails/profile-details.css'
import { ExperienceSection } from './ExperienceSection'
import { ProfileInformation } from './ProfileDetails/ProfileInformation'

export const ProfileDetails = () => {
  return (
    <div className='profile-details'>
        <ProfileInformation />
        <ExperienceSection />
    </div>
  )
}
