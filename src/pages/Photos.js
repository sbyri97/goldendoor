import React, {useState, useEffect} from "react";
import { useNav } from '../customHooks/useNav';
import Feed from './Feed'

import './Insta.css'


const Pics = ({...props}) => {

    const photosRef = useNav('Gallery');

    const [feeds, setFeeds] = useState([])
	  // const [instaIns, setInstaIns] = useState("");

    
    // useEffect(() => {
    //   async function fetchTodo() {
    //     const API = `/.netlify/functions/todo`;
    //     try {
    //       const todo = await fetch(API).then((res) => res.json()).then((res) => {
    //         const title = res.title
    //       });
    //       // console.log(todo);
    //       // const ins = todo.title
    //       // setInstaIns(ins);

    //     } catch (err) {
    //       console.log(err);
    //     } 
    //   }
    //   fetchTodo();
    // });

    // console.log(instaIns);
    // const token = instaIns

    // const tokenPrep = useRef(token);
    // tokenPrep.current = token;
    // const tokenn = token
    
    useEffect(() => {
        const abortController = new AbortController();
        

        async function fetchProfile () {
            const fields = ['id', 'media_type', 'media_url']
            const API = `/.netlify/functions/todo`;

            try {
                await fetch(API)
                  .then((res) => res.json())
                  .then((res) => {
                    const title = res.title;
                    return fetch(
                      `https://graph.instagram.com/v16.0/me/media?fields=${fields}&limit=${props.limit}&access_token=${title}`
                    );
                  })
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
