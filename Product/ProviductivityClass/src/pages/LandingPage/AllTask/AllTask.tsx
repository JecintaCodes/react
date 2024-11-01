import React from 'react'
import { styled } from 'styled-components'
import MyColumnCard from "../../../components/static/MyColumnCard"
import { useQuery } from '@tanstack/react-query'
import { readTask } from '../../../utils/taskAPI'

const AllTask = () => {
    const { data } = useQuery({
        queryKey: ["tasks"],
        queryFn: readTask,
        refetchInterval: 1000
    })
  return (
    <div>
        <Container>
            <Main>
            <MyColumnCard
                        title="task"
                        but
                        data={data}
                    />
            </Main>
        
        </Container>
        </div>
  )
}

export default AllTask
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
