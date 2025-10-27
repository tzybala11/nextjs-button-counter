'use client';

import {useState} from 'react';

export default function Counter(props) {
    const initialCount = props.initialCount || 0;
    const initialStep = props.initialStep || 1;

    const [count, setCount] = useState(initialCount);
    const [step, setStep] = useState(Math.max(1, initialStep));

    const handleStepChange = (newevent) => {
        const newValue = Number(newevent.target.value);
        setStep(Math.max(1, newValue));
    };

    const increment = () => {
        setCount(count + step);
    };

    const decrement = () => {
        if (count - step >= 0) {
            setCount(count - step);
        }
    };

    const reset = () => {
        setCount(initialCount);
        setStep(Math.max(1, initialStep));
    };

    const disabledDecrement = count - step < 0;

    return (
        <div className='counter'>
            <p
                className='counter'
                aria-live='polite'
                role='status'>
                    
                Current Count: <strong className='count_value'>{count}</strong>
            </p>

            <div className="controls">
                <button
                    onClick={decrement}
                    disabled={disabledDecrement}
                    aria-label={`Decremented by ${step}`}>
                    -{step}
                    </button>
            
            <button
                onClick={reset}
                aria-label='Reset Count'>
                Reset
                </button>

            <button
                onClick={increment}
                aria-label={`Incremented by ${step}`}>
                +{step}
                </button>
            </div>

            <div className='steps'>
                <label htmlFor='input' className='label'>
                    Step Amount:
                </label>
                <input
                    id='input'
                    type='number'
                    min='1'
                    value={step}
                    onChange={handleStepChange}
                    aria-label="Change step value">
                    </input>
            </div>
        </div>
    )
}