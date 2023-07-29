import React, { useState } from 'react';

type Tab = {
    label: string;
    content: React.ReactNode;
};

type Props = {
    tabs: Tab[];
};

const Tabs: React.FC<Props> = ({ tabs }) => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div>
            {/* Tab buttons */}
            <div className="flex items-center justify-center space-x-3 my-6">
                {tabs.map((tab, index) => (
                    <button
                        key={index}
                        className={` px-4 py-2 mb-4 border-2 border-black rounded-[4px] ${activeTab === index ? 'bg-[#fff]' : 'bg-[#EAEAEA]'}
                    `}
                        onClick={() => setActiveTab(index)}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            {/* Tab content */}
            <div className="w-5/6 mx-auto">{tabs[activeTab].content}</div>
        </div>
    );
};

export default Tabs;
