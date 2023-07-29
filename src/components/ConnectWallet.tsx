import { FC } from 'react';
import { useAccount, useNetwork, useSwitchNetwork } from 'wagmi';
import { ConnectKitButton } from 'connectkit';
import Network from './Network';

type Visibility = 'always' | 'connected' | 'not_connected';

const ConnectWallet: FC<{ show?: Visibility }> = ({ show = 'always' }) => {
	const { isConnected, address } = useAccount();

	if ((show === 'connected' && !isConnected) || (show === 'not_connected' && isConnected)) {
		return null;
	}

	return (
		<ConnectKitButton.Custom>
			{({ isConnected, isConnecting, show, hide, address, ensName }) => {
				return (
					<div className='flex'>
						{isConnected && (
							<>
								<Network />
							</>
						)}
						<button
							onClick={show}
						>
							{isConnected ?
								<>
									{address
										? `${address.slice(0, 6)}...${address.slice(-4)}`
										: 'Connect Wallet'
									}
								</>
								: 'Connect Wallet'}
						</button>
					</div>
				);
			}}
		</ConnectKitButton.Custom>
	);
};

export default ConnectWallet;
