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
}