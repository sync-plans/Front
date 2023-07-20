import axios from 'axios';
import dayjs from 'dayjs';
const planId= async (cookies) => {
    const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api/my-plan`, {
        headers : {
            Authorization: cookies['myCookie']
          }
    })
    console.log(response.data)
    return response.data.map((event) => ({
        id : event.id,
        start : dayjs(event.startDate).add(9, 'hour').format('YYYY-MM-DD HH:mm'),
        end : dayjs(event.endDate).add(9, 'hour').format('YYYY-MM-DD HH:mm'),
        title : event.title,
        content: event.content,
        priority : event.priority,
    }));
}

const createPlan = async ({userData,cookies}) => {
    const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/api/my-plan`, userData, {
        headers : {
            Authorization: cookies['myCookie']
          }
    })
    console.log(response.data)
    return response.data
}

const deletePlan = async ({event,cookies}) => {
    const response =  await axios.delete(`${process.env.REACT_APP_SERVER_URL}/api/my-plan/${event.id}`, {
        headers : {
            Authorization: cookies['myCookie']
          }
    })
    console.log(response.data)
    return response.data
}   

const patchPlan = async ({event,cookies, setData}) => {
    console.log(event.id, cookies, setData)
    const response = await axios.patch(`${process.env.REACT_APP_SERVER_URL}/api/my-plan/${event.id}`,setData, {
        headers: {
            Authorization : cookies['myCookie']
        }
    })
    console.log(response.data)
    return response.data
}

const teamPlan= async () => {
    const response = await axios.get(`${process.env.REACT_APP_SERVER2_URL}/teamplan`)
    return response.data;
}

// const getKakaoTokken = async () => {
//     const response = await axios.post('http://localhost:4000',{})
// }


export {planId, createPlan, deletePlan, patchPlan,teamPlan}