import * as React from 'react';
import title from '../assets/img/GuessTheColor.png';

const Title = () => {
    return (
        <div className='title'>
            <img src={title} alt="title" />
        </div>
    );
}

export default Title;