import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";
import Mycalender from "../components/MyCalendar/MyCalender";
import { useParams } from "react-router-dom";
function Main() {
  const {id} = useParams();

  return (
    <div>
      <Header />
      <div style={{ display: "flex" }}>
        <Sidebar />
        <Mycalender id={id}/>
      </div>
    </div>
  );
}
export default Main;
