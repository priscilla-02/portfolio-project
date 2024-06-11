import { useTheme } from '../../Hooks/themeHook';
import { useNavigate } from 'react-router-dom';
import notFoundGif from "../../../public/assets/images/notFound/notFound.gif"

export default function NotFound() {
  const { isDarkMode } = useTheme();
  const navigate = useNavigate()

  return (
    <div style={{ fontFamily: 'rato' }}
      className={`flex flex-col gap-8 items-center h-[1000px] desktop:p-36 desktop:pt-28 pt-16 desktop:w-auto w-screen text-3xl ${isDarkMode ? 'bg-slate-500 text-white' : 'bg-gray-300 text-gray-600'}`}>
      <div>Sorry Page Not found :(</div>
      <div>
        <img src={notFoundGif} className='desktop:w-[300px] w-[250px] rounded-3xl'></img>
      </div>
      <div
        style={{ fontFamily: 'rato' }}
        className={`${isDarkMode ? 'text-white' : 'text-gray-600'} desktop:text-3xl text-3xl cursor-pointer hover:text-sky-500`}
        onClick={() => navigate("/")}
      >
        Back To Home <span className='text-sky-500'>=&gt;</span>
      </div>
    </div>)
}