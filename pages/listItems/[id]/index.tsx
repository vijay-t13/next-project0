import { useRouter } from 'next/router';
import React from 'react';

const newIdPage = () => {
    const { query , replace} = useRouter();

    function handleClick(){
        replace(`/listItems/${query.id}/sub-id`)
    }

    return <div>
        <button onClick={handleClick}>Clickme</button>
        {query.id}
        </div>;
};

export default newIdPage;
