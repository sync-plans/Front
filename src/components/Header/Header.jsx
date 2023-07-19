import { styled } from "styled-components"
import {BsList} from 'react-icons/bs'
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "../../redux/modules/planSlice";
function Header() {
  
  
  const dispatch = useDispatch();
  

  // const [toggleState,setToggleState] = useState(false);
  

const ToggleSidebarBtn = () => {
  dispatch(toggleSidebar());
}



  return (
    <HeaderContainer>
    </HeaderContainer>
  )
}


const HeaderContainer = styled.div`
    display : flex;
    padding : 15px;
    align-items : center;
    gap : 10px;
    background-color : #eee;
    height : 60px;
`

const ToggleBtn = styled.button`
    width : 40px;
    height : 30px;
    border : none;
    font-size : 30px;
    cursor: pointer;
`

export default Header