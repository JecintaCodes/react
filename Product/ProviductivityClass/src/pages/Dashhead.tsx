import React, { useState } from "react";
import styled from "styled-components";
import { FiMenu, FiTarget, FiPower, FiUpload } from "react-icons/fi";
// import img from "../Assets/piggy.svg"
import { ImHome2 } from "react-icons/im";
import { IoIosRocket, IoMdPerson } from "react-icons/io";
import { NavLink, useNavigate } from "react-router-dom";
import { MdDashboard } from "react-icons/md";

import { BsArrowRightShort } from "react-icons/bs";

import { logOut } from "../global/globalState";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";

const Dashhead = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  const Toggle = () => {
    setShow(!show);
  };
  return (
    <Container>
      <Top>
        <Img  />{" "}
      </Top>
      <Home>
        <Icon2>
          <MdDashboard />
        </Icon2>
        <NavLink
          to="/dash"
          style={({ isActive }) => {
            return {
              textDecoration: isActive ? "none" : "none",
              color: isActive ? "#2AA7FF" : "#3e4956",
            };
          }}
        >
          <Text1>All Input</Text1>
        </NavLink>
      </Home>

      <Home2>
        <Icon2>
          <IoMdPerson />
        </Icon2>
        <NavLink
          to="/dash/alltask"
          style={({ isActive }) => {
            return {
              textDecoration: isActive ? "none" : "none",
              color: isActive ? "#2AA7FF" : "#3e4956",
            };
          }}
        >
          <Text2>All Task</Text2>
        </NavLink>
      </Home2>

      <Home2>
        <Icon2>
          <IoMdPerson />
        </Icon2>
        <NavLink
          to="/dash/progress"
          style={({ isActive }) => {
            return {
              textDecoration: isActive ? "none" : "none",
              color: isActive ? "#2AA7FF" : "#3e4956",
            };
          }}
        >
          <Text3 onClick={Toggle}>Tasks in Progress</Text3>
        </NavLink>
        
      </Home2>
      
      <Home2>
        <Icon2>
          <IoMdPerson />
        </Icon2>
        <NavLink
          to="/dash/done"
          style={({ isActive }) => {
            return {
              textDecoration: isActive ? "none" : "none",
              color: isActive ? "#2AA7FF" : "#3e4956",
            };
          }}
        >
          <Text3>Tasks Done</Text3>
        </NavLink>
      </Home2>
      <Home2>
        <Icon2>
          <IoMdPerson />
        </Icon2>
        <NavLink
          to="/dash/mosttask"
          style={({ isActive }) => {
            return {
              textDecoration: isActive ? "none" : "none",
              color: isActive ? "#2AA7FF" : "#3e4956",
            };
          }}
        >
          <Text3>Most Assigned Task</Text3>
        </NavLink>
      </Home2>
      <Home2>
        <Icon2>
          <IoMdPerson />
        </Icon2>
        <NavLink
          to="/dash/MostDoneTask"
          style={({ isActive }) => {
            return {
              textDecoration: isActive ? "none" : "none",
              color: isActive ? "#2AA7FF" : "#3e4956",
            };
          }}
        >
          <Text3>Most Completed Task</Text3>
        </NavLink>
      </Home2>

      <Power
        onClick={() => {
          dispatch(logOut());

          
        }}
      >
        <Icon2>
          <FiPower />
        </Icon2>
        <Text>Logout</Text>
      </Power>
    </Container>
  );
};

export default Dashhead;
const Sta = styled.div`
  font-size: 17px;
  font-family: U8, sans-serif;
  cursor: pointer;
  /* color: #fff; */
  align-items: center;
  display: flex;
  margin-left: 40px;
  width: 410px;
  height: 40px;
  margin-bottom: 8px;
  /* margin-bottom: 10px; */
  /* background-color: green; */
`;
const Staffs = styled.div`
  width: 100%;
  /* background-color: red; */
  display: flex;
  flex-direction: column;
  p {
    margin-left: 40px;
  }
`;
const Ico = styled.div`
  font-size: 20px;
  margin-left: 100px;
  margin-top: 5px;
`;
const Img = styled.img`
  height: 30px;
`;
const Power = styled.div`
    display: flex;
    align-items: center;
    margin-top: 230px;
`;

const Text5 = styled.div`
  font-size: 17px;
  font-family: U8, sans-serif;
  cursor: pointer;
  /* color: #fff; */
  align-items: center;
  display: flex;
  margin-left: 30px;
  width: 120px;
  height: 40px;
  /* background-color: white; */
`;
const Text4 = styled.div`
  font-size: 17px;
  font-family: U8, sans-serif;
  cursor: pointer;
  color: #fff;
  align-items: center;
  display: flex;
  margin-left: 30px;
  width: 120px;
  height: 40px;
  /* background-color: white; */
`;
const Text3 = styled.div`
  font-size: 17px;
  font-family: U8, sans-serif;
  cursor: pointer;
  /* color: #fff; */
  align-items: center;
  display: flex;
  margin-left: 15px;
  width: 410px;
  height: 40px;
  /* margin-bottom: 10px; */
  /* background-color: green; */
`;
const Text2 = styled.div`
  font-size: 17px;
  font-family: U8, sans-serif;
  cursor: pointer;
  /* color: #fff; */
  align-items: center;
  display: flex;
  margin-left: 15px;
  width: 410px;
  height: 40px;
  /* margin-bottom: 10px; */
  /* background-color: green; */
`;
const Text = styled.div`
  font-size: 17px;
  font-family: U8, sans-serif;
  cursor: pointer;
  /* color: #fff; */
  align-items: center;
  display: flex;
  margin-left: 30px;
  width: 120px;
  height: 40px;
  /* background-color: white; */
`;

const Text1 = styled.div`
  font-size: 17px;
  font-family: U8, sans-serif;
  cursor: pointer;
  /* color: #fff; */
  align-items: center;
  display: flex;
  margin-left: 15px;
  width: 210px;
  height: 40px;
  /* margin-bottom: 10px; */
  /* background-color: white; */
`;
const Icon2 = styled.div`
  color: #3e4956;
  font-size: 23px;
  cursor: pointer;
`;
const Home2 = styled.div`
  width: 100%;
  display: flex;
  margin-top: 25px;
  align-items: center;
`;
const Home = styled.div`
  width: 100%;
  display: flex;
  margin-top: 70px;
  align-items: center;
`;
const Image = styled.img`
  height: 25px;
  margin-left: 30px;
`;
const Icon = styled.div`
  color: #fff;
  font-size: 25px;
  width: 100%;
  h3 {
    text-align: center;
    margin: 0;
    margin-left: -20px;
  }
`;
const Top = styled.div`
  display: flex;
  width: 100%;
  margin-top: 50px;
`;
const Container = styled.div`
  width: 17%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: pink;
  padding-left: 25px;
  position: fixed;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  /* border-top-right-radius: 120px; */
  z-index: 2;
  overflow: hidden;
  @media screen and (max-width: 1024px) {
    display: none;
  }
`;