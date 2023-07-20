import React, { useState } from 'react';
import styled from 'styled-components';
import './App.css';

function SideTest() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      {!isMenuOpen && (
        <Navbar>
          <Nav>
            <div>
              <NavBrand>
                <NavLogo href='#'>
                  Sync-plans
                  <span class='material-symbols-outlined' style={{ fontSize: '40px' }}>
                    directions_run
                  </span>
                </NavLogo>
              </NavBrand>
              <div className='nav__list'>
                <NavLink href='#'>
                  <NavIcon>
                    <span class='material-symbols-outlined' style={{ fontSize: '40px' }}>
                      person
                    </span>
                  </NavIcon>
                  <NavName>내 일정</NavName>
                </NavLink>

                <NavLink href='#'>
                  <NavIcon>
                    <span class='material-symbols-outlined' style={{ fontSize: '40px' }}>
                      group
                    </span>
                  </NavIcon>
                  <NavName>팀 일정</NavName>
                </NavLink>

                <NavLink href='#'>
                  <NavIcon>
                    <span class='material-symbols-outlined' style={{ fontSize: '40px' }}>
                      logout
                    </span>
                  </NavIcon>
                  <NavName>로그아웃</NavName>
                </NavLink>
              </div>
            </div>
          </Nav>
        </Navbar>
      )}
      <>
        <MenuToggle onClick={toggleMenu}>
          <span class='material-symbols-outlined' style={{ fontSize: '40px' }}>
            menu
          </span>
        </MenuToggle>
      </>
    </div>
  );
}

export default SideTest;

const Navbar = styled.div`
  position: fixed;
  width: 300px;
  height: 95vh;
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
`;

const NavLogo = styled.a`
  color: #fff;
  font-weight: 600;
  font-size: 30px;
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

const MenuToggle = styled.button`
  font-size: 1.25rem;
  padding: 0.75rem;
  cursor: pointer;
  position: absolute;
  top: 10px;
  left: 310px;
  border: none;
  background: transparent;
`;
