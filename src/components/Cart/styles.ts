import styled from 'styled-components';
import { ButtonContainer } from '../Button/styles';
import { colors } from '../../styles/styles';
import trash from '../../assets/images/trash_icon.png';

type Props = {
  maxWidth?: string;
  isVisible?: boolean;
};

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000000;
  opacity: 0.7;
`;

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`;

export const Sidebar = styled.aside<Props>`
  background-color: ${colors.soft_red};
  z-index: 1;
  padding: 2.5rem 1rem 0 1rem;
  max-width: 22.5rem;
  width: 100%;
  display: ${(props) => (props.isVisible ? 'block' : 'none')};

  ${ButtonContainer} {
    max-width: 100%;
    width: 100%;
  }

  .empty-cart {
    font-size: 0.875rem;
    line-height: 1.375rem;
    color: ${colors.white};
    text-align: center;
  }
`;

export const CartItem = styled.li`
  display: flex;
  background-color: ${colors.peach_light};
  padding: 0.5rem;
  margin: 1rem 0;
  position: relative;

  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    margin-right: 0.5rem;
  }

  h3 {
    color: ${colors.soft_red};
    font-weight: 900;
    font-size: 1.125rem;
  }

  span {
    display: block;
    color: ${colors.soft_red};
    font-weight: normal;
    font-size: 0.875rem;
    margin-top: 1rem;
  }

  button {
    background-image: url(${trash});
    width: 1rem;
    height: 1rem;
    border: none;
    background-color: transparent;
    cursor: pointer;
    position: absolute;
    bottom: 0.5rem;
    right: 0.5rem;
  }
`;

export const FinalPrice = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1.5rem 0 1rem 0;
  font-size: 0.875rem;
  font-weight: bold;
  color: ${colors.peach_light};
`;

export const Form = styled.form`
  button {
    width: 100%;
    margin-bottom: 0.5rem;
  }
  .magin-bottom {
    margin-bottom: 1.5rem;
  }
`;
export const Title = styled.h2`
  font-size: 1rem;
  font-weight: 700;
  color: ${colors.peach_light};
  margin-bottom: 1rem;
`;
export const InputGroup = styled.div<Props>`
  max-width: ${(props) => props.maxWidth || 'auto'};
  flex: auto;

  label {
    font-size: 0.875rem;
    font-weight: 700;
    color: ${colors.peach_light};
  }

  input {
    display: block;
    width: 100%;
    padding: 0.5rem;
    background-color: ${colors.peach_light};
    border: 1px solid ${colors.peach_light};
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    font-size: 0.875rem;
    font-weight: 700;
  }

  .error {
    border: 2px solid red;
  }
`;

export const InputGrouping = styled.div`
  display: flex;
  column-gap: 1.875rem;
`;

export const MessageContainer = styled.div`
  p {
    margin-bottom: 1.5rem;
    color: ${colors.peach_light};
    font-size: 0.875rem;
  }
`;
