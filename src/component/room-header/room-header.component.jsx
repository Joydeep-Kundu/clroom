import './room-header.styles.scss';


const RoomHeader = (props) => {
    console.log('props', props);

    return (
        <div className='room-header'>
            <h1>{props.c_name}</h1>
            <p>{props.c_dis}</p>
            <span>{props.u_name}</span>
        </div>
    )
}
export default RoomHeader;