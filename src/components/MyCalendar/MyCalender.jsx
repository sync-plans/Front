import { Calendar, dayjsLocalizer } from "react-big-calendar";
import dayjs from "dayjs";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "moment/locale/ko";
import "dayjs/locale/ko";
import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
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
  const currentdate = now.format("YYYY-MM-DD HH:MM:ss");
  const [currentDate, setCurrentDate] = useState(currentdate);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [selectedEvent2, setSelectedEvent2] = useState(null);

  const handleEventClick = (event) => {
    setSelectedEvent(event);
  };

  const handleEventClick2 = (event) => {
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
  const { data, isLoading, isError } = useQuery("myplan", () => (planId(cookies)));
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
        <button style={{}} onClick={handleToday}>
          Today
        </button>
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
