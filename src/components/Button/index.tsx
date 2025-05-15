import { ButtonContainer } from './styles';
export type Props = {
  bgcolor?: 'red' | 'peach';
  children: string;
  onClick?: () => void;
  type: 'button' | 'submit';
  disabled?: boolean;
};

export function Button({
  bgcolor = 'peach',
  children,
  onClick,
  type,
  disabled,
}: Props) {
  return (
    <ButtonContainer
      disabled={disabled}
      type={type}
      bgcolor={bgcolor}
      onClick={onClick}
    >
      {children}
    </ButtonContainer>
  );
}
