import React, { useState } from 'react'
import { PageArea } from './styled'

import { PageContainer, PageTitle } from '../../components/MainComponents'

const Page = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [rememberPassword, serRememberPassword] = useState('')
    const [disabled, setDisabled] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        setDisabled(true)
    }
    return (
        <PageContainer>
            <PageTitle>Login</PageTitle>
            <PageArea>
                <form onSubmit={handleSubmit} >
                    <label className="area" >
                        <div className="area--title">E-mail</div>
                        <div className="area--input">
                            <input type="email" disabled={disabled} />
                        </div>
                    </label>
                    <label className="area" >
                        <div className="area--title">Password</div>
                        <div className="area--input">
                            <input type="password" disabled={disabled} />
                        </div>
                    </label>
                    <label className="area" >
                        <div className="area--title">Remember me</div>
                        <div className="area--input">
                            <input type="checkbox" disabled={disabled} />
                        </div>
                    </label>
                    <label className="area" >
                        <div className="area--title"></div>
                        <div className="area--input">
                            <button disabled={disabled} >Login</button>
                        </div>
                    </label>
                </form>
            </PageArea>
        </PageContainer>
    )
}

export default Page