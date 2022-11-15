import {  Link, useNavigate } from "react-router-dom";
import './headerStyle.css'


export const HeaderFirstScreen = () => {
    const navigate = useNavigate()
    const logoHeader = () => {
        navigate('/');
    }
    return (
        <header>
            <div className='headerWrap'>
                <div className='headerLogo' onClick={logoHeader}>
                    <div><img src="./icons/calendarLogo.png" alt="логотип" /> </div>
                    <div><span> МОЙ ПЛАН</span></div>
                </div>
                <div className='headerBtnBox'>
                    <div className='headerBtn'><Link to="/signUp" className="linkHeader">Зарегистрироваться</Link>   </div>
                    <div className='headerBtn'><Link to="/SignIn"className="linkHeader">Вход</Link> </div>
                </div>

            </div>
        </header>
    )
}
