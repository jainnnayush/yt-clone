import axios from "axios";

const API_KEY=import.meta.env.VITE_YOUTUBE_API_KEY;
const BASE_URL="https://youtube342.p.rapidapi.com"

const options = {
	headers: {
		'x-rapidapi-key': '8db1bc156fmshb72c6b359a474d8p16da3cjsnd941b791ba27',
		'x-rapidapi-host': 'youtube342.p.rapidapi.com'
	}
};

export const fetchData=async(url)=>{
    try {
        const {data}= await axios.get(`${BASE_URL}/${url}`,options);
        return {data};
    } catch (error) {
        console.error("error fetching api data: ", error);
        throw error;
    }
}