import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components"
import { useForm } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { SignInUser } from "../api/AuthApi";
import { useDispatch } from "react-redux";
import { createUser } from "../global/GlobalState";
import  {useState} from 'react'
import {BsAsterisk} from "react-icons/bs"
import {AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai"



const SignIn = () => {
  const dispatch = useDispatch()
    const [toggle, setToggle] = useState<boolean>(false)

    const onToggle = ()=>{
        setToggle(!toggle)
    }

const navigate = useNavigate()

    const schema = yup.object({
        email: yup.string().required(),
        password: yup.string().required(),
    })

    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(schema)
    })

    const onHandleSubmnit = handleSubmit(async(data: any) => {
        const {email, password} = data


        SignInUser({email, password}).then((res:any) =>{
          dispatch(createUser(res))
          navigate("/")
        })
    })

  return (
    <div>
        <Container>
            <Main onSubmit={onHandleSubmnit}>
                <Title>Sign In as author</Title>

                <InputHolder>
                <Hold>
                <InputName>Email</InputName>
                <Icon><BsAsterisk/></Icon>
                </Hold>
                <Input placeholder='Enter your Email' {...register("email")}/>
                </InputHolder>

                <div onClick={onToggle}>
                    {
                        toggle ? <InputHolder>
                        <Hold>
                        <InputName>Password</InputName>
                        <Icon><BsAsterisk/></Icon>
                        </Hold>
                        <Input placeholder='Enter your Password' {...register("password")} />
                        <Hold onClick={onToggle} style={{ position: "absolute", marginLeft: "260px", marginTop: "35px"}}>
                        {
                            toggle ? <Icon1/> : <Icon2/>
                        }
                        </Hold>
                        </InputHolder> : <InputHolder>
                <Hold>
                <InputName>Password</InputName>
                <Icon><BsAsterisk/></Icon>
                </Hold>
                <Input placeholder='Enter your Password' {...register("password")} type='password'/>
                <Hold onClick={onToggle} style={{ position: "absolute", marginLeft: "260px", marginTop: "35px"}}>
                {
                    toggle ? <Icon1/> : <Icon2/>
                }
                </Hold>
                </InputHolder>
                    }
                </div>

                <Down>
                    <Button type="submit">Sign In</Button>

                    <Write>Don't have an account?</Write>

                    <Button1 to="/register">Sign Up</Button1>
                </Down>
            </Main>
        </Container>
    </div>
  )
}

export default SignIn;

const Title = styled.div`
font-size: 12px;
color: gray;
text-align: center;
margin-top: 6px;
font-weight: 600;
margin-bottom: 15px;
`

const Write = styled.div`
font-size: 14px;
color: gray;
margin-top: 6px;
margin-bottom: 6px;
`
const Button = styled.button`
padding: 15px 95px;
background-color: purple;
cursor: pointer;
display: flex;
justify-content: center;
color: white;
align-items: center;
border: none;
outline: none;
`
const Button1 = styled(Link)`
background-color: purple;
cursor: pointer;
display: flex;
justify-content: center;
color: white;
align-items: center;
padding: 10px 95px;
text-decoration: none;
`
const Down = styled.div`
margin-bottom: 10px;
margin-top: 15px;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`

const Icon2 = styled(AiOutlineEyeInvisible)`
    color: gray;
    justify-content: flex-end;
    font-size: 15px;
    cursor: pointer;
`

const Icon1 = styled(AiOutlineEye)`
    color: gray;
    justify-content: flex-end;
    font-size: 15px;
    cursor: pointer;
`

const Hold = styled.div`
    display: flex;
    /* justify-content: center; */
    align-items: center;
`

const Icon = styled.div`
    color: red;
    font-size: 8px;
`

const Input = styled.input`
outline: none;
border: 1px solid purple;
padding: 10px;
font-size: 14px;
font-weight: 450;
color: gray;
`
const InputName = styled.div`
font-size: 14px;
font-weight: 500;
color: black;
margin-bottom: 5px;
margin-right: 4px;
`
const InputHolder = styled.div`
display: flex;
flex-direction: column;
/* margin-bottom: 7px; */
padding: 7px;
`
const Main = styled.form`
width: 300px;
min-height: 350px;
display: flex;
flex-direction: column;
justify-content: center;
border: 1px solid purple;
border-radius: 8px;
`
const Container = styled.div`
width: 100%;
min-height: 100vh;
display: flex;
justify-content: center;
`;