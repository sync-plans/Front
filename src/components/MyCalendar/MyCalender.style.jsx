import { styled } from "styled-components";
import { Calendar } from "react-big-calendar";

const CustomCalendar = styled(Calendar)`
  .rbc-month-view {
    border: none;
  }

  .rbc-month-row {
    border: none;
  }

  .rbc-header {
    border-left: none;
    border-right: none;
    border-bottom : 3px double black;
    margin-bottom : 1px;
  }

  .rbc-off-range-bg {
    border: none;
  }

  .rbc-day-bg {
    border-left: none;
    border-right: none;
  }

  .rbc-toolbar-label {
    display: none;
  }
  height: 100%;

  .rbc-button-link {
    border-radius : 100%;
    padding : 1px;
    font-size : 17px;
    &:hover{
      background : skyblue
    }
  }
`;

const CalenderLayout = styled.div`
  margin-top: 15px;
  height: 100%;
  width: 100%;
  padding: 15px;
  box-sizing: border-box;
  max-width: 900px;
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
  border: 0.1px solid black;
  border-radius : 15px;
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

const TodayBtn = styled.button`
    padding : 10px;
    border : none;
    border-radius : 5px;
    font-weight : 600;
    background-color : #0083DD;
    color : white;
    margin-top : 10px;

    &:hover{
      background-color: #0085ddea;
    }
    &:active{
        background-color : #0c4164ea;
    }
`

export {CustomCalendar,TodayBtn,CalenderLayout,CalenderHeader,CalenderTitle,TitleName,TitleDate,ArrowBtn,CustomDayHeader}