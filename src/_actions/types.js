export const auth_action_types = {
    LOGIN_SUCCESS: 'LOGIN_SUCCESS',
    LOGIN_FAILURE: 'LOGIN_FAILURE',
    LOGOUT_SUCCESS: 'LOGOUT_SUCCESS'
}
export const picksquad_action_types = {
    SET_PLAYERS_SUCCESS: 'SET_PLAYERS_SUCCESS'
}


export const manageTeam_action_types = {
    GET_MY_TEAM_SUCCESS: "GET_MY_TEAM_SUCCESS",
    SET_FIRST_SELECTED_SUCCESS: "SET_FIRST_SELECTED_SUCCESS",
    SET_NEW_TEAM_SUCCESS: "SET_NEW_TEAM_SUCCESS",
    TOGGLE_MODAL_SUCCESS: "TOGGLE_MODAL_SUCCESS",
    LOCAL_ALLOW_SUCCESS: "LOCAL_ALLOW_SUCCESS",
    GET_MY_TEAM_TRANSFER_SUCCESS: "GET_MY_TEAM_TRANSFER_SUCCESS",
    GET_TRANSFERABLE_PLAYERS_SUCCESS: "GET_TRANSFERABLE_PLAYERS_SUCCESS",
    ENABLE_TRANSFER_TABLE: "ENABLE_TRANSFER_TABLE",
    SELECT_FIRST_TRANSFER_SUCCESS: "SELECT_FIRST_TRANSFER_SUCCESS",
    SELECT_SECOND_TRANSFER_SUCCESS: "SELECT_SECOND_TRANSFER",
    ALLOWED_TO_TRANSFER_SUCCESS: "ALLOWED_TO_TRANSFER_SUCCESS",
    TRANSFER_ERROR_SUCCESS: "TRANSFER_ERROR_SUCCESS",
    CHANGE_CAPTAIN_SUCCESS: "CHANGE_CAPTAIN_SUCCESS",
    SET_REMAINING_BUDGET_SUCCUSS: "SET_REMAINING_BUDGET_SUCCUSS",
}


export const position = {
    GOALKEEPER: "Goalkeeper",
    DEFENDER: "Defender",
    MIDFIELDER: "Midfielder",
    FORWARD: "Forward"
}


export const search_action_types = {
    GET_PLAYERS_SUCCESS: 'GET_PLAYERS_SUCCESS',
    GET_PLAYERS_FAILURE: 'GET_PLAYERS_FAILURE',
    SET_PLAYERS_STATUS_SUCCESS: 'SET_PLAYERS_STATUS_SUCCESS',
    SET_PLAYERS_CLUBS_SUCCESS: 'SET_PLAYERS_CLUBS_SUCCESS',
    SET_PLAYERS_POSITIONS_SUCCESS: 'SET_PLAYERS_POSITIONS_SUCCESS',
    SET_PLAYERS_PRICE_SUCCESS: 'SET_PLAYERS_PRICE_SUCCESS',
    GET_CLUBS_SUCCESS: "GET_CLUBS_SUCCESS",
    SET_NAME_SUCCESS: "SET_NAME_SUCCESS",
    SET_SORTED_PLAYERS_SUCCESS: "SET_SORTED_PLAYERS_SUCCESS",
    SET_SORT_SUCCESS: "SET_SORT_SUCCESS",
    SET_LISTS_SUCCESS: "SET_LISTS_SUCCESS",

}


export const dashboard_action_types = {
    GET_COMPETITIONS_SUCCESS: "GET_COMPETITIONS_SUCCESS",
    GET_INFORMATION_SUCCESS: "GET_INFORMATION_SUCCESS",
    GET_INFORMATION_FAILED: "GET_INFORMATION_FAILED",
    SET_CURRENT_COMPETITION_SUCCESS: "SET_CURRENT_COMPETITION_SUCCESS",
};

export const weeklygames_action_types = {
    GET_GAMES_SUCCESS: 'GET_GAMES_SUCCESS',
    GET_GAMES_FAILURE: 'GET_GAMES_FAILURE',
    CLEAR_REDUCER_SUCCESS : "CLEAR_REDUCER_SUCCESS",
    SET_SELECTED_GAME_SUCCESS : "SET_SELECTED_GAME_SUCCESS",
    SET_TOGGLE_MODAL_SUCCESS : "SET_TOGGLE_MODAL_SUCCESS",
}


export const statistics_action_types = {
    GET_PLAYER_STATISTICS_SUCCESS : "GET_PLAYER_STATISTICS_SUCCESS",
};

export const gamedetail_action_types = {
    GET_GAME_DETAIL_SUCCESS : "GET_GAME_DETAIL_SUCCESS",
    GET_GAME_DETAIL_FAILURE : "GET_GAME_DETAIL_FAILURE",
    GAME_DETAIL_CLEAR_REDUCER_SUCCESS : "GAME_DETAIL_CLEAR_REDUCER_SUCCESS",
}

export const cards_action_types = {
    GET_ALL_CARDS_SUCCESS : "GET_ALL_CARDS_SUCCESS",
    GET_ALL_CARDS_FAILED : "GET_ALL_CARDS_FAILED",
    FIND_ACTIVE_CARD_SUCCESS : "FIND_ACTIVE_CARD_SUCCESS"
}

export const leaderboard_action_types = {
    GET_USERS_SUCCESS : "GET_USERS_SUCCESS",
    GET_USERS_FAILURE : "GET_USERS_FAILURE",
    CLEAR_LEADERBOARD_REDUCER_SUCCESS : "CLEAR_LEADERBOARD_REDUCER_SUCCESS",
}