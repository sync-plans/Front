import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import base64 from 'base-64'
import { useCookies } from "react-cookie";


function KaKaoLogin() {
  const navigate = useNavigate();


  const [cookies,setCookie,,] = useCookies();

useEffect(() => {
    const params = new URL(document.location.toString()).searchParams;
    // const grant_type = 'authorization_code';
    const accode = params.get('code');

    const getTokenAndSetCookie = async () => {

        const userRes = await axios.get(
          `${process.env.REACT_APP_SERVER_URL}/api/user/kakao/login`,
          {
            params: { code: accode }
          }
        );

        const token = userRes.headers.authorization;
        const cleanedToken = token.replaceAll('%20', ' ');
        setCookie('myCookie', cleanedToken, '/');
        const payload = cookies['myCookie']
        const userName = payload.substring(payload.indexOf('.')+1,payload.lastIndexOf('.'));
        const dec = JSON.parse(base64.decode(userName));
        console.log(cookies)
        navigate(`/main/${dec.userid}`)
    };

    getTokenAndSetCookie();
  }, []);

  return (
    <div>로그인 중입니다...</div>
  );
}

export default KaKaoLogin

// 카카오 api 테스트 코드들
//   useEffect(() => {
//     const params = new URL(document.location.toString()).searchParams;
//     const grant_type = 'authorization_code';
//     const accode = params.get('code');

    // axios.post(`https://kauth.kakao.com/oauth/token?grant_type=${grant_type}&client_id=${process.env.REACT_APP_CLIENT_ID}&redirect_uri=http://localhost:4000/kakao/login&code=${accode}`,
    //   {},
    //   {
    //     headers: {
    //       "Content-type": "application/x-www-form-urlencoded;charset=utf-8"
    //     }
    //   })
    //   .then((res) => {
    //     console.log(res);
    //     const { access_token } = res.data;
    //     console.log(access_token);

        // axios.get(
        //   `${process.env.REACT_APP_SERVER_URL}/api/user/kakao/login`,
        //   {
        //     params: {code : accode}
        //   }
        // ).then((res) => {return res.headers.getAuthorization()}).then((res) => res.replaceAll('%20', ' ')).then((res)=> {setCookie('myCookie', res, '/')}).catch((error)=> console.log(error))
        // .then((res) => {
        //   console.log(res);
        //   const userId = res.data.id;
        //   const nickname = res.data.properties.nickname;
        //   axios.get(`${process.env.REACT_APP_SERVER2_URL}/users/${userId}`)
        //   .then((res) => {
        //     if (res.data) {
        //       setTimeout(() => {
        //         navigate(`/main/${userId}`);
        //       }, 2000);
        //     } else {
        //       axios.post(`${process.env.REACT_APP_SERVER2_URL}/users`, {
        //         id: userId,
        //         nickname: nickname,
        //       })
        //       .then(() => {
        //         setTimeout(() => {
        //           navigate(`/main/${userId}`);
        //         }, 2000);
        //       });
        //     }
        //   });
        // });
    //   },[]);
//   }, []);






