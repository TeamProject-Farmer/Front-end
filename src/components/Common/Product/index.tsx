import Styled from './styles';
import Icon from '../Icon';
import { IProductProps } from 'src/types/common/types';

const Product = (props: IProductProps) => {
  const {
    thumbnailImg,
    name,
    price,
    discountRate,
    reviewCount,
    averageStarRating,
  } = props;
  return (
    <Styled.Wrapper>
      <Styled.Img src={thumbnailImg} alt={name} />
      <Styled.Content>
        <Styled.Title>{name}</Styled.Title>
        <Styled.PriceBox>
          <Styled.Discount>{discountRate}%</Styled.Discount>
          <Styled.Price>{price}</Styled.Price>
        </Styled.PriceBox>
        <Styled.ReviewBox>
          <Styled.Star>
            <Icon name="star" width={16} height={15} />
            {averageStarRating}
          </Styled.Star>
          <Styled.Review>리뷰 {reviewCount}</Styled.Review>
        </Styled.ReviewBox>
        <Styled.EventBox>
          {discountRate && <Styled.SpecialPrice>특가상품</Styled.SpecialPrice>}
        </Styled.EventBox>
        <Styled.Title />
      </Styled.Content>
    </Styled.Wrapper>
  );
};

export default Product;
