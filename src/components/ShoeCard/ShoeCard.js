import React from 'react';
import styled from 'styled-components/macro';

import { COLORS, WEIGHTS } from '../../constants';
import { formatPrice, pluralize, isNewShoe } from '../../utils';
import Spacer from '../Spacer';

const ShoeCard = ({
  slug,
  name,
  imageSrc,
  price,
  salePrice,
  releaseDate,
  numOfColors,
}) => {
  // There are 3 variants possible, based on the props:
  //   - new-release
  //   - on-sale
  //   - default
  //
  // Any shoe released in the last month will be considered
  // `new-release`. Any shoe with a `salePrice` will be
  // on-sale. In theory, it is possible for a shoe to be
  // both on-sale and new-release, but in this case, `on-sale`
  // will triumph and be the variant used.
  // prettier-ignore
  const variant = typeof salePrice === 'number'
    ? 'on-sale'
    : isNewShoe(releaseDate)
      ? 'new-release'
      : 'default'

  const badge = variant !== 'default'
    ? <Badge variant={variant} />
    : null

  const salePriceMarkup = variant === 'on-sale'
    ? <SalePrice>{formatPrice(price)}</SalePrice>
    : null;

  const priceMarkup = variant === 'on-sale'
    ? <SlashedPrice>{formatPrice(price)}</SlashedPrice>
    : <Price>{formatPrice(price)}</Price>

  return (
    <Link href={`/shoe/${slug}`}>
      <Wrapper>
        <ImageWrapper>
          <Image alt="" src={imageSrc} />
          {badge}
        </ImageWrapper>
        <Spacer size={12} />
        <Row>
          <Name>{name}</Name>
          {priceMarkup}
        </Row>
        <Row>
          <ColorInfo>{pluralize('Color', numOfColors)}</ColorInfo>
          {salePriceMarkup}
        </Row>
      </Wrapper>
    </Link>
  );
};

const BaseBadge = styled.span`
  padding: 7px 9px 9px 11px;
  border-radius: 2px;

  position: absolute;
  top: 12px;
  right: -4px;

  color: ${COLORS.white};
  font-weight: ${WEIGHTS.semibold};
`

const NewReleaseBadge = () => {
  const Component = styled(BaseBadge)`
    background-color: ${COLORS.secondary};
  `

  return <Component>Just Released!</Component>
}

const OnSaleBadge = () => {
  const Component = styled(BaseBadge)`
    background-color: ${COLORS.primary};
  `

  return <Component>Sale</Component>
}

const BADGE_VARIANTS = {
  'on-sale': OnSaleBadge,
  'new-release': NewReleaseBadge,
}

const Badge = ({ variant }) => {
  const Variant = BADGE_VARIANTS[variant];
  if (!Variant) throw new Error(`Unmapped variant ${variant}`)

  return <Variant />
}

const Link = styled.a`
  text-decoration: none;
  color: inherit;
`;

const Wrapper = styled.article``;

const ImageWrapper = styled.div`
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
`;

const Row = styled.div`
  font-size: 1rem;
  display: flex;
  justify-content: space-between;
`;

const Name = styled.h3`
  font-weight: ${WEIGHTS.medium};
  color: ${COLORS.gray[900]};
`;

const Price = styled.span`
  font-weight: ${WEIGHTS.normal};
`;

const SlashedPrice = styled(Price)`
  color: ${COLORS.gray[700]};
  text-decoration: line-through;
`

const ColorInfo = styled.p`
  color: ${COLORS.gray[700]};
`;

const SalePrice = styled.span`
  font-weight: ${WEIGHTS.medium};
  color: ${COLORS.primary};
`;

export default ShoeCard;
