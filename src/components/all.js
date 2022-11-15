import { HeaderMainPage } from './headerFooter/HeaderMainPage'
import { CalendarPaint } from './calendar/calendar';
import '../App.css'


export const All = () => {
    return (
        <div>
            <HeaderMainPage />
            <div className='all'>
                <CalendarPaint />
            </div>
        </div>



    )


}