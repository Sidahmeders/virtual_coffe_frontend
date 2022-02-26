import styled from 'styled-components'

export const TextInputStyle = styled.div`
    display: flex;
    flex-direction: column;
    padding: 5px 10px;
    position: relative;

    input {
        width: 100%;
        outline: none;
        padding: 22px 15px 18px 15px;
        font-size: 18px;
        min-height: 20px;
        border-radius: 5px;
        border: none;
        box-shadow: 0 0 0 2px #4442;
        background: #f6fff6f6;

        ::placeholder {
            color: #333;
            font-size: 17px;
            font-weight: 100;
            text-transform: capitalize;
            transition: 0.2s;
        }

        &:focus {
            box-shadow: 0 0 0 2px #08f8;
            ::placeholder {
                color: #7779;
                font-size: 13px;
                transform: translate(0, -20px);
            }
        }
    }

    .password-eye {
        position: absolute;
        top: 15%;
        right: 25px;
        padding: 15px;

        &:hover {
            cursor: pointer;
        }
    }
`
