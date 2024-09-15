
import styled, { createGlobalStyle } from 'styled-components';

// Global styles for scrollbars
export const GlobalStyle = createGlobalStyle`
  /* Estilos globales para la barra de desplazamiento */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #2a2a2a;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: #555;
  }

  ::-webkit-scrollbar-track {
    background-color: #f1f1f1;
  }
`;

export const GameListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem;
  padding: 1rem;
  position: absolute;
  top: 0;
  right: -35rem;

    h1 {
        text-align: center;
        margin-bottom: 1rem;
    }

    .games-wrapper {
        padding: 2rem;
        margin: 0;
        overflow-y: auto;
        height: 40rem;
        
      .games-content {
          padding: 1rem;

          .img-wrapper {
                position: relative;
              .del-icon {
                  position: absolute;
                  top: -1.7rem;
                  right: 3.4rem;
                  font-size: 2rem;
                  color: gray;
                  cursor: pointer;
                  transition: 0.3s;

                    &:hover {
                        color: green;
                    }
              }

          }


          .onSale-wrapper {
                width: 4rem;
                height: 4rem;
                border-radius: 50%;
          }
         
        img {
            width: 70%;
            height: 15rem;
            object-fit: cover;
            background-position: center;
            background-size: cover;
            border-radius: 5px;
            margin-bottom: 1rem;
        }
        
        .content {
            background-color: #f3f4f6;
            transition: 0.3s;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
            border-radius: 5px;
            padding: 1rem;
            color: #202020;
            font-weight: 600;

            p {
                margin: 0.5rem 0;
            }

            &:hover {
                transform: translateY(-5px);
                box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
            }
    }
    }
    }
`;