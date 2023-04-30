import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store/store";

interface SearchTermState {
  term: string;
}

const initialState: SearchTermState = {
  term: "",
};

export const searchTermSlice = createSlice({
  name: "searchTerm",
  initialState,
  reducers: {
    setSearchTerm: (state, action: PayloadAction<string>) => {
      state.term = action.payload;
    },
  },
});

export const { setSearchTerm } = searchTermSlice.actions;
export const selectSearchTerm = (state: RootState) => state.searchTerm.term;
export default searchTermSlice.reducer;
