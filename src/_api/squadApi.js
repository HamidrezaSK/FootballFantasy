import * as api_urls from "./api_urls"
import axios from "axios"

class picksquad_page_api {
    static async getPlayers(){
        const token = localStorage.getItem("access_token")
        const config = 
        {
            mode: "cors",
            headers: 
            {
            'Content-Type': 'application/json',
            "Authorization" : `Bearer ${token}`
            }
        }
        // console.log("fucking bitch")
        let response = await axios.get(api_urls.PICKSQUAD,config)
        console.log("response",response)
        return response  
    }
}
export default picksquad_page_api