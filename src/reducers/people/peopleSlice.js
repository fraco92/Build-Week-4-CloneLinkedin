import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  people: [],
  isLoading: false,
  isError: null,
};

export const getPeople = createAsyncThunk("people/GETPeople", async () => {
  try {
    const response = await axios.get(process.env.REACT_APP_API_URL_GET, {
      headers: { Authorization: `Bearer ${process.env.REACT_APP_API_KEY}` },
    });
    return await response.data.reverse().slice(0, 24);
  } catch (e) {
    console.error(e);
    throw e;
  }
});

const peopleSlice = createSlice({
  name: "people",
  initialState,
  reducers: {
    filterPeople: (state, action) => {
      const lowerCasePayload = action.payload.toLowerCase();
      state.people = state.people.filter((person) => {
        return (
          person.name.toLowerCase().includes(lowerCasePayload.toLowerCase()) ||
          person.surname.toLowerCase().includes(lowerCasePayload.toLowerCase())
        );
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPeople.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getPeople.fulfilled, (state, action) => {
        state.isLoading = false;
        state.people = action.payload;
      })
      .addCase(getPeople.rejected, (state) => {
        state.isLoading = false;
        state.isError = "Something went wrong, please try again later.";
      });
  },
});

export const allPeople = (state) => state.peopleData.people;
export const isAllPeopleLoading = (state) => state.peopleData.isLoading;
export const isAllPeopleError = (state) => state.peopleData.isError;
export const { filterPeople } = peopleSlice.actions;

export default peopleSlice.reducer;
