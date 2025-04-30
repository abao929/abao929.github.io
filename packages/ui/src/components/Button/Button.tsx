import styled from 'styled-components'

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary'
  size?: 'small' | 'medium' | 'large'
}

const StyledButton = styled.button<ButtonProps>`
  border-radius: 4px;
  border: none;
  cursor: pointer;
  font-family: inherit;
  transition: all 0.2s ease;

  /* Variant styles */
  background-color: ${(props) =>
    props.variant === 'secondary' ? '#e0e0e0' : '#0070f3'};
  color: ${(props) => (props.variant === 'secondary' ? '#000000' : '#ffffff')};

  /* Size styles */
  padding: ${(props) => {
    switch (props.size) {
      case 'small':
        return '8px 16px'
      case 'large':
        return '16px 32px'
      default:
        return '12px 24px'
    }
  }};
  font-size: ${(props) => {
    switch (props.size) {
      case 'small':
        return '14px'
      case 'large':
        return '18px'
      default:
        return '16px'
    }
  }};

  &:hover {
    opacity: 0.9;
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`

export const Button = ({ children, ...props }: ButtonProps) => {
  return <StyledButton {...props}>{children}</StyledButton>
}
