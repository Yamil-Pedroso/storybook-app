import styled from 'styled-components';

interface ButtonProps {
  primary?: boolean;
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
}

export const StyledButton = styled.button<ButtonProps>`
  font-family: Arial, sans-serif;
  border: none;
  cursor: pointer;
  padding: 10px 20px;
  margin: 5px;
  color: white;
  border-radius: .5rem;
  background-color: ${({ primary }) => (primary ? '#007bff' : '#6c757d')};
  font-size: ${({ size }) => {
    switch (size) {
      case 'small':
        return '12px';
      case 'large':
        return '20px';
      default:
        return '16px';
    }
  }};
  padding: ${({ size }) => {
    switch (size) {
      case 'small':
        return '5px 10px';
      case 'large':
        return '15px 30px';
      default:
        return '10px 20px';
    }
  }};
  &:disabled {
    background-color: #c0c0c0;
    cursor: not-allowed;
  }
`;
