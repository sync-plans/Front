import Header from "../components/Header/Header"
import MyCalendar from "../components/MyCalendar/MyCalender"
import Sidebar from "../components/Sidebar/Sidebar"
import { teamPlan } from "../api/my-plan"

function TeamPlan() {
  return (
    <div>
        <Header/>
        <Sidebar/>
        <MyCalendar plan={teamPlan}/>
    </div>
  )
}
export default TeamPlan