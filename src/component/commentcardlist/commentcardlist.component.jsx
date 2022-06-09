import CommentCard from '../commentcard/commentcard.component';

import './commentcardlist.styles.scss';


const CommentCardList = (props) => {
    const { dcomment, user, room, rend } = props;

    return (
        <div className='commentcardlist'>
            {
                dcomment.map((data) => (<CommentCard data={data} user={user} room={room} rend={rend} />))
            }
        </div>
    )
}
export default CommentCardList;