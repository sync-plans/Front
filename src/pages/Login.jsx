import React from 'react'
import * as S from '../components/Login/Login.style'
import {BiCalendar} from 'react-icons/bi'

function Login() {


const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}&response_type=code`;


const handleLogin = () => {
    window.location.href = KAKAO_AUTH_URL
}

  return (
    <S.LoginContainer>
      <S.LoginBackGround>
      <S.LoginBox>
        <S.LoginWrraper>
        <S.LoginTitle>Sync Plans <BiCalendar style={{fontSize : '50px'}}/></S.LoginTitle>
        <S.KaKaoLoginBtn onClick={handleLogin}>
          <img src='img/kakao_login_medium_narrow.png' alt='React'></img>
        </S.KaKaoLoginBtn>
        </S.LoginWrraper>
      </S.LoginBox>
      </S.LoginBackGround>
    </S.LoginContainer>
  )
}

/** api 로그인 테스트 코드들 */
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

// useEffect(() => {
//   value()
// }, []);

// const value = async () => {

//   const loginData = {
//     username : "choi",
//     password : 1234
//   }
//   const response = await axios.post(`https://ec2-13-125-17-195.ap-northeast-2.compute.amazonaws.com:8080/api/user/login`, loginData, {
//     withCredentials : true
//   })
//   const get_token = response.headers['authorization']
//   const plan_token = get_token.replaceAll('%20', ' ')




//   setCookie('myCookie', plan_token, '/')
// }


// const payload = cookies['myCookie']
// const userName = payload.substring(payload.indexOf('.')+1,payload.lastIndexOf('.'));
// const dec = JSON.parse(base64.decode(userName));




export default Login