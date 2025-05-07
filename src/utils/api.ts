// translateApi.ts
import axios from "axios";

const translateApi = axios.create({
  baseURL: "https://google-translate113.p.rapidapi.com/api/v1/translator",
  headers: {
    "x-rapidapi-key": "8f8b881411msh56c0796c76d7f7ep19cbacjsn1438e8ceeca2",
    "x-rapidapi-host": "google-translate113.p.rapidapi.com",
    "Content-Type": "application/json",
  },
});

export default translateApi;
