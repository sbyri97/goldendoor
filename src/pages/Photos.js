import React, {useState, useEffect, useRef} from "react";
import { useNav } from '../customHooks/useNav';
import Feed from './Feed'

import './Insta.css'


const Pics = ({token, ...props}) => {

    const photosRef = useNav('Gallery');

    const [feeds, setFeeds] = useState([])

    const tokenPrep = useRef(token);
    tokenPrep.current = token;
    const tokenn = token

    useEffect(() => {
        const abortController = new AbortController();

        async function fetchProfile () {
            const fields = ['id', 'media_type', 'media_url']

            try {
                fetch(`https://graph.instagram.com/v16.0/me/media?fields=${fields}&limit=${props.limit}&access_token=${tokenn}`)
                .then((resp) => {
                    resp.json()
                    .then((resp) => {
                        // console.log(resp);
                        setFeeds(resp.data)
                        // console.log(feeds);
                    })
                })

            } catch (err) {
                console.log('error', err);
            }
        }
        
        fetchProfile()
        
        return () => {
            abortController.abort();
        };
    }, [props.limit])
    
    return (
      <section ref={photosRef} id="photosContainer">
        <div className="photos-div">
          {feeds?.map((feed) => (
            <Feed key={feed.id} feed={feed} className="feedMap" />
          ))}
        </div>
      </section>
    );
};

export default Pics;
