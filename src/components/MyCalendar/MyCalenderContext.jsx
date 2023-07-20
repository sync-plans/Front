import { createContext, useContext, useState } from "react";


const MyCalenderContext = createContext();

function MyCalenderContext() {

    const [currentDate,setCurrentDate] = useState()

  return (
    <MyCalenderContext.Provider>

    </MyCalenderContext.Provider>
  )
}
export default MyCalenderContext