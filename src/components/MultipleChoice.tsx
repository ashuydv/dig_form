import React, { useState } from 'react';

type Props = {
    options: string[];
    setOptions: (options: string[]) => void;
};

const MultipleChoice = ({ options, setOptions }: Props) => {
    const [newOption, setNewOption] = useState('');

    const handleAddOption = () => {
        if (newOption.trim() !== '') {
            setOptions([...options, newOption.trim()]);
            setNewOption('');
        }
    };

    const handleRemoveOption = (index: number) => {
        const updatedOptions = [...options];
        updatedOptions.splice(index, 1);
        setOptions(updatedOptions);
    };

    return (
        <div>
            <div className="flex items-center mb-3">
                <input
                    type="text"
                    name="option"
                    value={newOption}
                    onChange={(e) => setNewOption(e.target.value)}
                    placeholder="Type your option here"
                    className='mt-1'
                />
                <button
                    onClick={handleAddOption}
                    className='mx-4 text-[25px] py-0'
                >
                    +
                </button>
            </div>
            <div className="flex items-center space-x-4">
                {options.map((option, index) => (
                    <div key={index} className="flex items-center mb-2">
                        <p className="mr-1">{option}</p>
                        <button
                            onClick={() => handleRemoveOption(index)}
                            className="text-red-500 p-0 shadow-none border-none"
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

export default MultipleChoice;
