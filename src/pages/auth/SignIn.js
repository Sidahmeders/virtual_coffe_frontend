import TextInputElement from '../../components/common/form/TextInputElement'
import { InputFieldStyle } from './styles'

export default function SignIn({ userInfo, hadnleUserInfoChange }) {
    return (
        <InputFieldStyle>
            <TextInputElement
                label="email"
                type="text"
                value={userInfo.email}
                changeHandler={hadnleUserInfoChange}
            />
            <TextInputElement
                label="password"
                type="password"
                value={userInfo.password}
                changeHandler={hadnleUserInfoChange}
            />
        </InputFieldStyle>
    )
}
