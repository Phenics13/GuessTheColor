import * as React from 'react';

const Guess_color = ({ color }: { color: string }) => {
    return (
        <div className="guess_color" style={{ background: color }}></div>
    );
};

export default Guess_color;