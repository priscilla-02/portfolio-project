import { useTheme } from '../../Hooks/themeHook';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

export const DarkModeToggle = () => {
  const { toggleDarkMode, isDarkMode } = useTheme();
  return (
    <div>
      <input
        type="checkbox"
        name="toggle"
        id="toggle"
        className="toggle-checkbox absolute block w-10 h-8 rounded-full bg-sky-600 border-4 appearance-none cursor-pointer transition-transform"
        checked={isDarkMode}
        onChange={() => {
          toggleDarkMode();
        }}
        style={{
          transform: isDarkMode ? 'translateX(0)' : 'translateX(110%)',
        }}
      />
      <label
        htmlFor="toggle"
        className={`toggle-label flex items-center justify-between h-8 rounded-full bg-gray-400 cursor-pointer`}
      >
        <span className="my-1 ml-1 p-2">
          <LightModeIcon />
        </span>
        <span className="my-1 p-1">
          <DarkModeIcon />
        </span>
      </label>
    </div>
  );
};
