import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { ProfileDetails } from './MainContent/ProfileDetails'
import { ProfileSideBar } from './RightSideBar/ProfileSideBar'

const Profile = () => {

  return (
      <Container>
        <Row className='justify-content-center'>
            <Col xs={9} sm={8} md={8}><ProfileDetails /></Col>
            <Col xs={3} sm={4} md={3}><ProfileSideBar /></Col>
        </Row>
      </Container>
    
  )
}

export default Profile