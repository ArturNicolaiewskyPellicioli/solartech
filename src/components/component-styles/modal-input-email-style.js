import styled from 'styled-components'

export const ModalContent = styled.div`

    form{
        display: flex;
        flex-direction: column;
        align-items: center;

        h2 {
            margin-bottom: 1rem;
        }

        input {
            width: 50%;
            min-width: 180px;
            border: none;
            background-color: #EEF3F2;
            padding: 1rem 2rem;
            border-radius: 4px;
            box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.25);

            margin: 0.75rem;
            margin-bottom: 1.25rem;

            display: flex;

            font-size: 18px;
            font-family: inter;

            span:last-child {
                font-size: 18px;
            }
        }
    }
`