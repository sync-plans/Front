import axios from 'axios';


const planId= async (id) => {
    const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/users/${id}`)
    console.log(response.data.myplan)
    return response.data.myplan;
}

// const getKakaoTokken = async () => {
//     const response = await axios.post('http://localhost:4000',{})
// }


export {planId}