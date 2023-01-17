import * as React from 'react';

const Answers = ({ answers, handleAnswerClicked }: { answers: string[]; handleAnswerClicked: Function }) => {
    return (
        <div className="answers">
            {answers.map(answer => (
                <button key={answer} onClick={() => handleAnswerClicked(answer)}>{answer}</button>
            ))}
        </div>
    );
};

export default Answers;