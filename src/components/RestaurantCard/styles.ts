import styled from 'styled-components';
import { colors } from '../../styles/styles';

export const Card = styled.div`
  background-color: ${colors.white};
  color: ${colors.soft_red};
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  img {
    max-width: 472px;
    max-height: 217px;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Container = styled.div`
  padding: 0.5rem;
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h2 {
    font-size: 1.125rem;
    font-weight: bold;
  }

  span {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`;

export const Infos = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
`;

export const Description = styled.p`
  display: block;
  padding: 1rem 0;
`;
