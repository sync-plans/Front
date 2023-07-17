import React from 'react'
import { styled } from 'styled-components';

function Login() {


// // 본인 rest api key값
// const CLIENT_ID = '461fed9c8b217094081c492970bb8a6b';
// // 리다이렉션시 보여줄 url경로
// const REDIRECT_URI = 'http://localhost:3000/oauth/kakao/callback';

const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}&response_type=code`;


const handleLogin = () => {
  window.location.href = KAKAO_AUTH_URL
}
  return (
    <LoginContainer>
      <LoginBox>
        <div>
        <h1>Sync Plans</h1>
        <KaKaoLoginBtn onClick={handleLogin}>
          <img src='img/kakao_login_medium_narrow.png' alt='React'></img>
        </KaKaoLoginBtn>
        </div>
      </LoginBox>
    </LoginContainer>
  )
}

const LoginContainer = styled.div`
    background-color : rgb(212,235,215);
    width : 100%;
    height : 100vh;
`

const LoginBox = styled.div`
    background-color : #eee;
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
`

const KaKaoLoginBtn = styled.a`
    width : 185px;
    height : 45px;
    border-radius : 15px;
    border : none;
    cursor : pointer;
    background-image : url('../../../public/img/kakao_login_medium_narrow.png')
`


export default Login