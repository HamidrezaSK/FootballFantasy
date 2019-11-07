import * as api_urls from "./api_urls";
import axios from "axios";

class ManageTeamApi {
    static async getMyTeam() {
        const token = localStorage.getItem("access_token");
        const config = {
            mode: "cors",
            headers:
                {
                    'Content-Type': 'application/json',
                    "Authorization": `Bearer ${token}`
                }
        }

        const response = await axios.get(
            api_urls.MANAGE_TEAM,
            config
        );
        return response;
    }

    static async getTransferablePlayers() {
        const token = localStorage.getItem("access_token");
        const config = {
            mode: "cors",
            headers:
                {
                    'Content-Type': 'application/json',
                    "Authorization": `Bearer ${token}`
                }
        }
        const response = await axios.get(
            api_urls.GET_TRANSFERABLE,
            config
        );
        return response;
    }


    static async sendTransferedPlayer(playerIn, playerOut) {
        const token = localStorage.getItem("access_token");
        const config =
            {
                mode: "cors",
                headers:
                    {
                        'Content-Type': 'application/json',
                        "Authorization": `Bearer ${token}`
                    }
            };
           const body = JSON.stringify(
               {
                   "player_in": {
                       "id" : playerIn.id,
                       "name" : playerIn.name
                   },
                   "player_out": {
                       "id" : playerOut.id,
                       "name" : playerOut.name
                   }
               }
           );
        const response = axios.post(
            api_urls.POST_TRANSFERABLE,
            body,
            config
        );
        return response;
    }
}

export default ManageTeamApi;