import { useDispatch, useSelector } from 'react-redux';
import { incrementLike, incrementDislike, resetFeedback } from 'store/redux/feedback/feedbackSlice';
import { RootState } from 'store/store';
import Feedback from 'components/Feedback/Feedback';
import { PageWrapper } from './styles';

function Homework_16() {
  const dispatch = useDispatch();
  const { like, dislike } = useSelector((state: RootState) => state.FEEDBACK);

  const onLike = () => dispatch(incrementLike());
  const onDislike = () => dispatch(incrementDislike());
  const resetResults = () => dispatch(resetFeedback());

  return (
    <PageWrapper>
      <Feedback
        like={like}
        dislike={dislike}
        onDislike={onDislike}
        onLike={onLike}
        resetResults={resetResults}
      />
    </PageWrapper>
  );
}

export default Homework_16;

