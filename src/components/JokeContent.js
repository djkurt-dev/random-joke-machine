import React, { useEffect, useState } from 'react';
import PuffLoader from "react-spinners/PuffLoader";


const Joke = ({ setup, punchline }) => {

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    }, []);

    return (
        <div className="container text-center">
            {loading ?
                <div className="text-center">
                    <PuffLoader
                        color={'#283B50'}
                        loading={loading}
                        size={50}
                    />
                </div>
                :
                <div>
                    <div className="setup">
                        <p>{setup}</p>
                    </div>
                    <h1 className="text-center">. . .</h1>
                    <div className="punchline">
                        <p>{punchline}</p>
                    </div>
                </div>
            }
        </div>
    );
};


export default Joke;

