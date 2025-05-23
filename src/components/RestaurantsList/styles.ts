import styled from 'styled-components';

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 5rem;
  row-gap: 3rem;
  margin-top: 5rem;
  margin-bottom: 7.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
