import React from 'react'
import Dashhead from '../../pages/Dashhead'
import { Outlet } from 'react-router-dom'
import { styled } from 'styled-components'

const MainLayout = () => {
  return (
    <div>
        <Container>
        <Dashhead/>
        <Outlet/>
        </Container>
    </div>
  )
}

export default MainLayout
const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #F5F7FA;
    overflow: hidden;
`