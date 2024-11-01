import React from 'react'
import styled from 'styled-components'
import Dashhead from './Dashhead'
import HomeScreen from './HomeScreen'
// import Homes from "./Homes"
// import SideBar from './SideBar'

const Dashboard = () => {
  return (
    <Container>
          <Dashhead />
          <HomeScreen/>
    </Container>
  )
}

export default Dashboard
const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #F5F7FA;
    overflow: hidden;
`