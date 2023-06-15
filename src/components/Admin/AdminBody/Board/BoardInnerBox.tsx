import Styled from './styles';
import CheckBox from '@components/Admin/Common/InnerBody/InnerBox/CheckBox';

interface PropsList {
  id: string;
  title: string;
  like: number;
  buyer: string;
  commentTitle: string;
  comment: string;
}
const BoardInnerBox = (props: PropsList) => {
  const { id, title, like, buyer, commentTitle, comment } = props;
  let stars = null;
  const filledStar = <Styled.Star />;
  const blankStar = <Styled.BlankStar />;
  if (like == 1) {
    stars = (
      <Styled.StarWrapper>
        {filledStar}
        {blankStar}
        {blankStar}
        {blankStar}
        {blankStar}
      </Styled.StarWrapper>
    );
  } else if (like == 2) {
    stars = (
      <Styled.StarWrapper>
        {filledStar}
        {filledStar}
        {blankStar}
        {blankStar}
        {blankStar}
      </Styled.StarWrapper>
    );
  } else if (like == 3) {
    stars = (
      <Styled.StarWrapper>
        {filledStar}
        {filledStar}
        {filledStar}
        {blankStar}
        {blankStar}
      </Styled.StarWrapper>
    );
  } else if (like == 4) {
    stars = (
      <Styled.StarWrapper>
        {filledStar}
        {filledStar}
        {filledStar}
        {filledStar}
        {blankStar}
      </Styled.StarWrapper>
    );
  } else {
    stars = (
      <Styled.StarWrapper>
        {filledStar}
        {filledStar}
        {filledStar}
        {filledStar}
        {filledStar}
      </Styled.StarWrapper>
    );
  }
  //위 방식과 밑의 방식 중에서 고민 중
  // else if (like == 4) {
  //   stars = '⭐⭐⭐⭐☆';
  // }

  return (
    <>
      <Styled.InnerBoxWrapper>
        <Styled.InnerBox>
          <Styled.Title>{title}</Styled.Title>
          <Styled.Content>구매자: {buyer}</Styled.Content>
          <Styled.Content>{stars}</Styled.Content>
          <Styled.Content>"{commentTitle}"</Styled.Content>
          <Styled.Content>{comment}</Styled.Content>
        </Styled.InnerBox>
        <CheckBox id={id} />
      </Styled.InnerBoxWrapper>
    </>
  );
};

export default BoardInnerBox;
