import { createContext, useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { styled } from "styled-components";
import { deletePlan, patchPlan } from "../../api/my-plan";
import dayjs from "dayjs";
import { useCookies } from "react-cookie";
function PlanModal({ event, onclose }) {

  const [cookies] = useCookies()

  const [planTitle, setPlanTitle] = useState(event.title);
  const [planContent, setPlanContent] = useState(event.content);
  const [startDate, setStartDate] = useState(dayjs(event.start).format('YYYY-MM-DDTHH:mm'));
  const [EndDate, setEndDate] = useState(dayjs(event.end).format('YYYY-MM-DDTHH:mm'));




  const queryClient = useQueryClient();

  const deleteplanmutate = useMutation(deletePlan, {
    onSuccess: () => {
      queryClient.invalidateQueries("myplan");
    },
  });

  const patchMutate = useMutation(patchPlan, {
    onSuccess: () => {
      queryClient.invalidateQueries('myplan');
    }
  })

  const handleDeleteMyplan = (event,cookies) => {
    deleteplanmutate.mutate({event,cookies});
    onclose();
  };

  const handlePatchMyplan = (event, cookies) => {
    const setData = {
      id : event.id,
      title : planTitle,
      content : planContent,
      startDate : dayjs(startDate),
      endDate : dayjs(EndDate),
      priority : 1,
    }
    patchMutate.mutate({event, cookies, setData})
  }

  const handleInputChange = (e,setState) => {
    const {value} = e.target
    setState(value)
  }

  const handleDateChange = (event) => {
    setStartDate(event.target.value);
  };

  return (
    <PlanModalLayout>
        <PlanModalHeader>
        <button onClick={onclose}>X</button>
        </PlanModalHeader>
        <PlanModalInputBox>
          <label>제목 :</label><PlanModalInput value={planTitle} onChange={(e) =>handleInputChange(e,setPlanTitle)}></PlanModalInput>
          <label>내용 :</label><PlanModalInput value={planContent} onChange={(e) =>handleInputChange(e, setPlanContent)}></PlanModalInput>
        </PlanModalInputBox>
        <PlanModalDateBox>
          <PlanDateInput type='datetime-local' value={startDate} onChange={(e) => handleDateChange(e,setStartDate)}></PlanDateInput>
          <PlanDateInput type='datetime-local' value={EndDate} onChange={(e) => handleDateChange(e, setEndDate)}></PlanDateInput>
        </PlanModalDateBox>
        <PlanModalBtnBox>
          <PlanModalBtn bh='#0085ddea' bc='#0083DD;' onClick={() => handlePatchMyplan(event,cookies)}>수정</PlanModalBtn>
          <PlanModalBtn bh='#ed5e87d0' bc='#e33768ea;'onClick={() => handleDeleteMyplan(event,cookies)}>삭제</PlanModalBtn>
        </PlanModalBtnBox>
    </PlanModalLayout>
  );
}

const PlanModalLayout = styled.div`
  width: 400px;
  height: 400px;
  background-color: white;
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 5;
  transform: translate(-50%, -50%);
  border-radius: 15px;
  box-shadow: 0px 0px 10px;
`;

const PlanModalHeader = styled.div`
      padding : 15px;
    display : flex;
    background-color : rgb(0, 172, 222);
    align-items : center;
    justify-content : space-between;
    box-shadow : 0px 0.5px 3px;
`

const PlanModalInputBox = styled.div`
  display : flex;
  flex-direction : column;
  padding : 15px;
  gap : 10px;
`

const PlanModalInput = styled.input`
  height : 50px;
  border-radius :15px;
  border : 1px solid rgb(215,215,215);
  box-shadow : 1px 1px 3px;
  font-size : 1rem;
`

const PlanModalDateBox = styled.div`
  padding : 15px;
  display : flex;
  gap : 10px;
`

const PlanDateInput = styled.input`
  width : 200px;
`

const PlanModalBtnBox = styled.div`
  display : flex;
  padding : 15px;
  justify-content : space-around;
`

const PlanModalBtn = styled.button`
  padding : 10px;
  width : 100px;
  border-radius : 10px;
  border : none;
  color : white;
  font-weight : bold;
  background-color : ${({bc}) => bc};
  cursor : pointer;

  &:hover{
    background-color : ${({bh}) => bh}
  }
`

export default PlanModal;
