import { Calendar, dayjsLocalizer } from "react-big-calendar";
import dayjs from "dayjs";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "dayjs/locale/ko";
import { useState } from "react";
import { useQuery} from "react-query";
import { planId } from "../../api/my-plan";
import PlanModal from "../PlanModal/PlanModal";
import { useParams } from "react-router-dom";
import PlanCreateModal from "../PlanCreateModal/PlanCreateModal";
import { styled } from "styled-components";
import { AiOutlineLeft } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";
import { useCookies } from "react-cookie";
import * as S from './MyCalender.style'

dayjs.locale("ko");
const localizer = dayjsLocalizer(dayjs);

const MyCalendar = ({ plan }) => {

  const [cookies,setCookie,removeCookie] = useCookies();

  const today = dayjs().startOf("day");
  const date = new Date();
  const now = dayjs(date);
  const currentdate = now.format("YYYY-MM-DD HH:MM");
  const [currentDate, setCurrentDate] = useState(currentdate);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [selectedEvent2, setSelectedEvent2] = useState(null);

  const handleEventClick = (event) => {
        // 클릭한 이벤트 객체의 시작시간과 종료시간 추출
    
    setSelectedEvent(event);
  };

  const handleEventClick2 = (event) => {

    console.log('시작 시간:', dayjs(event.start).format('YYYY-MM-DD HH:mm'));
    console.log('종료 시간:', dayjs(event.End).format('YYYY-MM-DD HH:mm'));
    setSelectedEvent2(event);
  };

  const handlePrev = () => {
    const updatedDate = dayjs(currentDate).subtract(1, "month").toDate();
    setCurrentDate(updatedDate);
  };

  const handleNext = () => {
    const updatedDate = dayjs(currentDate).add(1, "month").toDate();
    setCurrentDate(updatedDate);
  };

  const handleToday = () => {
    setCurrentDate(today);
  };
  const param = useParams();
  const { data, isLoading, isError } = useQuery("myplan", () => (plan(cookies)));
  console.log(data)
  if(isLoading){
    return (
      <h3>로딩중..</h3>
    )
  }
  if(isError){
    return <h3>값을 가져오지 못했습니다</h3>
  }

  // const eventStyleGetter = (start,end,event) => {
  //   // const isWeekend = start.getDay() === 0 || end.getDay() === 6;

  //   const style = {
  //     backgroundColor: event.labelColor,
  //     borderRadius: "4px",
  //     opacity: 0.8,
  //     color: "white",
  //     border: "none",

  //   };
  //   return { style };
  // };

  return (
    <S.CalenderLayout>
      <S.CalenderHeader>
        <S.TitleName>Calender</S.TitleName>
        <S.CalenderTitle>
          <S.ArrowBtn onClick={handlePrev}>{<AiOutlineLeft />}</S.ArrowBtn>
          <S.TitleDate>
            <div style={{ width: "150px", margin: "0px" }}>
              {dayjs(currentDate).format("YYYY년 MMMM")}
            </div>
          </S.TitleDate>
          <S.ArrowBtn onClick={handleNext}>{<AiOutlineRight />}</S.ArrowBtn>
        </S.CalenderTitle>
        <S.TodayBtn style={{}} onClick={handleToday}>
          Today
        </S.TodayBtn>
      </S.CalenderHeader>
      <div style={{height : '70%'}}>
      <CustomCalendar
        style={{ height: "100%", padding: "15px" , marginTop : '20px'}}
        localizer={localizer}
        step={60}
        views={["month"]}
        date={currentDate}
        components={{
          toolbar: () => null,
          month: {
            header: ({ label }) => <S.CustomDayHeader>{label}</S.CustomDayHeader>,
          },
        }}
        onSelectEvent={handleEventClick}
        onDrillDown={handleEventClick2}
        events={data}
        onNavigate={currentDate}
        // eventPropGetter={eventStyleGetter}
      />
      <button></button>
      </div>
      {selectedEvent && (
        <PlanModal
          event={selectedEvent}
          onclose={() => setSelectedEvent(null)}
        />
      )}
      {selectedEvent2 && (
        <PlanCreateModal
          event={selectedEvent2}
          onclose={() => setSelectedEvent2(null)}
        />
      )}
    </S.CalenderLayout>
  );
};

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
`;

export default MyCalendar;
