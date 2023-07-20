import dayjs from "dayjs";
import { useState } from "react";
import { styled } from "styled-components"
import timezone from 'dayjs/plugin/timezone'
import CustomParseFormat from 'dayjs/plugin/customParseFormat'
import { createPlan } from "../../api/my-plan";
import { useQueryClient, useMutation } from "react-query";
import {FiPlusSquare} from 'react-icons/fi'
import {AiOutlineClose} from 'react-icons/ai'
import { useCookies } from "react-cookie";

function PlanCreateModal({event, onclose}) {
    dayjs.extend(timezone);
    dayjs.extend(CustomParseFormat);

    const [cookies] = useCookies();

    const queryClient = useQueryClient();
    const currentDate = dayjs(event)
    // const currentDate = new Date(event)
    console.log(currentDate)


    const [selectedStartDate, setSelectedStartDate] = useState(currentDate.format('YYYY-MM-DDTHH:mm'));
    const [selectedEndDate, setSelectedEndDate] = useState(currentDate.format('YYYY-MM-DDTHH:mm'));
    const [selectedPriority, setSelectedPriority] = useState(1)
    const [titleState,setTitleState] = useState('');
    const [contentState,setContentState] = useState('');

    const createPlanMutation = useMutation(createPlan, {
        onSuccess: () => {
            queryClient.invalidateQueries('myplan');
            onclose()
        }
        ,
        onError: () => {
            console.log('값을 입력받지 못했습니다.')
        }
    })    


    const handleInputToggleChange = (e, setState) => {
        setState(e.target.value)
    }


    const handleStartDateChange = (event) => {
        console.log(event.target.value)
        setSelectedStartDate(event.target.value)
    }

    const handleEndDateChange = (event) => {
        console.log(event.target.value)
        setSelectedEndDate(event.target.value)
    }

    const handleCreatePlan = () => {
        const userData = {
            title : titleState,
            content : contentState,
            startDate : dayjs(selectedStartDate),
            endDate : dayjs(selectedEndDate),
            priority : selectedPriority,
        }
        createPlanMutation.mutate({userData,cookies})
    }

    const handlePriorityChange = (e) => {
        setSelectedPriority(Number(e.target.value))
    }

    // console.log(dayjs(selectedStartDate).format('YYYY-MM-DD HH:MM:ss:Z'))
    // console.log(dayjs(selectedStartDate).toDate().getTime())

  return (
    <CreateModalLayOut>
        <CreateModalHeader>
            <HeaderName>{<FiPlusSquare style={{fontSize : '18px'}}/>}일정등록</HeaderName>
            <CustomCloseBtn onClick={onclose}/>
        </CreateModalHeader>
        <CreateModalBody>
        <DateContainer>
            <DateBox>
            <p>시작일</p>
            <DateInput type="datetime-local" onChange={handleStartDateChange} value={selectedStartDate}/>
            </DateBox>
            <DateBox>
            <p>종료일</p>
            <DateInput type="datetime-local" onChange={handleEndDateChange} value={selectedEndDate}/>
            </DateBox>
        </DateContainer>
        <Priority>
            <select value={selectedPriority} onChange={handlePriorityChange}>
                <option value={1}>우선순위1</option>
                <option value={2}>우선순위2</option>
                <option value={3}>우선순위3</option>
                <option value={4}>기타순위</option>
            </select>
        </Priority>
        <InputContainer>
        <TitleInputBox>
            <label>제목 :</label>
            <MessegeInput type="text" onChange={(e) => handleInputToggleChange(e,setTitleState)} value={titleState}/>
        </TitleInputBox>
        <div>
            <label>내용 :</label>
            <MessegeInput type="text" onChange={(e) => handleInputToggleChange(e,setContentState)} value={contentState}/>
        </div>
        </InputContainer>
        </CreateModalBody>
        <ButtonContainer>
            <SubmitBtn onClick={handleCreatePlan}>등록</SubmitBtn>
            <CancleBtn onClick={onclose}>취소</CancleBtn>
        </ButtonContainer>
    </CreateModalLayOut>
  )
}

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
  /* 기본 스타일 */
  width: 150px;
  height: 30px;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius : 5px;

  /*디자인 변경*/
  /* &::-webkit-calendar-picker-indicator {
    order: 1;
  }

  &::-webkit-datetime-edit-fields-wrapper,
  &::-webkit-inner-spin-button,
  &::-webkit-clear-button {
    order: 2;
  } */

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

const CustomCloseBtn = styled(AiOutlineClose)`
    color : white;
    cursor : pointer;
    font-weight : bold;
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
    height : 50px;
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
    height : 50px;
    border-radius : 10px;
    background-color : #e33768ea;
    color : white;
    font-size : 1.3rem;
    border : none;
    font-weight : bold;

    &:hover{
        background-color : #ed5e87d0;
    }
    &:active{
        background-color : #771515;
    }
`


export default PlanCreateModal