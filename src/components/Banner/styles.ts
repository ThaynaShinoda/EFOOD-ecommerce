import styled from 'styled-components';
import { colors } from '../../styles/styles';

export const Image = styled.div`
  width: 100%;
  height: 22.5rem;
  text-align: center;

  .wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  img {
    margin-top: 2.5rem;
    margin-bottom: 8.265rem;
  }
`;

export const DescriptionBanner = styled.h1`
  max-width: 34rem;
  width: 100%;
  color: ${colors.soft_red};
  font-weight: 900;
  font-size: 2.25rem;

  @media(max-width: 768px) {
    font-size: 2rem;
  }
`;
