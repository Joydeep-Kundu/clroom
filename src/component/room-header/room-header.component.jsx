import { Navigate, useNavigate } from 'react-router-dom';
import './room-header.styles.scss';


const RoomHeader = (props) => {
    const navigate = useNavigate();
    console.log('props', props);
    const dfn = () => {
        navigate('/course')
    }

    return (
        <div className='room-header'>
            <div onClick={dfn}></div>
            <h1>{props.c_name}</h1>
            <p>{props.c_dis}</p>
            <span>{props.u_name}</span>
        </div >
    )
}
export default RoomHeader;