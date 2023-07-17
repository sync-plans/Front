import moment from "moment"
import { styled } from "styled-components"

function PlanCreateModal({event, onclose}) {
    console.log(event)

  return (
    <CreateModalLayOut>
        <button onClick={onclose}>X</button>
        <div>
            <input type="date" />
            <input type="date" />
        </div>
        <div>
            <select>
                <option value="우선순위1">우선순위1</option>
                <option value="우선순위2">우선순위2</option>
                <option value="우선순위3">우선순위3</option>
                <option value="기타순위">기타순위</option>
            </select>
        </div>
        <div>
            <input type="text" />
        </div>
        <div>
            <input type="text" />
        </div>
    </CreateModalLayOut>
  )
}

const CreateModalLayOut = styled.div`
    position : absolute;
    top : 50%;
    left : 50%;
    padding : 15px;
    transform : translate(-50%,-50%);
    background-color : white;
    z-index: 5;
    box-shadow : 0px 0px 5px


`
export default PlanCreateModal