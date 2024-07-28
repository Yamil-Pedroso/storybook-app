// src/components/Button.tsx
import React from 'react'
import { StyledButton } from './Button.styled'

export interface ButtonProps {
  label: string
  onClick?: () => void
  primary?: boolean
  size?: 'small' | 'medium' | 'large'
  disabled?: boolean
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  primary = false,
  size = 'medium',
  disabled = false,
}) => {
  return (
    <StyledButton
      onClick={onClick}
      primary={primary}
      size={size}
      disabled={disabled}
    >
      {label}
    </StyledButton>
  )
}

export default Button
