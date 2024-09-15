import styled from 'styled-components'

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;
`

export const FormLabel = styled.label`
  font-size: 1rem;
`

export const FormInput = styled.input`
  padding: 0.5rem;
  font-size: 1rem;
`

export const FormButton = styled.button`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
`

export const FormError = styled.span`
  color: red;
  font-size: 0.875rem;
`
