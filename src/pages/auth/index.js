import { useState } from 'react'
import { AuthContainerStyle, RightFloatContainer } from './styles'

import SignIn from './SignIn'
import SignUp from './SignUp'
import ToggleButtons from './ToggleButtons'
import Title from './Title'
import Hero from './Hero'

const initialUserInfo = {
    first_name: '',
    last_name: '',
    email: '',
    password: ''
}

export default function LoginPage() {
    const [focused, setFocused] = useState(true)

    const [userInfo, setUserInfo] = useState({ ...initialUserInfo })

    const hadnleUserInfoChange = (event) => {
        const entry = event.target.name.split(' ').join('_')
        const value = event.target.value

        setUserInfo(() => {
            return {
                ...userInfo,
                [entry]: value
            }
        })
    }

    return (
        <AuthContainerStyle>
            <RightFloatContainer>
                {focused ? (
                    <SignIn userInfo={userInfo} hadnleUserInfoChange={hadnleUserInfoChange} />
                ) : (
                    <SignUp userInfo={userInfo} hadnleUserInfoChange={hadnleUserInfoChange} />
                )}
                <ToggleButtons focused={focused} setFocused={setFocused} />
                <Title />
            </RightFloatContainer>

            <Hero />
        </AuthContainerStyle>
    )
}
