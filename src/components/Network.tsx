import React, { useEffect, useState } from 'react';
import { useNetwork, useSwitchNetwork } from 'wagmi';
type Props = {};

const Network = (props: Props) => {
    const { chain } = useNetwork();
    const { chains, error, isLoading, pendingChainId, switchNetwork } = useSwitchNetwork();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleDropdownToggle = () => {
        setIsDropdownOpen((prev) => !prev);
    };

    const networkArray = [{
        id: 1,
        icon: 'https://cryptologos.cc/logos/ethereum-eth-logo.svg?v=025'
    }, {
        id: 56,
        icon: 'https://cryptologos.cc/logos/binance-usd-busd-logo.svg?v=025'
    }, {
        id: 137,
        icon: 'https://cryptologos.cc/logos/polygon-matic-logo.svg?v=025'
    }]

    const handleNetworkSelect = (chainId: number) => {
        switchNetwork?.(chainId);
        setIsDropdownOpen(false);
    };

    return (
        <div className="relative">
            <button
                onClick={handleDropdownToggle}
            >
                {chain && (
                    <>
                        <img
                            src={networkArray.find((x) => x.id === chain.id)?.icon}
                            alt="Network Icon"
                            className="w-5 h-5"
                        />
                    </>
                )}
            </button>

            {isDropdownOpen && (
                <div className="absolute bg-[#EAEAEA] text-black border border-[#131313] min-w-[225px] min-h-[220px] rounded-[4px] px-[12px] py-[16px] shadow-md mt-2">
                    <div className="flex items-center justify-between mb-4">
                        <div className="text-sm font-semibold text-[#131313e5]">Choose a Network</div>
                    </div>
                    <div className="space-y-3">
                        {chains.map((x) => (
                            <button
                                disabled={!switchNetwork || x.id === chain?.id}
                                key={x.id}
                                className="flex items-center justify-start px-4 py-[14px] h-[48px] text-[16px] w-full mr-4 text-[#131313] font-semibold bg-[#EAEAEA] border-[2px] border-[#131313] rounded-[4px] drop-shadow-[3px_3px_0px_rgba(0,0,0,.5)]"
                                onClick={() => handleNetworkSelect(x.id)}
                            >
                                <img
                                    src={networkArray.find((network) => network.id === x.id)?.icon}
                                    alt="Network Icon"
                                    className="w-5 h-5 mr-2"
                                />
                                <span className='mb-1'>
                                    {x.name}
                                </span>
                                {isLoading && pendingChainId === x.id && ''}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Network;
