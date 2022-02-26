import styled from 'styled-components'

export const AuthContainerStyle = styled.div`
    height: 100vh;
    width: 100vw;
    background: linear-gradient(#111122 15%, #999);
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`

export const RightFloatContainer = styled.div`
    width: 35%;
    margin: 20px 30px;
    z-index: 9;

    @media (max-width: 800px) {
        width: 50%;
    }
    @media (max-width: 550px) {
        width: 75%;
    }
    @media (max-width: 450px) {
        width: 100%;
        margin: 0 0px;
        padding: 10px;
    }
`

export const InputFieldStyle = styled.div`
    .slice {
        display: flex;
        justify-content: center;
    }

    @media (max-width: 450px) {
        margin: 20px 0 0 0;
    }
`

export const ToggleButtonStyle = styled.div`
    margin: 20px 10px 0 10px;
    position: relative;
    display: flex;
    border: 2px solid #fff6;
    border-radius: 4px;

    .forget-password {
        position: absolute;
        right: 0;
        bottom: -80%;
        color: #ff7f7f;
        text-transform: capitalize;
        margin: 0 30px;
        transition: 0.6s ease;

        &:hover {
            color: #fd3333;
            cursor: pointer;
        }
    }

    @media (max-width: 450px) {
        margin: 20px 0;
    }
`

export const TitleStyle = styled.div`
    margin: 15px 30px 0 0;
    text-align: center;

    h1 {
        font-family: 'Jost';
        letter-spacing: 5px;
        text-shadow: 0 0 #fff6;
    }

    p {
        line-height: 2;
        background: -webkit-linear-gradient(45deg, #3f3, #35f);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        text-shadow: 0 0 #fff9;
        margin-top: 16px;
    }

    .title h1:nth-child(1) {
        color: transparent;
        -webkit-text-stroke: 3px #dee;
        transform: translate(0, 45px);
    }

    .title h1:nth-child(2) {
        background: -webkit-linear-gradient(45deg, darkgreen, darkblue);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        animation: animate 4s ease-in-out infinite;
    }

    @keyframes animate {
        0%,
        100% {
            clip-path: polygon(
                0% 45%,
                16% 44%,
                33% 50%,
                54% 60%,
                70% 61%,
                84% 59%,
                100% 52%,
                100% 100%,
                0% 100%
            );
        }

        50% {
            clip-path: polygon(
                0% 60%,
                15% 65%,
                34% 66%,
                51% 62%,
                67% 50%,
                84% 45%,
                100% 46%,
                100% 100%,
                0% 100%
            );
        }
    }

    @media (max-width: 450px) {
        margin: 20px 0;
    }
`
export const HeroStyle = styled.div`
    position: absolute;
    top: 5%;
    left: 10%;
    opacity: 0.6;

    @media (max-width: 800px) {
        left: 1%;
        img {
            width: 70%;
        }
    }
    @media (max-width: 550px) {
        display: none;
    }
`
