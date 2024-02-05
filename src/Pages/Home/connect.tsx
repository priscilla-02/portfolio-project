import { useState } from 'react';
import { useTheme } from '../../Hooks/themeHook';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

export function Connect() {
  const [isHovered, setIsHovered] = useState<null | string>(null);
  const { isDarkMode } = useTheme();

  const handleIconEnter = (iconName: string) => {
    setIsHovered(iconName);
  };

  const handleIconLeave = () => {
    setIsHovered(null);
  };

  return (
    <div
      id="connect"
      className={`flex justify-center items-center font-extrabold h-[500px] ${
        isDarkMode ? 'bg-slate-500' : 'bg-white'
      }`}
    >
      <div className="flex-col">
        <p
          className="mb-10 desktop:text-4xl text-2xl"
          style={{
            fontFamily: 'rato',
          }}
        >
          Connect with me here:
        </p>

        <div className="flex items-center align-center justify-center">
          <div
            className={`mx-7 ${
              isHovered === 'github' ? 'rotate-out' : 'rotate-in'
            }`}
            onMouseEnter={() => handleIconEnter('github')}
            onMouseLeave={handleIconLeave}
            onTouchStart={() => handleIconEnter('github')}
            onTouchEnd={handleIconLeave}
            style={{
              position: 'relative',
            }}
          >
            <a href="https://github.com/priscilla-02" target="_blank">
              <div
                className={`rounded-full border-2 border-black p-3.5 ${
                  isHovered === 'github'
                    ? 'ring-inset ring-[6px] ring-blue-400'
                    : ''
                }`}
              >
                <GitHubIcon style={{ fontSize: 30 }} />
              </div>
            </a>
          </div>
          <div
            className={`mx-5 ${
              isHovered === 'linkedin' ? 'rotate-out' : 'rotate-in'
            }`}
            onMouseEnter={() => handleIconEnter('linkedin')}
            onMouseLeave={handleIconLeave}
            onTouchStart={() => handleIconEnter('linkedin')}
            onTouchEnd={handleIconLeave}
            style={{
              position: 'relative',
            }}
          >
            <a
              href="https://www.linkedin.com/in/priscilla-chan-554153138/"
              target="_blank"
            >
              <div
                className={`rounded-full border-2 border-black p-2 ${
                  isHovered === 'linkedin'
                    ? 'ring-inset ring-[6px] ring-blue-400'
                    : ''
                }`}
              >
                <LinkedInIcon style={{ fontSize: 40 }} />
              </div>
            </a>
          </div>

          <div
            className={`mx-5 ${
              isHovered === 'email' ? 'rotate-out' : 'rotate-in'
            }`}
            onMouseEnter={() => handleIconEnter('email')}
            onMouseLeave={handleIconLeave}
            onTouchStart={() => handleIconEnter('email')}
            onTouchEnd={handleIconLeave}
            style={{
              position: 'relative',
            }}
          >
            <a href="mailto:priscilla.chankwaitung@gmail.com" target="_blank">
              <div
                className={`rounded-full border-2 border-black p-2 ${
                  isHovered === 'email'
                    ? 'ring-inset ring-[6px] ring-blue-400'
                    : ''
                }`}
              >
                <EmailIcon style={{ fontSize: 40 }} />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
