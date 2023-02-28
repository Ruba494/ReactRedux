import {connect} from "react-redux";
import {formatDate, formatTweet} from '../utils/helpers'
import {
    TiArrowBackOutline,
    TiHeartOutline,
    TiHeartFullOutline
} from "react-icons/ti";

const Tweet = (props) => {
    const toParent = (e, parentId) => {
        e.preventDefault()

    }
    const handelLike = (e) => {
        e.preventDefault()

    }

    if (props.tweet === null) {
        return <h3 className='center'>
            this tweet doesn't exist
        </h3>
    }
    const {name, avatar, timestamp, text, hasLike, likes, replies, parent} = props.tweet
    return <div className='tweet'>
        <img src={avatar} alt={`avatar of ${name}`} className='avatar'/>
        <div className='tweet-info'>
            <span>{name}</span>
            <div>{formatDate(timestamp)}</div>
            {
                parent && (
                    <button className='replying-to' onClick={(e) => toParent(e, parent.id)}>
                        Replying to @{parent.author}
                    </button>
                )
            }
            <p>{text}</p>
            <div className='tweet-icons'>
                <TiArrowBackOutline className='tweet-icon'/>
                <span>{replies !== 0 && replies}</span>
                <button className='heart-button' onClick={handelLike}>
                    {hasLike === true ?
                        (<TiHeartFullOutline color='e0245e' className='tweet-icon'/>) :
                        (<TiHeartOutline className='tweet-icon'/>)
                    }
                </button>
                <span>{likes !== 0 && likes}</span>
            </div>
        </div>


    </div>
}


const mapStateToProps = ({authUser, users, tweets}, {id}) => {
    const tweet = tweets[id];
    const parentTweet = tweet ? tweets[tweet.replyingTo] : null;

    return {
        authUser,
        tweet: tweet
            ? formatTweet(tweet, users[tweet.author], authUser, parentTweet)
            : null,
    }
};

export default connect(mapStateToProps)(Tweet);