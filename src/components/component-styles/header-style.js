import styled from 'styled-components'

export const HeaderContainer = styled.div`
    background-color: #18A49F;
    height: 10vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 10%;

    h1 {
        margin: 0;
        color: white;
        cursor: pointer;
    }

    button {
        font-size: 18px;
        background-color: #F67A00;
        border: none;
        color: white;
        padding: 0.8rem;
        border-radius: 4px;
        font-family: 'Inter', sans-serif;
        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.25);

        display: flex;
        align-items: center;
        justify-content: center;

        cursor: pointer;
    }

    @media only screen and (max-width: 800px) {
       button {
            font-size: 15px;
            max-width: 100px;
            max-height: 40px;
       }
    }
`