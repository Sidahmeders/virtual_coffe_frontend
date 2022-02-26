import { ButtonStyle } from './style'

export default function ButtonElement({ label, clickHandler, width, focused }) {
    return (
        <ButtonStyle onClick={clickHandler} width={width} focused={focused}>
            <div>{label ? label : 'Button-Element'}</div>
        </ButtonStyle>
    )
}
