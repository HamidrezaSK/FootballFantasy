import * as types from "../_actions/types";
const initialState = {
    visibleModal: false,
    localAllow : true,
}
export default function (state = initialState, action) {
    switch (action.type) {
        case types.manageTeam_action_types.GET_MY_TEAM_SUCCESS :
            return {...state, squad: action.payload};

        case types.manageTeam_action_types.SET_FIRST_SELECTED_SUCCESS :
            return {...state, firstSelected: action.payload};

        case types.manageTeam_action_types.SET_NEW_TEAM_SUCCESS :
            return {...state , squad: action.payload};

        case types.manageTeam_action_types.TOGGLE_MODAL_SUCCESS :
            return {...state, visibleModal: action.payload};

        case types.manageTeam_action_types.LOCAL_ALLOW_SUCCESS :
            return {...state, localAllow: action.payload};

        case types.manageTeam_action_types.GET_MY_TEAM_TRANSFER_SUCCESS:
            return {...state, myTeamForTransfer : action.payload};

        case types.manageTeam_action_types.GET_TRANSFERABLE_PLAYERS_SUCCESS :
            return  {...state, transferablePlayers : action.payload};

        case types.manageTeam_action_types.ENABLE_TRANSFER_TABLE:
            return {...state, enableTable : action.payload};

        case types.manageTeam_action_types.SELECT_SECOND_TRANSFER_SUCCESS :
            return {...state, secondSelectedTransfer: action.payload};

        case types.manageTeam_action_types.ALLOWED_TO_TRANSFER_SUCCESS :
            return {...state, allowedToTransfer : action.payload};

        case types.manageTeam_action_types.TRANSFER_ERROR_SUCCESS :
            return {...state, transferError : action.payload};
        default :
            return state;
    }
}