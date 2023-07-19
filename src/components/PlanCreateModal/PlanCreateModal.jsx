import dayjs from "dayjs";
import { useState } from "react";
import { styled } from "styled-components"
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'
import CustomParseFormat from 'dayjs/plugin/customParseFormat'
import { createPlan } from "../../api/my-plan";
import { useQueryClient, useMutation } from "react-query";
import {FiPlusSquare} from 'react-icons/fi'
import {AiOutlineClose} from 'react-icons/ai'
import { useCookies } from "react-cookie";

function PlanCreateModal({event, onclose}) {

    const [cookies] = useCookies();

    const queryClient = useQueryClient();
    const currentDate = dayjs(event).format('YYYY-MM-DDTHH:mm:ssZ')
    // const currentDate = new Date(event)

    const [selectedStartDate, setSelectedStartDate] = useState(currentDate);
    const [selectedEndDate, setSelectedEndDate] = useState(currentDate);
    const [selectedPriority, setSelectedPriority] = useState([1,2,3,4])
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
            id : Date.now(),
            title : titleState,
            content : contentState,
            startDate : dayjs(selectedStartDate),
            endDate : dayjs(selectedEndDate),
            priority : 1
        }
        createPlanMutation.mutate({userData,cookies})
    }
    dayjs.extend(utc);
    dayjs.extend(timezone);
    dayjs.extend(CustomParseFormat);
    // console.log(dayjs(selectedStartDate).format('YYYY-MM-DD HH:MM:ss:Z'))
    // console.log(dayjs(selectedStartDate).toDate().getTime())

  return (
    <CreateModalLayOut>
        <CreateModalHeader>
            <HeaderName>{<FiPlusSquare style={{fontSize : '18px'}}/>}등록</HeaderName>
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
            <select>
                <option value={selectedPriority[0]}>우선순위1</option>
                <option value={selectedPriority[1]}>우선순위2</option>
                <option value={selectedPriority[2]}>우선순위3</option>
                <option value={selectedPriority[3]}>기타순위</option>
            </select>
        </Priority>
        <div>
            <label htmlFor="">제목</label><input type="text" onChange={(e) => handleInputToggleChange(e,setTitleState)} value={titleState}/>
        </div>
        <div>
            <label htmlFor="">내용</label><input type="text" onChange={(e) => handleInputToggleChange(e,setContentState)} value={contentState}/>
        </div>
        </CreateModalBody>
        <div>
            <button onClick={handleCreatePlan}>등록</button>
            <button>취소</button>
        </div>
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
    box-shadow : 0px 0.5px 3px
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

    > select {
        width : 150px;
        height : 50px;
        border-radius : 5px;
        border-color : #636060;
        opacity : 0.6;
    }

`


export default PlanCreateModal