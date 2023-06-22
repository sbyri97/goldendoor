import React from "react";

const Feed = (props) => {
    const { id, media_type, media_url} = props.feed;

    let post;

    switch (media_type) {
        case "VIDEO":
            post = (
                <video
                    width='100%'
                    height='auto'
                    src={media_url}
                    type="video/mp4"
                    playsInline
                    defaultMuted
                    onMouseOver={event => event.target.play()}
                    onMouseOut={event => event.target.pause()}
                    className="insta-img">
                </video>
            )
            break;
        // case "CAROUSEL_ALBUM":
        //     post = (
        //         <img
        //             width='100%'
        //             height='auto'
        //             id={id}
        //             src={media_url}
        //             alt={caption}
        //         />
        //     );
        //     break;
        default:
            post = (
                <img
                    width='100%'
                    height='auto'
                    id={id}
                    src={media_url}
                    className="image-grid-col-2 image-grid-row-2"
                    alt="{caption}"
                />
            );
    }

    return (
        <div className="image-grid">
            {post}
        </div>
        // <React.Fragment>
        //     {post}
        // </React.Fragment>
    );
}

export default Feed;