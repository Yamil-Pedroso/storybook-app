import styled from 'styled-components'

export const Container = styled.div`
    width: 25rem;
    height: 30rem;
    padding: 1rem 2rem;
    overflow-y: auto;
    position: absolute;
    top: 5rem;
    left: -30rem;
`

export const SMSListContainer = styled.div`
  padding: .7rem 2rem;
  background-color: #f3f4f6;
    border-radius: 1.5rem;
    margin: .3rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #202020;
    transition: transform .3s ease;

    // crear un hover
    &:hover {
       transform: scale(1.05);
    }

    span {
        display: flex;
        font-size: .8rem;
        font-weight: bold;
        color: #e7e7e7;
        padding: 1rem .5rem;
        background-color: #202020;
        border-radius: 1.5rem;
    }
`

export const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    * {
        margin: 0rem 0;
    }

    p:first-child {
        font-size: 1rem;
        font-weight: bold;
    }

    p:last-child {
        font-size: .8rem;
        color: #202020;
    }
`
