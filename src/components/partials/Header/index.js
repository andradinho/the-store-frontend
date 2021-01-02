import React from 'react'
import { Link } from 'react-router-dom'
import { HeaderArea } from './styled'

import { isLogged } from '../../../helpers/AuthHandler'

const Header = () => {
    let logged = isLogged()

    return (
        <HeaderArea>
            <div className="container">
                <div className="logo">
                    <Link to="/">
                        <span className="logo-1">A</span>
                        <span className="logo-2">K</span>
                        <span className="logo-3">Tech</span>
                    </Link>
                </div>
                <nav>
                    <ul>
                        {logged &&
                            <>
                                <li>
                                    <Link to="/my-account">My Account</Link>
                                </li>
                                <li>
                                    <Link to="/logout">Logout</Link>
                                </li>
                                <li>
                                    <Link to="/post-an-ad" className="button" >Place an Ad</Link>
                                </li>
                            </>
                        }
                        {!logged &&
                            <>
                                <li>
                                    <Link to="/signin">Sign In</Link>
                                </li>
                                <li>
                                    <Link to="/signup">Sign Up</Link>
                                </li>
                                <li>
                                    <Link to="/signin" className="button" >Place an Ad</Link>
                                </li>
                            </>
                        }
                    </ul>    
                </nav>      
            </div>            
        </HeaderArea>
    )
}

export default Header