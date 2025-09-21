import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FeedbackSliceState } from "./types"

interface FeedbackState {
  like: number;
  dislike: number;
}

const initialState: FeedbackState = {
  like: 0,
  dislike: 0,
};

export const feedbackSlice = createSlice({
  name: 'FEEDBACK',
  initialState,
  reducers: {
    incrementLike(state) {
      state.like += 1;
    },
    incrementDislike(state) {
      state.dislike += 1;
    },
    resetFeedback(state) {
      state.like = 0;
      state.dislike = 0;
    },
  },
});

export const { incrementLike, incrementDislike, resetFeedback } = feedbackSlice.actions;
export default feedbackSlice.reducer;