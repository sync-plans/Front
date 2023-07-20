import { styled } from 'styled-components';

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
    background-color : rgb(246,248,252);
`

const KaKaoLoginBtn = styled.a`
    width : 185px;
    height : 45px;
    border-radius : 15px;
    border : none;
    cursor : pointer;
`

const LoginWrraper = styled.div`
  display : flex;
  flex-direction : column;
  align-items : center;
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

const LoginTitle = styled.h1`
  width : 100%;
  background-color : transparent;
  font-weight : bold;
  display : flex;
  align-items : center;
  gap : 10px;
`

export {LoginContainer,LoginBox,KaKaoLoginBtn,LoginWrraper,LoginBackGround,LoginTitle}