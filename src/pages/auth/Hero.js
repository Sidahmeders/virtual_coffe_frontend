import MovieGif from '../../assets/images/movie3.gif'
import { HeroStyle } from './styles'

export default function Hero() {
    return (
        <HeroStyle>
            <img src={MovieGif} alt="logo" />
        </HeroStyle>
    )
}
