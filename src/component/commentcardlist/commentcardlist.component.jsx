import CommentCard from '../commentcard/commentcard.component';

import './commentcardlist.styles.scss';


const CommentCardList = (props) => {
    const { dcomment } = props;
    console.log('comment card list=', dcomment);
    return (
        <div className='commentcardlist'>
            {
                dcomment.map((data) => (<CommentCard data={data} />))
            }
        </div>
    )
}
export default CommentCardList;