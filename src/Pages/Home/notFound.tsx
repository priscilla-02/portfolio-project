import { useTheme } from '../../Hooks/themeHook';

export default function NotFound() {

  const { isDarkMode } = useTheme();

  return (
    <div
      className={`flex-row justify-center text-center desktop:p-36 desktop:w-auto w-screen ${isDarkMode ? 'bg-slate-500' : 'bg-gray-300'
        }`}
    >
      <h1>not found</h1>
    </div>)
}