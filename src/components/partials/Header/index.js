import React from 'react'
import { Link } from 'react-router-dom'
import { HeaderArea } from './styled'

const Header = () => {
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
                        <li>
                            <Link to="">Sign In</Link>
                        </li>
                        <li>
                            <Link to="">Sign Up</Link>
                        </li>
                        <li>
                            <Link to="" className="button" >Place an Ad</Link>
                        </li>
                    </ul>    
                </nav>      
            </div>            
        </HeaderArea>
    )
}

export default Header