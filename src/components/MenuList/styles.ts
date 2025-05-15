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

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    column-gap: 0;
  }
`;

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: none;
  align-items: center;
  justify-content: center;

  &.visible {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.73);
  }
`;

export const ModalContent = styled.div`
  max-width: 960px;
  position: relative;
  z-index: 1;
  display: flex;
  gap: 1.5rem;
  background-color: ${colors.soft_red};
  color: ${colors.peach_light};
  padding: 2rem;

  > img {
    display: block;
    max-width: 280px;
    max-height: 280px;
    width: 280px;
    height: 280px;
    object-fit: cover;

    @media (max-width: 768px) {
      margin: 0 auto;
    }
  }

  h3 {
    font-size: 1.125rem;
    font-weight: 900;
  }

  p {
    margin: 1rem 0;
  }

  .closeButton {
    position: absolute;
    top: 0;
    right: 0;
    margin: 1rem;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const CartButton = styled.button`
  background-color: ${colors.peach_light};
  color: ${colors.soft_red};
  border: none;
  padding: 4px 7px;
  font-weight: 700;
  text-decoration: none;
  text-align: center;
  font-size: 14px;
  cursor: pointer;
`;
