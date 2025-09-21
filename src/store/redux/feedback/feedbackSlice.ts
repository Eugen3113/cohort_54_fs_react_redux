import { createAppSlice } from "store/createAppSlice"

interface FeedbackState {
  like: number
  dislike: number
}

const initialState: FeedbackState = {
  like: 0,
  dislike: 0,
}

export const feedbackSlice = createAppSlice({
  name: "FEEDBACK",
  initialState,
  reducers: create => ({
    incrementLike: create.reducer((state: FeedbackState) => {
      state.like += 1
    }),
    incrementDislike: create.reducer((state: FeedbackState) => {
      state.dislike += 1
    }),
    resetFeedback: create.reducer((state: FeedbackState) => {
      state.like = 0
      state.dislike = 0
    }),
  }),
})

export const { incrementLike, incrementDislike, resetFeedback } =
  feedbackSlice.actions
export default feedbackSlice.reducer
