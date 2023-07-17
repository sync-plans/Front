import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";
import Mycalender from "../components/MyCalendar/MyCalender";

function Main() {


  return (
    <div>
      <Header />
      <div style={{ display: "flex" }}>
        <Sidebar />
        <Mycalender />
      </div>
    </div>
  );
}
export default Main;
