import React from 'react';

const Joke = ({ setup, punchline }) => {

    return (
        <div className="container text-center">
            <hr />
            <div className="setup">
                <p>{setup}</p>
            </div>
            <h1 className="text-center">. . .</h1>
            <div className="punchline">
                <p>{punchline}</p>
            </div>

        </div>
    );
};


export default Joke;

