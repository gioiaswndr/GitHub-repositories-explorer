import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { API_KEY } from "@env"

const initialState = {
  value: 0,
  users: undefined,
  repos: [],
}

export const masterSlice = createSlice({
  name: 'master',
  initialState,
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload
    },
    setRepos: (state, action) => {
      const newItems = state?.users?.items?.map((item) => {
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
export const { setUsers, setRepos } = masterSlice.actions

export default masterSlice.reducer