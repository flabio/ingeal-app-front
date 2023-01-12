import { createSlice } from "@reduxjs/toolkit";

export const characterSlice = createSlice({
  name: "character",
  initialState: {
    isLoadingCharacter: true,
    characters: [],
    activeCharacter: null,
    pagination: {
      limit: 0,
      page: 0,
      pages: 0,
      total: 0,
    },
  },
  reducers: {
    onSetActiveCharacter: (state, { payload }) => {
      state.activeCharacter = payload;
    },
    onLoadingCharacter: (state, { payload = [] }) => {
      state.isLoadingCharacter = false;
      // state.pagination.limit = payload.limit;
      // state.pagination.page = payload.page;
      // state.pagination.pages = payload.pages;
      // state.pagination.total = payload.total;
      state.pagination = payload.info;
      state.characters = payload.results;
    },
    // onLoguotRol: (state) => {
    //   (state.isLoadingRols = true), (state.rols = []), (state.activeRol = null);
    // },
  },
});

export const {
  onSetActiveCharacter,
  onLoadingCharacter,
  //onLoguotRol,
} = characterSlice.actions;
