import { ButtonContainer } from './styles';
export type Props = {
  bgcolor?: 'red' | 'peach';
  children: string;
};

export function Button({ bgcolor = 'peach', children }: Props) {
  return <ButtonContainer bgcolor={bgcolor}>{children}</ButtonContainer>;
}
