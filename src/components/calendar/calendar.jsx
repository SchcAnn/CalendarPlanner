import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Btn } from '../ButtonInput/btn';
import './calendaeStyle.css'
import { NewBisness } from '../listTask/NewBisness';
import { BusinessForToday } from '../listTask/TodoList';
import * as calendarDate from './calendarFunc';


export const CalendarPaint = () => {
    const dayWeek = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
    const month = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
    // для устанавливаемой даты
    const [date, setDate] = useState(new Date());
    // сегодняшняя дата    
    const [currentDate, getCurrentDate] = useState(new Date(date.getFullYear(), date.getMonth(), date.getDate()));
    const [visualDisplay, changeVisualDisplay] = useState('none');

    //ЗАДАЧА, создание задачи. Для компоненты NewBisness todoList 
    const [newTask, addNewTask] = useState({
        date: currentDate.toDateString(),
        task: '',
        priory: [],
        contentEdit: false,
        hiddenSave: true
    });
    //Список задач. Для компоненты NewBisness todoList  
    const memoryDate = localStorage.getItem('memoryTaskDate');
    const md = JSON.parse(memoryDate);
    const [inpTaskAdd, setInpTaskAdd] = useState([...md]);

    const dayToday = JSON.stringify(currentDate);

    //// для выбора даты в календаре // передать в selectedDate 
    const [selectedDate, setSelectedDate] = useState(new Date());
    const ThisMonth = date.getMonth();
    const ThisYear = date.getFullYear();

    //Правильное расположение дат в месяце
    const dayMonth = calendarDate.getMonthData(ThisYear, ThisMonth);

    //функция предыдущий месяц
    const buttonPrevMonth = () => {
        const dateN = new Date(ThisYear, ThisMonth - 1);
        setDate(dateN);
    };
    //функция следующий месяц
    const buttonNextMonth = () => {
        const dateN = new Date(ThisYear, ThisMonth + 1);
        setDate(dateN);
    };
    //функция выбор месяца в селекте
    const buttonSelectMonth = (e) => {
        const month = new Date(ThisYear, e.target.value);
        setDate(month);
    };

    // нажатие на дату в календаре  // 
    const clickDay = (d, arr) => {
        setSelectedDate(d);
        console.log(calendarDate.countTask(d, arr));
    };
    // кнопка добавить задачу
    const createTask = () => {
        changeVisualDisplay('inline');
    };
    // ДОП ФУНКЦИЯ ЧТОБ ВИДЕТЬ ОБЪКТ УДАЛИТЬ после разработки

    const navigate = useNavigate()
    const aboutPlanning = () => {
        navigate('/InformationAboutPlanning')
    }

    return (
        <main>
            <div className='calendar'>
                <div className='headCalendar'>
                    <button className='btnSelect' onClick={buttonPrevMonth}>{'<'}</button>
                    <select
                        value={ThisMonth} // При нажатии на стрелку в селекте будет изменяться месяц
                        onChange={buttonSelectMonth}>
                        {month.map((nameMonth, ind) =>
                            <option key={nameMonth} value={ind}>{nameMonth}</option>
                        )}
                    </select>

                    <button className='btnSelect' onClick={buttonNextMonth} >{'>'}</button>
                </div>
                <table>
                    <thead className='theadDayWeek'>
                        <tr>
                            {dayWeek.map((nameDay) =>
                                <th key={nameDay}>{nameDay}</th>
                            )}
                        </tr>
                    </thead>
                    <tbody>
                        {dayMonth.map((week, ind) =>
                            <tr key={ind} className='week'>{week.map((dateDiff, index) => dateDiff ?
                                <td
                                    key={index} onClick={() => clickDay(dateDiff, inpTaskAdd)}
                                    className={calendarDate.setClass(dateDiff, dayToday, selectedDate)}>
                                    {dateDiff.getDate()}

                                    <div className='getTask'>
                                        {(calendarDate.countTask(dateDiff, inpTaskAdd) !== 0) ? (<img src='./icons/idea.png' alt='Есть задачи на сегодня'></img>) : ''}
                                        {(calendarDate.countTask(dateDiff, inpTaskAdd) !== 0) ? calendarDate.countTask(dateDiff, inpTaskAdd) : ''}
                                    </div>

                                </td> : <td key={index} />
                            )}
                            </tr>
                        )}
                    </tbody>
                </table>
            </div >
            <div className='underlineGray'></div>
            <div className='underline'>
                <div className='underlineForBtn'>
                    <Btn classNameBtn='btnCalendar' nameBtn='Добавить задачу' nameFunc={createTask} />
                    <Btn classNameBtn='btnCalendarMore' nameBtn='Подробнее о планировании' nameFunc={aboutPlanning} />
                </div>
            </div>

            <NewBisness taskOnDay={inpTaskAdd} tasksAdd={setInpTaskAdd} selectedDates={selectedDate} today={currentDate} newTask={newTask} addNewTask={addNewTask} visualDisplay={visualDisplay} changeVisualDisplay={changeVisualDisplay} />

            <BusinessForToday taskOnDay={inpTaskAdd} tasksAdd={setInpTaskAdd} selectedDates={selectedDate} today={currentDate} newTask={newTask} addNewTask={addNewTask} />
        </main>
    )
}
