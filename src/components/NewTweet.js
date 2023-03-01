import {useState} from "react";
import {connect} from "react-redux";
import {handleAddingTweet} from '../actions/tweets'
import {useNavigate} from "react-router-dom";

const NewTweet = ({dispatch, id}) => {
    const [tweet, setTweet] = useState('');
    const navigate=useNavigate()
    const onTextUpdate = (e) => {
        let value = e.target.value
        setTweet(value)
    }
    const onTextSubmit = (e) => {
        e.preventDefault()
        dispatch(handleAddingTweet(tweet, id))
        setTweet('')
        if(!id){
            navigate('/')
        }
    }

    const tweetLeft = 280 - tweet.length
    return <div>
        <h3 className='center'>Compose new Tweet</h3>
        <form className='new-tweet' onSubmit={onTextSubmit}>
            <textarea placeholder="what's happening?" value={tweet} onChange={onTextUpdate} className='text-area'
                      maxLength={280}/>
            {tweetLeft <= 100 && <div className='tweet-length'>{tweetLeft}</div>
            }
            <button className='btn' type='submit' disabled={tweet === ''}>
                Submit
            </button>
        </form>
    </div>
}

export default connect()(NewTweet);