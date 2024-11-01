import React from 'react'
import { styled } from 'styled-components'
import MyColumnCard from "../../../components/static/MyColumnCard"
import { useQuery } from '@tanstack/react-query'
import { readDone } from '../../../utils/doneApi'

const Done = () => {
    const { data: done } = useQuery({
        queryKey: ["done"],
        queryFn: readDone,
        refetchInterval: 1000
    })
  return (
    <div>
        <Container>
            <Main>
            <MyColumnCard
                        title="Done"
                        data={done}

                    />
            </Main>
        
        </Container>
        </div>
  )
}

export default Done
const Main = styled.div`
display:flex;
justify-content: center;
width: 100%;
`
const Container = styled.div`
display:flex;
width: calc(100% - 17%);
padding-top: 50px;
margin-left: 260px;
`
