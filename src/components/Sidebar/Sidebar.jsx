import { useSelector } from "react-redux"
import { styled } from "styled-components"
import {css} from "styled-components"
import {AiOutlinePlusCircle} from "react-icons/ai"
function Sidebar() {

  const value = useSelector(state => state.planSlice.my_plan.toggleSidebar);
  return (
    <SidebarContainer value={value}>
        <p>개인플랜</p>
        <p><AiOutlinePlusCircle/> 일정등록</p>
    </SidebarContainer>
  )
}

const SidebarContainer = styled.div`
    width : 120px;
    height : 100vh;
    background-color : green;
    position : absolute;
    padding : 15px;
    left : -150px;
    z-index: 5;
    transition : left 0.3s ease;
    ${({value}) => value && css`
      left : 0;
    `
    }
`
export default Sidebar