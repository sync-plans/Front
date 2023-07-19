import { createContext, useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { styled } from "styled-components";
import { deletePlan, patchPlan } from "../../api/my-plan";
import TitleInput from "./TitleInput";
import dayjs from "dayjs";
import { useCookies } from "react-cookie";
function PlanModal({ event, onclose }) {

  const [cookies] = useCookies()

  const [toggleState, setToggleState] = useState(false);
  const [newTitle, setNewTitle] = useState(event.title);
  
  const queryClient = useQueryClient();

  console.log(event.id)

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

  const handlePatchMyplan = (event, Titlevalue) => {
    console.log(Titlevalue)
    patchMutate.mutate({id : event.id, title : Titlevalue})
  }

  const handleToggleMyplan = () => {
    setToggleState(!toggleState);
  };

  const handleInputChange = (e) => {
    const {value} = e.target
    setNewTitle(value)
  }

  return (
    <PlanModalLayout>
      <div>
        <button onClick={onclose}>X</button>
        {toggleState ? (
          <TitleInput event={event} value={newTitle} onChange={handleInputChange}></TitleInput>
        ) : (
          <p>{event.title}</p>
        )}
        <p>{event.content}</p>
        <div style={{ display: "flex" }}>
          <p>{dayjs(event.start).format('YYYY-MM-DD HH:mm:ss')}</p>
          <p>{dayjs(event.end).format('YYYY-MM-DD HH:mm:ss')}</p>
        </div>
        <div>
          <button onClick={handleToggleMyplan}>수정</button>
          <button onClick={() => handleDeleteMyplan(event,cookies)}>삭제</button>
          <button onClick={() => handlePatchMyplan(event,newTitle)}>확인</button>
        </div>
      </div>
    </PlanModalLayout>
  );
}

const PlanModalLayout = styled.div`
  width: 500px;
  height: 400px;
  background-color: white;
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 5;
  transform: translate(-50%, -50%);
  padding: 15px;
  border-radius: 15px;
  box-shadow: 0px 0px 10px;
`;

export default PlanModal;
