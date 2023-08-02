import React, { useState } from 'react';

type DropdownOption = {
    label: string;
    image: string;
    value: string;
};

type Props = {
    options: DropdownOption[];
    defaultValue?: DropdownOption;
    onSelect: (option: DropdownOption) => void;
};
 
const Dropdown = ({ options, defaultValue, onSelect }: Props) => {
    const [selectedOption, setSelectedOption] = useState<DropdownOption | undefined>(defaultValue);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleToggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleSelectOption = (option: DropdownOption) => {
        setSelectedOption(option);
        onSelect(option);
        setIsDropdownOpen(false);
    };

    return (
        <div className="relative inline-block text-left">
            {/* Dropdown Toggle */}
            <button
                type="button"
                className="py-2 cursor-pointer"
                onClick={handleToggleDropdown}
            >
                {selectedOption ? (
                    <div className='flex items-center justify-between'>
                        <div className="flex items-center w-56 text-gray-50">
                            <img src={`${selectedOption.image}`}
                                className="w-10 h-10 rounded-lg mr-3"
                                alt="" />
                            <div className='flex flex-col'>
                                <span className="font-semibold text-gray-50">{selectedOption.label}</span>
                            </div>
                        </div>
                        <div className='flex items-end justify-end text-right'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#f3f3f3" className="w-5 h-5 ">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
                            </svg>
                        </div>
                    </div>
                ) : (
                    <>
                        <span className="sr-only">Open options</span>
                        Select an option
                    </>
                )}
            </button>

            {/* Dropdown Content */}
            <div
                className={`absolute top-[100%] right-0 p-4 mt-2 bg-[#EAEAEA] rounded-[6px] w-full text-gray-900 overflow-hidden border border-gray-300 transition-opacity ${isDropdownOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
                    }`}
            >
                {/* Dropdown Options */}
                <ul className="space-y-4 py-2">
                    {options.map((option) => (
                        <li key={option.value}
                            onClick={() => handleSelectOption(option)}
                            className="flex items-center justify-start rounded-lg text-md font-medium cursor-pointer hover:bg-gray-200"
                        >
                            <div className="flex items-center">
                                <img src={`${option.image}`}
                                    className="w-[36px] h-[36px] rounded-lg mr-3"
                                    alt="" />
                            </div>
                            {option.label}
                        </li>
                    ))}
                </ul>
                <button
                    type="button"
                    className="flex items-center justify-center px-2 py-2 mt-3 text-sm font-medium text-center w-full bg-[#D3BFFB] text-[#131313] border border-[#131313] drop-shadow-[3px_3px_0px_rgba(0,0,0,1)] rounded-[4px] cursor-pointer"
                >
                    Add project
                </button>
            </div>
        </div>
    );
};

export default Dropdown;
