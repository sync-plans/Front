import { styled } from "styled-components"

function PlanModal({event, onclose}) {

  return (
    <PlanModalLayout>
        <div>
            <button onClick={onclose}>X</button>
            <h2>{event.title}</h2>
            <p>{event.content}</p>
            <div style={{display : 'flex'}}>
            <p>{event.start}</p>
            <p>{event.end}</p>
            </div>
            <div>
            <button>수정</button>
            <button>삭제</button>
            </div>
        </div>
    </PlanModalLayout>
  )
}


const PlanModalLayout = styled.div`
    width : 500px;
    height : 400px;
    background-color : white;
    position : fixed;
    top : 50%;
    left : 50%;
    z-index: 5;
    transform : translate(-50%,-50%);
    padding : 15px;
    border-radius : 15px;
    box-shadow : 0px 0px 10px
`

export default PlanModal