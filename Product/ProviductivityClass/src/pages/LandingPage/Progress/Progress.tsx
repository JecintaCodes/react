import React from 'react'
import { styled } from 'styled-components'
import MyColumnCard from "../../../components/static/MyColumnCard"
import { useQuery } from '@tanstack/react-query'
import { readProgress } from '../../../utils/progressAPI'

const Progress = () => {
    const { data: progress } = useQuery({
        queryKey: ["progress"],
        queryFn: readProgress,
        refetchInterval: 1000
    })
  return (
    <div>
        <Container>
            <Main>
            <MyColumnCard
                        title="progress"
                        data={progress}

                    />
            </Main>
        
        </Container>
        </div>
  )
}

export default Progress
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
