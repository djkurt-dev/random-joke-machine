import React from 'react';

const GetJokeButton = ({ getJoke }) => {
    return (
        <div className="container text-center mt-4">
            <button onClick={getJoke} className="btn btn-dark">Get Joke</button>
        </div>

    );
}

export default GetJokeButton;