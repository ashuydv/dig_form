import { Radio } from '@nextui-org/react';
import React, { useState } from 'react';

type Props = {
    options: string[];
    setOptions: (options: string[]) => void;
};

const RadioComponent = ({ options, setOptions }: Props) => {
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
                />
                Radio
                <button
                    onClick={handleAddOption}
                    className="bg-blue-500 text-white px-3 py-1 rounded"
                >
                    Add
                </button>
            </div>
            {options.map((option, index) => (
                <div key={index} className="flex items-center mb-2">
                    <label className="mr-2">
                        <input
                            type="radio"
                            name="radio-option"
                            value={option}
                            onChange={() => setOptions([option])}
                            checked={options.length === 1 && options[0] === option}
                            className="mr-1"
                        />
                        {option}
                    </label>
                    <button
                        onClick={() => handleRemoveOption(index)}
                        className="text-red-500"
                    >
                        Remove
                    </button>
                </div>
            ))}
        </div>
    );
};

export default RadioComponent;
