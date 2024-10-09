import axios from "axios";

const API_KEY=import.meta.env.VITE_YOUTUBE_API_KEY;

const options = {
    method: 'GET',
    url: 'https://youtube342.p.rapidapi.com/search',
    params: {
      part: 'snippet',
      q: 'surfing',
      channelType: 'any',
      eventType: 'completed',
      maxResults: '25',
      safeSearch: 'moderate',
      type: 'video',
      videoCaption: 'any',
      videoDefinition: 'any',
      videoDimension: '2d',
      videoDuration: 'short',
      videoEmbeddable: 'true',
      videoLicense: 'creativeCommon',
      videoPaidProductPlacement: 'true',
      videoSyndicated: 'true',
      videoType: 'episode'
    },
    headers: {
      'x-rapidapi-key': API_KEY,
      'x-rapidapi-host': 'youtube342.p.rapidapi.com'
    }
  };

export const fetchData=async(url)=>{
    try {
        options.params.q = url;
        const {data}= await axios.request(options);
        console.log(data);
        return {data};
    } catch (error) {
        console.error("error fetching api data: ", error);
        throw error;
    }
}