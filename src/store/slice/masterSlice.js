import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  value: 0,
  users: [],
  repos: []
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
      console.log(action, "<<<< di sini bro")
      state.users = action.payload
    },
    setRepos: (state, action) => {
      console.log(action?.payload?.length, "<<<<<< otw masukin")
    }
  },
})

export async function searchCharacters(search) {
  try {
    const res = await fetch(
      `https://api.github.com/search/users?q=${search}&per_page=5`,
      {
        method: "GET",
        headers: {
          "Authorization": "Bearer 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",
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

export const getRepo = (repoLink) => async dispatch => {
  try {
    console.log(repoLink, ">>> in di reducer")
    const res = await fetch(repoLink)
    const data = await res.json();
    console.log(data.length)
    dispatch(setRepos(data))
  } catch (error) {

  }
}


// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, setUsers, setRepos } = masterSlice.actions

export default masterSlice.reducer