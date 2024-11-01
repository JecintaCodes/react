import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components"
import { useForm } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import pix from "../assets/373.jpg"
import { useState } from "react";
import { SignUpUser } from "../api/AuthApi";


const Register = ()=>{
    const navigate = useNavigate()

    const [image, setImage] = useState(pix)

    const [avatar, setAvatar] = useState("")


    const schema = yup.object({
        userName: yup.string().required(),
        email: yup.string().required(),
        password: yup.string().required(),
        ConfirmPassword: yup.string().oneOf([yup.ref("Password")])
    })


    const {
        formState: {errors},
        register,
        handleSubmit,
         reset
    }= useForm({
        resolver: yupResolver(schema)
    })


     const onHandleImage = (e:any)=>{
        try {
            const file = e.target.files[0]
            const realImage = URL.createObjectURL(file)
            setImage(realImage)
            setAvatar(file)

        } catch (error) {
            console.log(error)
        }
     }


        const onSubmit = handleSubmit(async(data:any)=>{
            const {userName, email, password}= data
            const formData = new FormData()

            formData.append("name", userName)
            formData.append("email", email)
            formData.append("password", password)
            formData.append("avatar", avatar)
       
            SignUpUser(formData).then(()=>{
                // navigate("/sign-in")
            })
        })

    return(
        <>
        <Container>
        <Main onSubmit={onSubmit}>
       
        <Right>
        <InputHolder>
        <Input placeholder="UserName" {...register("userName")} />
        </InputHolder>
       { errors.userName && <Errors>error</Errors>}

        <InputHolder>
        <Input placeholder="Email"  {...register("email")} />
        </InputHolder>
         {  errors.email && <Errors>error</Errors>}

        <InputHolder>
        <Input placeholder="Password"  {...register("password")}/>
        </InputHolder>
        { errors.password && <Errors>error</Errors>}

        <InputHolder>
        <Input placeholder="ConfirmPassword" {...register("ConfirmPassword")} />
        </InputHolder>
       { errors.ConfirmPassword && <Errors>error</Errors>}
     
        <ButtonHolder>
        <Button type="submit">SignUp</Button>
       <Link style={{textDecoration:"none" , color:"var(--appText)"}}
       to="/sign-in">
       <Button 
        >SignIn</Button>
       </Link>
        </ButtonHolder>

        </Right>
        <Left>
        <CircleHolder>
       <Circle src={image}/>
       <InputImage id="pix" type="file" 
       onChange={onHandleImage}
       />
       <ImageLabel>Upload</ImageLabel>
        </CircleHolder>
        </Left>
        </Main>
        </Container>
        </>
    )
}

export default Register

const Errors = styled.div`
color:var(--appText);
font-size:15px;
position: absolute;
left:0;
`;
const Circle = styled.img`
width: 300px;
height: 300px;
border:1px solid var(--appBorder);
border-radius: 50%;
object-fit: cover;
`;
const CircleHolder = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column:
gap: 40px;
`;
const ImageLabel = styled.label`
padding: 8px 15px;
border-radius: var(--appRadiusSmall);
background-color:lightgrey;;
color: var(--appText);
font-size: 12px;
margin-top: 4px;
cursor: pointer;
`;
const InputImage = styled.input`
display: none;
`;
const Left = styled.div`

`;

const Button = styled.button`
background-color: lightgrey;
width: 100px;
height: 40px;
display: flex;
justify-content: center;
align-items: center;
border-radius:var(--appRadiusSmall)
margin-left: 30px;
margin-top: 30px;
transition: all 350ms;
cursor: pointer;
`;
const ButtonHolder = styled.div`
display: flex;
justify-content: center;
align-items: center;
gap: 20px;
`;
const Input = styled.input`
width: 400px;
height:40px;
border:none;
outline: none;

::placeholder{
    padding: 15px;
    font-size: 15px;
    color: silver;
}
`;
const InputHolder = styled.div`
width: 400px;
height:40px;
border: 1px solid var(--appBorder);
margin-top: 20px;
`;
const Right = styled.div`
width: 500px;
position: relative;
`;

// const Text = styled.div`
// // display: flex;
// // justify-content: center;
// // color:(--appText);
// // width: 100%;
// `;
const Main = styled.div`
width: 1000px;
padding: 20px;
border-radius:var(--appRadiusSmall);
border: 1px solid silver;
display: flex;
`;
const Container = styled.div`
width: 100%;
height: 100vh;
background-color:var(--appBG);
color:var(--appText);
display: flex;
justify-content: center;
align-items: center;
`;