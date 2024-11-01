import React from 'react'
import { styled } from 'styled-components'
import ChartDone1 from './ChartDone1'
import ChartDone2  from './ChartDone2'
import  ChartDone3 from './ChartDone3'
const MostTAsk = () => {
  return (
    <div>
        <Container>
        {/* <ChartDone1/> */}
        <ChartDone2/>
        {/* <ChartDone3/> */}
      
        </Container>
        </div>
  )
}

export default MostTAsk
const Container = styled.div`
display:flex;
width: calc(100% - 20%);
height: 500px;
padding-top: 50px;
margin-left: 260px;

`
