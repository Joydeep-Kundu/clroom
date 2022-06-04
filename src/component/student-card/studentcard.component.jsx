import './studentcard.styles.scss';


const StudentCard = ({ student }) => {
    console.log(student)
    return (
        <div className='studentcard'>
            <h4>{student.u_name}</h4>
            <span>{student.u_email}</span>
        </div>
    )
}
export default StudentCard;