import CommentCard from '../commentcard/commentcard.component';

import './commentcardlist.styles.scss';


const CommentCardList = (props) => {
    const { dcomment, user } = props;
    console.log('comment card list=', dcomment);
    return (
        <div className='commentcardlist'>
            {
                dcomment.map((data) => (<CommentCard data={data} user={user} />))
            }
        </div>
    )
}
export default CommentCardList;