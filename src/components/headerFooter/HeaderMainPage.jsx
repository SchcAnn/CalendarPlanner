import {  Link, useNavigate } from "react-router-dom";
import './headerStyle.css'


export const HeaderMainPage = () => {
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
                    <div className='headerBtn'><Link to="/"className="linkHeader">Выйти</Link> </div>
                </div>

            </div>
        </header>
    )
}
