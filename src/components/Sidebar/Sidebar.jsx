import { keyframes, styled } from "styled-components"
import { useDispatch, useSelector } from 'react-redux';
import { toggleSidebar } from "../../redux/modules/planSlice";
import { useParams } from "react-router-dom";



function Sidebar() {
  
  
  const { id } = useParams();
  const pathroot = '/main/' + id
  const toggleSide = useSelector((state) => state.planSlice.my_plan.toggleSidebar)
  const dispatch = useDispatch()

  const handleShowSidebar = () => {
      dispatch(toggleSidebar())
  }

  return (
    <>
    <SidebarContainer show={toggleSide.toString()}> 
        <Navbar>
          <Nav>
            <div>
              <NavBrand>
                <NavLogo href={pathroot}>
                  Sync-plans
                </NavLogo>
              </NavBrand>
              <div className='nav__list'>
                <NavLink href='/main'>
                  <NavIcon>
                    <span className='material-symbols-outlined' style={{ fontSize: '40px' }}>
                      person
                    </span>
                  </NavIcon>
                  <NavName>내 일정</NavName>
                </NavLink>

                <NavLink href='/teamplan'>
                  <NavIcon>
                    <span className='material-symbols-outlined' style={{ fontSize: '40px' }}>
                      group
                    </span>
                  </NavIcon>
                  <NavName>팀 일정</NavName>
                </NavLink>

                <NavLink href='/'>
                  <NavIcon>
                    <span className='material-symbols-outlined' style={{ fontSize: '40px' }}>
                      logout
                    </span>
                  </NavIcon>
                  <NavName>로그아웃</NavName>
                </NavLink>
              </div>
            </div>
          </Nav>
        </Navbar>
      <MenuToggleContainer>
        <MenuToggle>
          <span className='material-symbols-outlined' style={{ fontSize: '40px' }} onClick={handleShowSidebar}>
            menu
          </span>
        </MenuToggle>
      </MenuToggleContainer>
    </SidebarContainer>
    </>
  );
  }

export default Sidebar;

const Navbar = styled.div`
  /* position: fixed; */
  width: 250px;
  height: 100vh;
  background-color: #12192c;
  color: #fff;
  padding: 20px 30px;
  transition: 0.5s;
  z-index: 100;
  display: flex;
`;

const Nav = styled.nav`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
`;

const NavBrand = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  white-space: nowrap;
`;

const NavLogo = styled.a`
  color: #fff;
  font-weight: 600;
  font-size: 25px;
  margin: 10px 25px;
`;

const NavLink = styled.a`
  display: grid;
  grid-template-columns: max-content max-content;
  align-items: center;
  column-gap: 0.75rem;
  padding: 0.75rem;
  color: var(--white-color);
  border-radius: 0.5rem;
  margin-bottom: 1rem;
  transition: 0.3s;
  width: 220px;
  cursor: pointer;

  &:hover,
  &:active {
    background-color: #0c5df4;
  }
`;

const NavIcon = styled.span`
  font-size: 1.25rem;
`;

const NavName = styled.span`
  font-size: 20px;
  border: 900;
`;

const MenuToggleContainer = styled.div`
  width : 70px;
`

const MenuToggle = styled.button`
  font-size: 1.25rem;
  padding: 0.75rem;
  position: absolute;
  border: none;
  background: transparent;
  cursor : pointer;
`;

const slideIn = keyframes`
  from {
    left: -250px;
  }
  to {
    left: 0;
  }
`;

const slideOut = keyframes`
  from {
    left: 0;
  }
  to {
    left: -250px;
  }
`;

const SidebarContainer = styled.div`
  display: flex;
  flex-direction: row;
  position: fixed;
  z-index: 5;
  top: 0px;
  left: ${({ show }) => (show === "true" ? "0" : "-250px")};
  height: 100vh;
  transition: 0.3s ease;
  animation: ${({ show }) => (show === "true" ? slideIn : slideOut)} 0.3s ease;
`