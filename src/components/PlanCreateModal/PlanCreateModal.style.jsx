import { styled } from "styled-components";
import {AiOutlineClose} from 'react-icons/ai'

const CreateModalLayOut = styled.div`
    position : fixed;
    top : 50%;
    left : 50%;
    transform : translate(-50%,-50%);
    background-color : white;
    z-index: 5;
    box-shadow : 0px 0px 5px;
    max-width : 500px;
    height : 400px;
    width : 400px;
    display : flex;
    flex-direction : column;
`

const DateInput = styled.input`
  width: 150px;
  height: 30px;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius : 5px;

  font-weight : bold;
`;

const CreateModalHeader = styled.div`
    padding : 15px;
    display : flex;
    background-color : rgb(0, 172, 222);
    align-items : center;
    justify-content : space-between;
    box-shadow : 0px 0.5px 3px;
`

const HeaderName = styled.div`
    display : flex;
    color : white;
    align-items : center;
    gap : 5px;
    font-weight : bold;
`

const CreateModalBody = styled.div`
    padding : 15px;
    display : flex;
    flex-direction : column;
`

const DateContainer = styled.div`
    display : flex;
    gap : 20px;
    justify-content : center;
`

const DateBox = styled.div`
    display : flex;
    flex-direction : column;

    > p {
        color : #636060;
        opacity : 0.6;
        margin : 0px;
    }
`
const Priority = styled.div`
    padding : 20px 0px;
    display : flex;
    justify-content : center;

    > select {
        width : 290px;
        height : 30px;
        border-radius : 5px;
        border-color : #636060;
        opacity : 0.6;
    }
`

const InputContainer = styled.div`
    display : flex;
    flex-direction : column;
    padding : 5px;
    gap : 20px;
`

const TitleInputBox = styled.div`
`

const MessegeInput = styled.input`
    width : 290px;
    height : 30px;
    border-radius : 5px;
    border : 1px solid rgb(215,215,215);
`

const ButtonContainer = styled.div`
    display : flex;
    padding : 15px;
    width : 100%;
    justify-content : space-around;
`

const SubmitBtn = styled.button`
    width : 100px;
    padding : 10px;
    border-radius : 10px;
    background-color : #0083DD;
    color : white;
    font-size : 1.3rem;
    border : none;
    font-weight : bold;

    &:hover{
        background-color : #0085ddea;
    }
    &:active{
        background-color : #0c4164ea;
    }
`

const CancleBtn = styled.button`
    width : 100px;
    border-radius : 10px;
    background-color : #e33768ea;
    color : white;
    font-size : 1.3rem;
    border : none;
    font-weight : bold;
    padding : 10px;
    &:hover{
        background-color : #ed5e87d0;
    }
    &:active{
        background-color : #771515;
    }
`
const CustomCloseBtn = styled(AiOutlineClose)`
    color : white;
    cursor : pointer;
    font-weight : bold;
`

export {CustomCloseBtn,DateContainer,CreateModalBody,HeaderName,CreateModalHeader,DateInput,DateBox,InputContainer,Priority,CreateModalLayOut,CancleBtn,SubmitBtn,ButtonContainer,MessegeInput,TitleInputBox}