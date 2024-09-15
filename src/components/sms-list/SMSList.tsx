import { useEffect, useState } from 'react'
import { supabase } from '../../bd/supabaseClient'
import { Container, SMSListContainer, TextWrapper } from './SMSList.styled'
import { TiDelete } from 'react-icons/ti'
import { toast } from 'sonner'

export interface Message {
  id: number // Asumiendo que tienes un ID en tu tabla
  content: string // La propiedad content que estás usando
  created_at?: string // Si tienes un campo created_at
}

const SMSList = () => {
  const [messages, setMessages] = useState<Message[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const { data, error } = await supabase
          .from('messages')
          .select('*')
          .order('created_at', { ascending: true })

        if (error) {
          throw error
        }

        setMessages(data as Message[])
      } catch (err) {
        console.error('Error al obtener mensajes:', err)
      } finally {
        setLoading(false) // Finalizar estado de carga
      }
    }

    fetchMessages()
  }, [messages])

  const handleDelete = async (id: number) => {
    try {
      const { error } = await supabase.from('messages').delete().match({ id })

      if (error) {
        throw error
      }

      // Actualizar el estado eliminando el mensaje
      setMessages((prevMessages) => prevMessages.filter((msg) => msg.id !== id))
      toast.success('Mensaje eliminado correctamente')
    } catch (err) {
      console.error('Error al eliminar mensaje:', err)
    }
  }

  // Mostrar un mensaje de carga mientras se obtienen los datos
  if (loading) {
    return <p>Cargando mensajes...</p> // Aquí podrías agregar un spinner si quieres
  }

  return (
    <div>
      <p
        style={{
          position: 'absolute',
          top: '.5rem',
          left: '-25rem',
          fontSize: '2rem',
        }}
      >
        Supase SMS List
      </p>
      <Container>
        {messages.length > 0 ? (
          messages.map((message, idx) => (
            <SMSListContainer>
              <span>
                {/*{idx + 1} -{' '} */}
                {message.created_at
                  ? new Date(message.created_at).toLocaleDateString('en-US', {
                      weekday: 'short', // Hay más opciones disponibles como: short, narrow, long y numeric
                      //year: 'numeric',
                      //month: 'long',
                      day: 'numeric',
                    })
                  : 'Fecha no disponible'}
              </span>
              <TextWrapper>
                <p className="" key={message.id}>
                  {message.content}
                </p>
                <p>
                  {message.created_at
                    ? new Date(message.created_at).toLocaleTimeString('en-US', {
                        hour: '2-digit',
                        minute: '2-digit',
                      })
                    : 'Hora no disponible'}
                </p>
              </TextWrapper>

              <TiDelete
                style={{ cursor: 'pointer' }}
                onClick={() => handleDelete(message.id)}
                size={55}
              />
            </SMSListContainer>
          ))
        ) : (
          <p>No hay mensajes disponibles</p>
        )}
      </Container>
    </div>
  )
}

export default SMSList
