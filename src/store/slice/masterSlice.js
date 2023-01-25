import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { API_KEY } from "@env"

const initialState = {
  value: 0,
  users: [],
  repos: [],
  oneUrl: ''
}

export const masterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
    setUsers: (state, action) => {
      state.users = action.payload
    },
    setRepos: (state, action) => {
      const newItems = state?.users?.items?.map((item) => {
        console.log(item)
        if (item?.login === action?.payload.name) {
          return { ...item, repo: action.payload.data }
        }
        return { ...item }
      })
      const newUsers = { ...state.users, items: newItems }
      state.users = newUsers
    },
  },
})

export async function searchCharacters(search) {

  try {
    const res = await fetch(
      `https://api.github.com/search/users?q=${search}&per_page=5`,
      {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${API_KEY}`,
          "X-GitHub-Api-Version": "2022-11-28",
          "Accept": "application/vnd.github+json"
        }
      }
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export const getRepo = (repoLink, name) => async dispatch => {
  try {

    const res = await fetch(repoLink)
    const data = await res.json();
    dispatch(setRepos({ data, name }))
  } catch (error) {
    console.log(error)
  }
}


// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, setUsers, setRepos, setOneUrl } = masterSlice.actions

export default masterSlice.reducer