import styled from 'styled-components';
import { colors } from '../../styles/styles';
import { ButtonContainer } from '../Button/styles';

export const Card = styled.div`
  background-color: ${colors.soft_red};
  color: ${colors.peach_light};
  padding: 0.5rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ${ButtonContainer} {
    display: block;
    width: 100%;
  }

  img {
    max-width: 304px;
    max-height: 167px;
    width: 100%;
    height: 100%;
    object-fit: cover;
    margin: 0 auto;

    @media(max-width: 768px) {
      max-width: 100%;
    }
  }
`;
export const InfosContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ItemName = styled.h3`
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
`;

export const Description = styled.p`
  margin-bottom: 0.5rem;
`;
