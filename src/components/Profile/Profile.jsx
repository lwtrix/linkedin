import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { ProfileDetails } from './MainContent/ProfileDetails'
import { ProfileSideBar } from './RightSideBar/ProfileSideBar'

const Profile = () => {

  return (
      <Container className='pt-5'>
        <Row>
            <Col xs={8}><ProfileDetails /></Col>
            <Col xs={4}><ProfileSideBar /></Col>
        </Row>
      </Container>
    
  )
}

export default Profile