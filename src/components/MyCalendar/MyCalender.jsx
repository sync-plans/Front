import { dayjsLocalizer } from "react-big-calendar";
import dayjs from "dayjs";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "dayjs/locale/ko";
import { useQuery} from "react-query";
import PlanModal from "../PlanModal/PlanModal";
import PlanCreateModal from "../PlanCreateModal/PlanCreateModal";
import { AiOutlineLeft } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";
import { useCookies } from "react-cookie";
import * as S from './MyCalender.style'
import useMyCalender from "../../hooks/useMyCalender";
import { planId } from "../../api/my-plan";

dayjs.locale("ko");
const localizer = dayjsLocalizer(dayjs);

const MyCalendar = ({ id }) => {

  const [cookies,,] = useCookies();


  const {setSelectedEvent,setSelectedEvent2,selectedEvent, 
    selectedEvent2 ,handlePrev, currentDate, handleNext, 
    handleToday, handleEventClick, handleEventClick2, eventStyleGetter} = useMyCalender()


  const { data, isLoading, isError } = useQuery("myplan", () => (planId(cookies)));
  if(isLoading){
    return (
      <h3>로딩중..</h3>
    )
  }
  if(isError){
    return <h3>값을 가져오지 못했습니다</h3>
  }



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
      <S.CustomCalendar
        style={{ height: "100%", padding: "15px" , marginTop : '20px'}}
        localizer={localizer}
        step={60}
        views={['month']}
        date={currentDate}
        components={{
          toolbar: () => null,
          month: {
            header: ({ label }) => <S.CustomDayHeader>{label}</S.CustomDayHeader>,
          }
        }}
        onSelectEvent={handleEventClick}
        onDrillDown={handleEventClick2}
        events={data}
        onNavigate={currentDate}
        eventPropGetter={eventStyleGetter}
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

export default MyCalendar;
