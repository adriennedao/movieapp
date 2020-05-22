import React from 'react';
import './LoadMoreBtn.css';

const LoadMoreBtn = (props) => {
    return (
        <div className="rmdb-loadmorebtn" onClick={props.onClick}>
            Load More
        </div>
    )
}

export default LoadMoreBtn;
