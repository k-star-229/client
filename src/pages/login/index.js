import React, {Fragment} from 'react'
import LoginHero from "./components/hero";
import LoginContent from "./components/action";


export const LoginPage = () => {
    return (
        <Fragment>
            <LoginHero/>
            <LoginContent/>
        </Fragment>
    )
}

export default LoginPage