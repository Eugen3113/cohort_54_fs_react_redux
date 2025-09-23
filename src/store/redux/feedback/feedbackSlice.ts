import { createAppSlice } from "store/createAppSlice"
import { FeedbackState } from "./types"


const feedbackInitialState: FeedbackState = {
  like: 0,
  dislike: 0,
}

export const feedbackSlice = createAppSlice({
  name: "FEEDBACK",
  initialState: feedbackInitialState,
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
      // так проще
    // resetFeedback: create.reducer(() => feedbackInitialState),
  }),
})

export const { incrementLike, incrementDislike, resetFeedback } =
  feedbackSlice.actions
export default feedbackSlice.reducer
