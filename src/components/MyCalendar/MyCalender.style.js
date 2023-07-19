import { styled } from "styled-components";

const CalenderLayout = styled.div`
  margin-top: 15px;
  height: 80%;
  width: 100%;
  padding: 15px;
  box-sizing: border-box;
  max-width: 900px;
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
  border: 1px solid black;
`;

const CalenderHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  gap: 10px;
`;

const CalenderTitle = styled.div`
  width: 400px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 100px;
  white-space: nowrap;
`;

const TitleName = styled.h2``;

const TitleDate = styled.div`
  width: 200px;
  font-size: 30px;
`;

const ArrowBtn = styled.div`
  color: black;
  border: 1px solid rgb(215, 215, 215);
  width: 25px;
  height: 20px;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    background-color: skyblue;
    transition-duration: 0.3s;
  }
`;

const CustomDayHeader = styled.div`
  padding: 5px;
  height: 50px;
  color: ${({ children }) =>
    children === "일" ? "red" : children === "토" ? "blue" : "black"};
  font-size: 20px;
`;

export {CalenderLayout,CalenderHeader,CalenderTitle,TitleName,TitleDate,ArrowBtn,CustomDayHeader}