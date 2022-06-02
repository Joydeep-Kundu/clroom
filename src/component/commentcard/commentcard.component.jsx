import './commentcard.styles.scss';

const CommentCard = ({ data }) => {
    console.log('commentcard =', data);
    let date = data.cm_d;
    date = date.substring(0, 10)
    return (

        <div className='commentcard'>
            <h3>comment</h3>
            <p>{data.cm}</p>
            <span>{data.cm_email}</span>
            <p><span>date:{date} </span> <span>time:{data.cm_t} </span></p>
        </div>
    )
}
export default CommentCard;