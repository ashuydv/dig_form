import React from "react";

interface SliderStepProps {
    stepNumber: number;
    title: string;
    description: string;
    active: boolean;
    onClick: (step: number) => void;
    totalSteps: number;
}

const SliderStep: React.FC<SliderStepProps> = ({
    stepNumber,
    title,
    description,
    active,
    onClick,
    totalSteps,
}) => {
    const getStepColor = () => {
        if (active) {
            return "bg-[#13131350]"; // Active step color
        } else if (stepNumber < totalSteps) {
            return "bg-[#13131350]"; // Previous steps color
        } else {
            return "bg-[#13131350]"; // Inactive steps color
        }
    };

    return (
        <div
            className="flex relative items-center px-12 pl-0"
            onClick={() => onClick(stepNumber)}
        >
            {stepNumber > 0 && stepNumber < totalSteps && (
                // Only show the line if the step is not the first one and is within the total steps range
                <div className="w-full h-10 absolute inset-0 flex items-center justify-center">
                    <div className={`w-full h-1 ${getStepColor()} pointer-events-none`}></div>
                </div>
            )}
            <div
                className={`flex-shrink-0 w-10 h-10 rounded-full bg-white inline-flex items-center justify-center border-2 
                ${stepNumber <= totalSteps ? "border-[#13131350] drop-shadow-[3px_3px_0px_rgba(0,0,0,.5)]"
                        : "border-[#131313] drop-shadow-[3px_3px_0px_rgba(0,0,0,1)]"
                    } relative z-10`}
            >
                {stepNumber}
            </div>
        </div>
    );
};

export default SliderStep;
