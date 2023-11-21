import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

export type Movie = {
  id: string;
  title: string;
  releaseYear: string;
};

type DataState = {
  data: Movie[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
};

const initialState: DataState = {
  data: [],
  status: 'idle',
  error: null,
};

export const fetchMovies = createAsyncThunk('movies/fetchMovies', async () => {
  const response = await fetch('https://reactnative.dev/movies.json');
  const json = await response.json();
  return json.movies;
});

const dataSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchMovies.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || null;
      });
  },
});

export default dataSlice.reducer;
