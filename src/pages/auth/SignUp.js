import TextInputElement from '../../components/common/form/TextInputElement'
import RadioInputElement from '../../components/common/form/RadioInputElement'
import { InputFieldStyle } from './styles'

export default function SignUp({ userInfo, hadnleUserInfoChange }) {
    return (
        <InputFieldStyle>
            <div className="slice">
                <TextInputElement
                    label="first name"
                    type="text"
                    value={userInfo.first_name}
                    changeHandler={hadnleUserInfoChange}
                />
                <TextInputElement
                    label="last name"
                    type="text"
                    value={userInfo.last_name}
                    changeHandler={hadnleUserInfoChange}
                />
            </div>
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
            <RadioInputElement label="gender" options={['male', 'female', 'others']} />
        </InputFieldStyle>
    )
}
