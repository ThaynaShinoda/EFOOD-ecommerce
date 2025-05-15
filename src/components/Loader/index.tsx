import { BeatLoader } from 'react-spinners';
import { colors } from '../../styles/styles';
import { Container } from './styles';

export function Loader() {
  return (
    <Container>
      <BeatLoader color={colors.soft_red} />
    </Container>
  );
}
