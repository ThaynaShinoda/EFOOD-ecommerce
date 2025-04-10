import styled from 'styled-components';
import { colors } from '../../styles/styles';

export const Container = styled.footer`
  background-color: ${colors.peach_light};
  color: ${colors.soft_red};
  padding: 2.5rem 1rem;

  .wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  p {
    text-align: center;
    font-size: 0.625rem;
    max-width: 30rem;
  }
`;

export const SocialMedia = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 2rem;
  margin-bottom: 5rem;
`;
