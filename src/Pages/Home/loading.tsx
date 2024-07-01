import { useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { LoadingContext } from '../../Hooks/useContext';


export const Loading = () => {
  const { setIsLoading } = useContext(LoadingContext);
  const navigate = useNavigate();
  const [animationEnded, setAnimationEnded] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationEnded(true);
    }, 7000);

    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    setIsLoading(false);
    navigate("/");
  };

  return (
    <div className="h-[1200px] flex flex-col gap-10 items-center tablet:pt-64 pt-40">
      <section className="coffee">
        <div></div>
        <div></div>
        <div></div>
      </section>

      <section className="flex flex-col w-full max-w-[680px]">
        <div className="flex items-center justify-center gap-4 px-4 text-white tablet:text-2xl text-sm">
          <div className="text-sky-500">Level 0</div>
          <div className="underline-container w-full tablet:max-w-[400px] max-w-[220px]">
            <hr className="underline-animation" />
          </div>
          <div className={`text-${animationEnded ? 'sky-500' : 'white'}`}>Level 10</div>
        </div>
      </section>

      <section className="flex flex-col text-start p-4 bg-gray-700">
        <h1
          className=" tablet:leading-10 whitespace-pre-line text-[#c586c0] text-[0.8rem] tablet:text-[1.6rem]">
          <span className="text-[#ffccff]" >const </span><span className="text-[#9cdcfe]">getDeveloperStatus </span>
          <span className="text-[#ffccff]">= </span><span className="text-[#cc66ff]">(</span>
          <span className="text-white">caffeineLevel</span><span className="text-[#ffccff]">: number</span><span className="text-[#cc66ff]">)</span>
          <span className="text-[#ffccff]">=&gt;</span> <span className="text-[#cc66ff]">( </span><span className="text-[#3366ff]">{`{`}</span>
          <br />
          <span className="text-white">priscillaStatus: caffineLevel </span><span className="text-[#ffccff]">&gt;</span> <span className="text-[#dcdcaa]">5</span> <span className="text-[#ffccff]">? </span>
          <span className="text-white">"</span><span className="text-[#dcdcaa]">Coding...</span><span className="text-white">" </span>
          <span className="text-[#ffccff]">: </span>
          <span className="text-white">"</span><span className="text-[#dcdcaa]">BRB</span><span className="text-white">" </span><span className="text-white">,</span>
          <br />
          <span className="text-[#3366ff]">{`}`}</span><span className="text-[#cc66ff]">)</span>
        </h1>
      </section>

      <div
        className="font-['rato'] text-white cursor-pointer hover:text-sky-500"
        onClick={handleClick}>
        Skip Coffee <span className="text-sky-500">=&gt;</span>
      </div>

    </div >
  )
}