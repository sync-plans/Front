import dayjs from "dayjs";
import { useState } from "react";
import { createPlan } from "../../api/my-plan";
import { useQueryClient, useMutation } from "react-query";
import {FiPlusSquare} from 'react-icons/fi'

import { useCookies } from "react-cookie";
import * as S from './PlanCreateModal.style'

function PlanCreateModal({event, onclose}) {

    const [cookies] = useCookies();
    const queryClient = useQueryClient();
    const currentDate = dayjs(event)

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

    const [selectedStartDate, setSelectedStartDate] = useState(currentDate.format('YYYY-MM-DDTHH:mm'));
    const [selectedEndDate, setSelectedEndDate] = useState(currentDate.format('YYYY-MM-DDTHH:mm'));
    const [selectedPriority, setSelectedPriority] = useState(1)
    const [titleState,setTitleState] = useState('');
    const [contentState,setContentState] = useState('');



    const handleInputToggleChange = (e, setState) => {
        setState(e.target.value)
    }


    const handleStartDateChange = (event) => {
        setSelectedStartDate(event.target.value)
    }

    const handleEndDateChange = (event) => {
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


  return (
    <S.CreateModalLayOut>
        <S.CreateModalHeader>
            <S.HeaderName>{<FiPlusSquare style={{fontSize : '18px'}}/>}일정등록</S.HeaderName>
            <S.CustomCloseBtn onClick={onclose}/>
        </S.CreateModalHeader>
        <S.CreateModalBody>
        <S.DateContainer>
            <S.DateBox>
            <p>시작일</p>
            <S.DateInput type="datetime-local" onChange={handleStartDateChange} value={selectedStartDate}/>
            </S.DateBox>
            <S.DateBox>
            <p>종료일</p>
            <S.DateInput type="datetime-local" onChange={handleEndDateChange} value={selectedEndDate}/>
            </S.DateBox>
        </S.DateContainer>
        <S.Priority>
            <select value={selectedPriority} onChange={handlePriorityChange}>
                <option value={1}>우선순위1</option>
                <option value={2}>우선순위2</option>
                <option value={3}>우선순위3</option>
                <option value={4}>기타순위</option>
            </select>
        </S.Priority>
        <S.InputContainer>
        <S.TitleInputBox>
            <label>제목 :</label>
            <S.MessegeInput type="text" onChange={(e) => handleInputToggleChange(e,setTitleState)} value={titleState}/>
        </S.TitleInputBox>
        <div>
            <label>내용 :</label>
            <S.MessegeInput type="text" onChange={(e) => handleInputToggleChange(e,setContentState)} value={contentState}/>
        </div>
        </S.InputContainer>
        </S.CreateModalBody>
        <S.ButtonContainer>
            <S.SubmitBtn onClick={handleCreatePlan}>등록</S.SubmitBtn>
            <S.CancleBtn onClick={onclose}>취소</S.CancleBtn>
        </S.ButtonContainer>
    </S.CreateModalLayOut>
  )
}




export default PlanCreateModal