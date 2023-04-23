import React from 'react';
import styled from 'styled-components/macro';

import SHOES from '../../data';
import ShoeCard from '../ShoeCard';
import Spacer from '../Spacer'

const ShoeGrid = () => {
  return (
    <Wrapper>
      {SHOES.map((shoe) => (
        <div>
          <ShoeCard key={shoe.slug} {...shoe} />
          <Spacer size={24} />
        </div>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  gap: 36px;
  flex-wrap: wrap;

  & > * {
    flex: 1 1 340px;
    max-width: 680px;
  }
`;

export default ShoeGrid;
