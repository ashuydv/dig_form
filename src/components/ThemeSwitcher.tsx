import { useCallback } from 'react'
import { useTheme } from 'next-themes'
import { MoonIcon, SunIcon } from '@heroicons/react/outline'
 
const ThemeSwitcher = ({ className = '' }) => {
	const { resolvedTheme, setTheme } = useTheme()

	const toggleTheme = useCallback(() => {
		setTheme(resolvedTheme === 'light' ? 'dark' : 'light')
	}, [resolvedTheme, setTheme])

	return (
		<button
			onClick={toggleTheme}
			className={`${className}`}
		>
			{resolvedTheme == 'light' ? <MoonIcon className="w-5 h-5" /> : <SunIcon className="w-5 h-5" />}
		</button>
	)
}

export default ThemeSwitcher
