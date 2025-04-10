import styled from 'styled-components';
import { colors } from '../../styles/styles';
import { Props } from '.';

export const ButtonContainer = styled.button<Props>`
  background-color: ${(props) =>
    props.bgcolor === 'peach' ? colors.peach_light : colors.soft_red};
  color: ${(props) =>
    props.bgcolor === 'peach' ? colors.soft_red : colors.peach_light};
  border: none;
  font-size: 0.875rem;
  font-weight: bold;
  padding: 0.25rem 0.375rem;
  cursor: pointer;
  display: inline-block;
`;
