import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";
import Mycalender from "../components/MyCalendar/MyCalender";
import { planId } from "../api/my-plan";
function Main() {


  return (
    <div>
      <Header />
      <div style={{ display: "flex" }}>
        <Sidebar />
        <Mycalender plan={planId}/>
      </div>
    </div>
  );
}
export default Main;
