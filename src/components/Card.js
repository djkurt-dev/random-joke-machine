import React from 'react';
import Joke from './JokeContent';
import GetJokeButton from './GetJokeButton';

const Card = ({ setup, setSetup, punchline, setPunchline, getJoke }) => {
    return (
        <div>
            <div className="card joke-card text-center mt-3">
                <p className="mt-2 its-a-joke">It's a Jokeee!!!</p>
                <Joke
                    setup={setup}
                    setSetup={setSetup}
                    punchline={punchline}
                    setPunchline={setPunchline}
                />
            </div>
            <GetJokeButton
                getJoke={getJoke}
            />
        </div>


    );
}

export default Card;