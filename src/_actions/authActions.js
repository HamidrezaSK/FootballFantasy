// import React from 'react'
// import axios from 'axios'
import Login_page_api from "../_api/authApi"
import * as acc from "./types"

export const userSignInRequest = (credentials) => {
  return async function(dispatch){
      let response = await Login_page_api.login(credentials)
      localStorage.setItem("access_token", response.data.access_token)
      localStorage.setItem("refresh_token", response.data.refresh_token)
      dispatch(loginUser(response))
  }
}

export const userSignUpRequest = (credentials) => {
  return async function(dispatch){
      let response = await Login_page_api.signup(credentials) 
      localStorage.setItem("access_token", response.data.access_token)
      localStorage.setItem("refresh_token", response.data.refresh_token)
      dispatch(loginUser(response))
  }
}

const loginUser = userObj => (
  
  {
    type: acc.auth_action_types.LOGIN_SUCCESS,
    payload: userObj,
    logged_in : true
})

