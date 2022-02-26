import styled from 'styled-components'

export const ButtonStyle = styled.div`
    width: ${({ width }) => width};
    background: ${({ focused }) => (focused ? '#124' : '')};
    min-width: 120px;
    color: #fff;
    padding: 15px 25px;
    text-align: center;
    transition: 0.6s ease;

    &:hover {
        background: #236;
        cursor: pointer;
    }
`
