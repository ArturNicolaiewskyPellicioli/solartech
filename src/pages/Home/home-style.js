import styled from 'styled-components'

export const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 90vh;

    h1 {
        color: #18A49F;
        margin: 2rem;
        margin-top: 6rem;
        font-family: inter;
    }

    input {
        width: 40%;
        min-width: 225px;
        border-radius: 4px;
        border: 1px solid #18A49F;
        padding: 0.8rem;
        box-shadow: 0 1.5px 2px 0 rgba(0, 0, 0, 0.25);
        margin-bottom: 2rem;
    }

    div {
        width: 60vw;
        background-color: #EEF3F2;
        padding: 1rem 2rem;
        border-radius: 4px;
        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.25);

        margin: 0.75rem;

        display: flex;
        justify-content: space-between;
        align-items: center;
        cursor: pointer;

        font-size: 22px;
        font-family: inter;

        span:last-child {
            font-size: 18px;
        }
    }

     div:last-child{
         
        margin-bottom: 2rem;
    }
`