import styled from 'styled-components'

export const EnderecoSecundarioContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 90vh;

    h1 {
        color: #18A49F;
        margin: 2rem;
        margin-top: 6rem;
        font-family: inter;
        text-align: center;
    }

    form {
    display: flex;
    flex-direction: column;
    align-items: flex-end;

        label {
            margin: 0.75rem;
        }

        input {
            width: 30vw;
            min-width: 180px;
            border: none;
            background-color: #EEF3F2;
            padding: 1rem 2rem;
            border-radius: 4px;
            box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.25);

            margin: 0.75rem;
            margin-bottom: 1.25rem;

            display: flex;

            font-size: 22px;
            font-family: inter;
        }

        .custom-select-box {
            display: flex;
            align-items: center;
        }

        select {
            border: none;
            background-color: #EEF3F2;
            padding: 1rem 2rem;
            border-radius: 4px;
            box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.25);

            margin: 0.75rem;
            margin-bottom: 1.25rem;

            display: flex;

            font-size: 22px;
            font-family: inter;
        }

        
        .button-container {
            display: flex;
            margin-bottom: 2rem;
        }
    }

`