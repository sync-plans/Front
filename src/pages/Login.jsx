import axios from 'axios';
import React, { useEffect } from 'react'
import { styled } from 'styled-components';
import {useCookies} from 'react-cookie'

function Login() {

  const [cookies,setCookie,removeCookie] = useCookies();

// // 본인 rest api key값
// const CLIENT_ID = '461fed9c8b217094081c492970bb8a6b';
// // 리다이렉션시 보여줄 url경로
// const REDIRECT_URI = 'http://localhost:3000/oauth/kakao/callback';

const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}&response_type=code`;
// const KAKAO_AUTH_URL = `${process.env.REACT_APP_SERVER_URL}/user/kakao/callback`;

// const loginData = {
//   username: "choi5",
//   password: 1234,
//   }

// const value = async () => {
//   const response = await axios.post('https://ec2-13-125-17-195.ap-northeast-2.compute.amazonaws.com:8080/api/user/login',loginData,{
//       withCredentials : true
//   })
//   console.log(response.headers['set-cookie'])
// }

// value()

const value = async () => {

  const loginData = {
    username : "choi",
    password : 1234
  }
  const response = await axios.post(`https://ec2-13-125-17-195.ap-northeast-2.compute.amazonaws.com:8080/api/user/login`, loginData, {
    withCredentials : true
  })

  const get_token = response.headers['authorization']
  // console.log(get_token)
  const plan_token = get_token.replaceAll('%20', ' ')
  console.log(plan_token)
  // console.log(response)

  setCookie('myCookie', plan_token, '/')
}

useEffect(() => {
  value()
}, []);

// const myplan = async () => {
//   const response = await axios.get(`https://ec2-13-125-17-195.ap-northeast-2.compute.amazonaws.com:8080/api/my-plan`, {
//     headers : {
//       Authorization: cookies['myCookie']
//     }
//   })
//   console.log(response)
// }





const handleLogin = () => {
  window.location.href = KAKAO_AUTH_URL
}
  return (
    <LoginContainer>
      <LoginBackGround>
      <LoginBox>
        <LoginWrraper>
        <h1>Sync Plans</h1>
        <KaKaoLoginBtn onClick={handleLogin}>
          <img src='img/kakao_login_medium_narrow.png' alt='React'></img>
        </KaKaoLoginBtn>
        </LoginWrraper>
      </LoginBox>
      </LoginBackGround>
    </LoginContainer>
  )
}

const LoginContainer = styled.div`
    width : 100%;
    height : 100vh;
    position : relative;
    opacity : 0.8;
`

const LoginBox = styled.div`
    background-color : white;
    width : 50%;
    height : 500px;
    padding : 15px;
    position : fixed;
    left : 50%;
    top : 50%;
    transform : translate(-50%,-50%);
    border-radius : 30px;
    display : flex;
    justify-content : center;
    align-items : center;
    box-shadow : 0px 0px 10px;
    border : none;
    max-width : 350px;
`

const KaKaoLoginBtn = styled.a`
    width : 185px;
    height : 45px;
    border-radius : 15px;
    border : none;
    cursor : pointer;
    background-image : url('../../../public/img/kakao_login_medium_narrow.png');
`

const LoginWrraper = styled.div`
  display : flex;
  flex-direction : column;
  gap : 200px;
`

const LoginBackGround = styled.div`
  background-image : url('img/pxfuel (1).jpg');
  width : 100%;
  height : 100%;
  background-repeat : no-repeat;
  background-size : cover;
  position : absolute;
  top : 0;
  left : 0;
`


export default Login