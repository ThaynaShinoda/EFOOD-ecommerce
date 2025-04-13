import styled from 'styled-components';
import { colors } from '../../styles/styles';

export const Image = styled.div`
  width: 100%;
  height: 10.125rem;
`;

export const Headercontainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 2.5rem;
  font-size: 1.125rem;
  font-weight: 900;
  color: ${colors.soft_red};
  column-gap: 0.5rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  h2 {
    font-size: 1.125rem;
    font-weight: 900;

    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }

  a {
    color: ${colors.soft_red};
    text-decoration: none;
  }
`;
