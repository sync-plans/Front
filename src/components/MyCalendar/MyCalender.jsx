import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "moment/locale/ko";
import { useState } from "react";
import { useQuery } from "react-query";
import { planId } from "../../api/my-plan";
import PlanModal from "../PlanModal";
import { useParams } from "react-router-dom";
import PlanCreateModal from "../PlanCreateModal/PlanCreateModal";

moment.locale("ko");
const localizer = momentLocalizer(moment);

const MyCalendar = () => {
  const today = moment().startOf("day");
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [selectedEvent2, setSelectedEvent2] = useState(null);

  const handleEventClick = (event) => {
    console.log(event);
    setSelectedEvent(event);
  };

  const handleEventClick2 = (event) => {
    console.log(event);
    setSelectedEvent2(event);
  };

  const handlePrev = () => {
    const updatedDate = moment(currentDate).subtract(1, "month").toDate();
    setCurrentDate(updatedDate);
  };

  const handleNext = () => {
    const updatedDate = moment(currentDate).add(1, "month").toDate();
    setCurrentDate(updatedDate);
  };

  const handleToday = () => {
    setCurrentDate(today.toDate());
  };
  const param = useParams();
  const { data, isLoading, isError } = useQuery("users", () =>
    planId(param.id)
  );

  const eventStyleGetter = (event) => {
    const style = {
      backgroundColor: event.labelColor,
      borderRadius: "4px",
      opacity: 0.8,
      color: "white",
      border: "none",
    };
    return { style };
  };
  

  return (
    <div style={{ height: 500, width: "100%", padding: "15px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "10px",
          gap: "10px",
        }}
      >
        <button onClick={handlePrev}>{"<"}</button>
        <span>{moment(currentDate).format("YYYY년 MMMM")}</span>
        <button onClick={handleNext}>{">"}</button>
      </div>
      <button onClick={handleToday}>Today</button>
      <style>
        {`
                        .rbc-btn-group, .rbc-toolbar-label{
                            display: none;
                        }
                    
                `}
      </style>
      <Calendar
        localizer={localizer}
        step={60}
        views={["month"]}
        date={currentDate}
        // components={
        //     {toolbar: null}
        // }
        onSelectEvent={handleEventClick}
        onDrillDown={handleEventClick2}
        events={data}
        onNavigate={currentDate}
        eventPropGetter={eventStyleGetter}
      />
      {selectedEvent && (
        <PlanModal
          event={selectedEvent}
          onclose={() => setSelectedEvent(null)}
        />
      )}
      {selectedEvent2 && (<PlanCreateModal event={selectedEvent2}
      onclose={()=> setSelectedEvent2(null)}/>)}
    </div>
  );
};

export default MyCalendar;
