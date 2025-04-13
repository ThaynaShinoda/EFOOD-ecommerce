import styled from 'styled-components';
import { colors } from '../../styles/styles';

export const BannerRestaurant = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
  height: 280px;

  img {
    display: block;
    width: 100%;
    max-height: 280px;
    height: 100%;
    object-fit: cover;
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.5);
  }

  h2 {
    position: absolute;
    top: 215px;
    z-index: 1;

    color: ${colors.white};
    font-size: 2rem;
    font-weight: bold;
  }

  span {
    z-index: 1;
    color: ${colors.white};
    font-size: 2rem;
    font-weight: 100;
  }
`;

export const Infos = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  position: absolute;
  top: 25px;
`;

export const List = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 2rem;
  row-gap: 2rem;
  margin-top: 3.5rem;
  margin-bottom: 7.5rem;

  @media(max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;
