import axios from 'axios';




const planId= async (cookies) => {
    const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api/my-plan`, {
        headers : {
            Authorization: cookies['myCookie']
          }
    })
    return response.data.map((event) => ({
        id : event.id,
        start : new Date(event.startDate),
        end : new Date(event.endDate),
        title : event.title,
        content: event.content,

    }));
}

const teamPlan= async () => {
    const response = await axios.get(`${process.env.REACT_APP_SERVER2_URL}/teamplan`)
    return response.data;
}

const createPlan = async ({userData,cookies}) => {
    const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/api/my-plan`, userData, {
        headers : {
            Authorization: cookies['myCookie']
          }
    })
    return response.data
}

const deletePlan = async ({event,cookies}) => {
    const response =  await axios.delete(`${process.env.REACT_APP_SERVER_URL}/api/my-plan/${event.id}`, {
        headers : {
            Authorization: cookies['myCookie']
          }
    })
    return response.data
}   

const patchPlan = async (data) => {
    const response = await axios.patch(`${process.env.REACT_APP_SERVER2_URL}/myplan/${data.id}`,{title : data.title})
    return response.data
}

// const getKakaoTokken = async () => {
//     const response = await axios.post('http://localhost:4000',{})
// }


export {planId, createPlan, deletePlan, patchPlan,teamPlan}