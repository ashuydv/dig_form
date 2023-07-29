import React, { useState } from 'react';

type Props = {};

const Currency = (props: Props) => {
    const [labels, setLabels] = useState<string[]>([]);
    const [newLabel, setNewLabel] = useState<string>('');

    const handleAddLabel = () => {
        if (newLabel.trim() !== '') {
            setLabels((prevLabels) => [...prevLabels, newLabel.trim()]);
            setNewLabel('');
        }
    };

    const handleRemoveLabel = (index: number) => {
        setLabels((prevLabels) => prevLabels.filter((_, i) => i !== index));
    };

    return (
        <div>
            <div className='flex items-center'>
                <input
                    type='text'
                    name=''
                    placeholder='add labels'
                    value={newLabel}
                    onChange={(e) => setNewLabel(e.target.value)}
                    className='mt-1'
                    id=''
                />
                <button className='mx-4 text-[25px] py-0' onClick={handleAddLabel}>
                    +
                </button>
            </div>
            <div
                className='flex items-center space-x-2 py-6'
            >
                {labels.map((label, index) => (
                    <div key={index} className='flex items-center'>
                        <p>{label}</p>
                        <button
                            onClick={() => handleRemoveLabel(index)}
                            className='text-red-500 px-2 mx-2 border-0 shadow-none py-1'
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Currency;
