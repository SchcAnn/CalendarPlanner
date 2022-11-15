import React, { useEffect } from 'react';
import './todoListStyle.css';
import { Btn } from '../ButtonInput/btn'

export const NewBisness = (props) => {
    const priory = [{ p: 'Важно', color: '#B2473E', id: 'p1' }, { p: 'Срочно', color: '#EAB364', id: 'p2' }, { p: 'Не важно', color: '#3636be', id: 'p3' }, { p: 'Не срочно', color: '#ACBD78', id: ' p4' }]

    const indexElem = (arr, x) => {
        if (arr.indexOf(x) !== -1) {
            arr.splice(arr.indexOf(x), 1);
        }
        return arr;
    }

    const ChoicePriory = (e) => {
        const valuePriority = e.target.dataset.colorname;
        props.newTask.priory.push(valuePriority);
        const setPriory = new Set(props.newTask.priory);
        props.newTask.priory = [...setPriory];
        switch (valuePriority) {
            case '#B2473E':
                indexElem(props.newTask.priory, '#3636be');
                break;
            case '#3636be':
                indexElem(props.newTask.priory, '#B2473E');
                break;
            case '#EAB364':
                indexElem(props.newTask.priory, '#ACBD78');
                break;
            case '#ACBD78':
                indexElem(props.newTask.priory, '#EAB364');
                break;
        };
        props.addNewTask({ ...props.newTask, priory: props.newTask.priory });
    };

    const changeInpTask = (e) => {
        props.addNewTask({ ...props.newTask, task: e.target.value, date: props.selectedDates.toDateString() });
    };

    const saveTask = () => {
        props.tasksAdd([...props.taskOnDay, props.newTask]);
        props.addNewTask({
            date: props.today.toDateString(),
            task: '',
            priory: [],
            contentEdit: false,
            hiddenSave: true
        });
        props.changeVisualDisplay('none');
    }

    useEffect(() => {
        const memoryDate = JSON.stringify(props.taskOnDay);
        localStorage.setItem('memoryTaskDate', memoryDate);
    }, [props.taskOnDay]);


    return (
        <div className='newBisness' style={{ display: props.visualDisplay }}>
            <div>
                <input className='input' value={props.newTask.task} placeholder='Что бы Вы хотели запланировать?' onChange={changeInpTask} />
                <Btn classNameBtn='btnInput' nameBtn='Сохранить' nameFunc={saveTask} />
                <Btn classNameBtn='btnInput' nameBtn='Закрыть' />
            </div>
            <div className='priority'>
                <p>Приоритет:</p>
                {priory.map((el) => {
                    return (
                        <div key={el.id} style={{ backgroundColor: el.color }} onClick={ChoicePriory} data-colorname={el.color}>{el.p}</div>
                    )
                })}
            </div>
        </div>
    )
}

