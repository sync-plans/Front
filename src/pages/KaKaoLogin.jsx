import { useEffect } from "react";
import {useNavigate} from "react-router-dom"
import axios from "axios";

function KaKaoLogin() {
const navigate = useNavigate();

useEffect(()=> {
    const params = new URL(document.location.toString()).searchParams;
    const code = params.get('code') //인가 코드를 받는다.
    const grant_type = 'authorization_code';

    
    

    axios.post(`https://kauth.kakao.com/oauth/token?grant_type=${grant_type}&client_id=${process.env.REACT_APP_CLIENT_ID}&redirect_uri=http://localhost:3000/oauth/kakao/callback&code=${code}`,
        {},
        {
            headers: {
                "Content-type" : "application/x-www-form-urlencoded;charset=utf-8"
            }}).then((res)=> {
            console.log(res)
            const {access_token} = res.data;
            console.log(access_token)
            axios.post(
                `https://kapi.kakao.com/v2/user/me`,
                {},
                {
                    headers:{
                        Authorization: `Bearer ${access_token}`,
                        "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
                    }
                }
            ).then((res) => {
                const userId = res.data.id
                const nickname = res.data.properties.nickname
                axios.get(`${process.env.REACT_APP_SERVER_URL}/users/${userId}`).
                then((res) => {
                    if(res.data){
                        setTimeout(() => {
                            navigate(`/main/${userId}`)
                        }, 2000);
                    } else {
                        axios.post(`${process.env.REACT_APP_SERVER_URL}/users`, {
                            id: userId,
                            nickname : nickname,
                        }).then(() => {
                            setTimeout(() => {
                                navigate(`/main/${userId}`)
                            }, 2000);
                        })
                    }
                })
            }
            )   
        })
    },[])



  return (
    <div>로그인 중입니다...</div>
  )
}
export default KaKaoLogin