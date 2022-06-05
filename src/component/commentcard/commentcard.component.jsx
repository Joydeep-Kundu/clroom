import { useEffect, useState } from 'react';
import CustomButton from '../custom-button/custom-button.component';
import './commentcard.styles.scss';

const CommentCard = ({ data, user }) => {
    //state
    const [check, setCheck] = useState(false)
    useEffect(() => {

        if (user === data.cm_email) {
            setCheck(true)
        }
    }, [])

    //other
    console.log('commentcard =', data);
    let date = data.cm_d;
    date = date.substring(0, 10);

    const deleteComment = () => {

    }
    return (

        <div className='commentcard'>
            <h3>comment</h3>
            <p>{data.cm}</p>
            <span>{data.cm_email}</span>
            <p><span>date:{date} </span> <span>time:{data.cm_t} </span></p>
            {
                check ? (<CustomButton>Delete</CustomButton>) : (null)
            }
        </div>
    )
}
export default CommentCard;