import React, { useState, useEffect } from 'react'
import { FormContainer, FormLabel, FormButton } from './Form.styled'
import { toast } from 'sonner'
import { supabase } from '../../bd/supabaseClient'

export interface FormProps {
  label: string
  placeholder: string
  error?: string
  onSubmit?: () => void
  btnText?: string
}

const Form: React.FC<FormProps> = ({ label, placeholder, btnText }) => {
  const [inputValue, setInputValue] = useState<string>('') // Estado para almacenar el valor del input
  const [messages, setMessages] = useState<string[]>([]) // Estado para almacenar todos los mensajes enviados

  useEffect(() => {
    const checkUser = async () => {
      const { data, error } = await supabase.auth.getUser()
      if (data?.user) {
        console.log('Usuario autenticado:', data.user)
      } else {
        console.log('Usuario no autenticado')
      }
    }

    checkUser()
  }, [])

  // Función para obtener los mensajes desde Supabase
  //useEffect(() => {
  //  fetchMessages()
  //}, [])
  //
  //const fetchMessages = async () => {
  //  const { data, error } = await supabase
  //    .from('messages')
  //    .select('*')
  //    .order('created_at', { ascending: true })
  //  if (error) {
  //    console.error('Error al obtener mensajes:', error.message)
  //  } else {
  //    // Actualiza el estado con los mensajes desde Supabase
  //    setMessages(data.map((msg: any) => msg.content))
  //  }
  //}

  // Función para manejar el clic en el botón y enviar el mensaje
  const handleOnclick = async () => {
    if (inputValue.trim() !== '') {
      try {
        // Guardar el mensaje en Supabase
        const { error, data } = await supabase
          .from('messages')
          .insert([{ content: inputValue }])

        if (error) {
          console.error('Error al insertar mensaje:', error)
        } else {
          console.log('Mensaje insertado:', data) // Debugging
          setMessages([...messages, inputValue]) // Actualiza el estado local
          toast.success(inputValue) // Muestra el toast de éxito
          setInputValue('') // Limpia el input
        }
      } catch (err) {
        console.error('Error inesperado:', err) // Imprime el error inesperado
      }
    }
  }

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value) // Actualiza el estado con el valor del input
  }

  return (
    <FormContainer>
      <FormLabel>{label}</FormLabel>
      <input
        type="text"
        placeholder={placeholder}
        value={inputValue} // Vincula el input con el estado
        onChange={onChange}
      />
      <FormButton onClick={handleOnclick} type="button">
        {btnText}
      </FormButton>

      {/* Muestra todos los mensajes enviados */}
      <div>
        {messages.map((message, index) => (
          <p key={index}>
            Mensaje {index + 1}: {message}
          </p>
        ))}
      </div>
    </FormContainer>
  )
}

export default Form
