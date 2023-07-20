import dayjs from "dayjs";
import { useState } from "react";



const useMyCalender = () => {

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

  const eventStyleGetter = (eventData) => {
    const style = {
      backgroundColor: eventData.priority === 1 ? 'rgb(252,143,154)' : eventData.priority === 2 ? 'rgb(252,143,194)' : eventData.priority === 3 ? 'rgb(255,80,71)' : 'red',
      borderRadius: "4px",
      opacity: 0.8,
      color: "white",
      border: "none",
    };
    return { style };
  };
    
  return {eventStyleGetter,setSelectedEvent, setSelectedEvent2,currentDate,handleEventClick, handleEventClick2, handlePrev, handleNext, handleToday, selectedEvent, selectedEvent2}
}
export default useMyCalender