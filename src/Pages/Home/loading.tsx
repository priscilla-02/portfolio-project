import { useNavigate } from 'react-router-dom';
import { useTheme } from '../../Hooks/themeHook';
import { useMediaQuery } from 'react-responsive';


interface LoadingProps {
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
}


export const Loading: React.FC<LoadingProps> = ({ setIsLoading }) => {
  const { isDarkMode } = useTheme();
  const isTablet = useMediaQuery({ minWidth: 768 });
  const navigate = useNavigate()

  const handleClick = () => {
    setIsLoading(false);
    navigate("/");
  };

  return (<div className="h-[1200px] flex flex-col gap-10 items-center desktop:pt-40 pt-28">
    <div className="coffee">
      <div></div>
      <div></div>
      <div></div>
    </div>
    <div className="flex flex-col text-start p-4 bg-gray-600">
      <h1 style={{
        whiteSpace: 'pre-line', color: '#c586c0',
        fontSize: isTablet ? '1.6rem' : '0.8rem',
      }}
        className={`${isDarkMode ? 'text- white' : 'text-black'} desktop:leading-10`}>
        <span style={{ color: '#ffccff' }}>const </span><span style={{ color: '#9cdcfe' }}>getDeveloperStatus </span>
        <span style={{ color: '#ffccff' }}>= </span><span style={{ color: '#cc66ff' }}>(</span>
        <span style={{ color: 'white' }}>caffeineLevel</span><span style={{ color: '#ffccff' }}>: number</span><span style={{ color: '#cc66ff' }}>)</span>
        <span style={{ color: '#ffccff' }}>=&gt;</span> <span style={{ color: '#cc66ff' }}>( </span><span style={{ color: '#3366ff' }}>{`{`}</span>
        <br />
        <span style={{ color: 'white' }}>status: caffineLevel </span><span style={{ color: '#ffccff' }}>&gt;</span> <span style={{ color: '#dcdcaa' }}>5</span> <span style={{ color: '#ffccff' }}>? </span>
        <span style={{ color: 'white' }}>"</span><span style={{ color: '#dcdcaa' }}>Coding...</span><span style={{ color: 'white' }}>" </span>
        <span style={{ color: '#ffccff' }}>: </span>
        <span style={{ color: 'white' }}>"</span><span style={{ color: '#dcdcaa' }}>BRB</span><span style={{ color: 'white' }}>" </span><span style={{ color: 'white' }}>,</span>
        <br />
        <span style={{ color: '#3366ff' }}>{`}`}</span><span style={{ color: '#cc66ff' }}>)</span>
      </h1>
    </div>
    <div
      style={{ fontFamily: 'rato' }}
      className={`${isDarkMode ? 'text-white' : 'text-gray-600'} desktop:text-4xl text-3xl cursor-pointer hover:text-sky-500`}
      onClick={handleClick}
    >
      Skip Coffee <span className="text-sky-500">=&gt;</span>
    </div>

  </div >)
}