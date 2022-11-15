import { useNavigate } from "react-router-dom";
import { HeaderFirstScreen } from '../headerFooter/HeaderFirstScreen';
import { Btn } from '../ButtonInput/btn'

import './helloScreen.css';

export const FirstScreen = () => {
    const navigate = useNavigate()
    const helloBtn = () => {
        navigate('/SignIn');
    }

    return (
        <div className='helloScreen'>
            <HeaderFirstScreen />
            <div className='HelloWrapper'>
                <div>
                    <h1>Удобный календарь-планнер</h1>
                    <p>Желанный успех – это достижение желанной цели. Достижение цели невозможно без хорошего целеполагания и эффективной работы на пути к ней. Эффективная работа невозможна без планирования времени в ее осуществлении, планированию целей и задач, входящих в состав главной (стратегической) цели. Это и есть правила успеха в целом. И важная ключевая роль – отведена планированию.</p>
                    <h4>Начни планировать прямо сейчас</h4>
                </div>

                <div className='benefits'>
                    <div className='localBenefits'>
                        <div><img src='./icons/important.png' alt='Важно' /></div>
                        <p>Помните о важном</p>
                    </div>
                    <div className='localBenefits'>
                        <div><img src='./icons/time.png' alt='Время' /></div>
                        <p>Экономьте своё время</p>
                    </div>
                    <div className='localBenefits'>
                        <div><img src='./icons/priory.png' alt='Приоритетность' /></div>
                        <p>Расставляйте приоритеты</p>
                    </div>
                </div>

                <Btn nameBtn='Начать планирование' classNameBtn='btnFirstScreen' nameFunc={helloBtn} />
            </div>
        </div>
    )
}

