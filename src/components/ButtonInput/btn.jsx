import './btnInpStyle.css'

export const Btn = (props) => {

    return (
        <button className={props.classNameBtn} onClick={props.nameFunc} hidden={props.hidden}>{props.nameBtn}</button>
    )
} 

