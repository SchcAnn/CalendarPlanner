import './todoListStyle.css';
import { Btn } from '../ButtonInput/btn'
//import * as calendarDate from './calendarFunc';

export const BusinessForToday = (props) => {
    
    const deleteTask = (ind) => {
        const delTask = [...props.taskOnDay];     
        delTask.splice(ind, 1);
        props.tasksAdd(delTask);
    };
  
    const editTask = (ind) => {        
        const ar = [...props.taskOnDay];
        ar[ind].contentEdit = true;
        ar[ind].hiddenSave = false;
        props.tasksAdd([...ar])
    };

    let tmptext = '';    
    const changeTask = (e) => {
        tmptext = e.target.innerText
    };

      const saveEditTask = (ind) => {           
        const ar = [...props.taskOnDay];
        ar[ind].contentEdit = false;
        ar[ind].hiddenSave = true;
        (tmptext === '') ? ar[ind].task = props.taskOnDay[ind].task : ar[ind].task = tmptext;
        props.tasksAdd([...ar])
    }

    const imgEdit = <img src='./icons/edit.png' alt='редактировать'></img>
    const imgSave = <img src='./icons/saveTask.png' alt='сохранить'></img>
    const imgDel = <img src='./icons/trash.png' alt='удалить'></img>
    const imgTask = <img src='./icons/task.png' alt='задача'></img>
  
    return (
        <div className='listTask'>
            {props.taskOnDay.map((el, ind) => {
                if (el.date === props.selectedDates.toDateString()) {

                    return (
                        <div key={ind} className='taskInListTask'>
                            <div className='countTask'>
                                {imgTask}
                            </div>
                            <div className='textTask' contentEditable={el.contentEdit} suppressContentEditableWarning={true} onKeyUp={changeTask}>{el.task}</div>
                            <div className='prioryTask'>{el.priory.map((prior, ind) => {
                                return <div key={ind} style={{ backgroundColor: prior }}></div>
                            })}
                            </div>
                            <div className='btnTask'>
                                <Btn classNameBtn='btnListTask' nameBtn={imgEdit} nameFunc={() => { return editTask(ind) }} />
                                <Btn classNameBtn='btnListTask' nameBtn={imgSave} hidden={el.hiddenSave} nameFunc={() => { return saveEditTask(ind) }} />
                                <Btn classNameBtn='btnListTask' nameBtn={imgDel} nameFunc={() => { return deleteTask(ind) }} />
                            </div>
                        </div>
                    )
                }

            })}
        </div>
    )
}
