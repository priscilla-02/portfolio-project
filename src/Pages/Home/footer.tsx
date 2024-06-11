import topArrowIcon from '/assets/icons/arrow.svg';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="flex h-auto p-10 bg-slate-600 justify-center align-center items-center">
      <div className="flex ml-auto">
        <div
          className=" desktop:text-2xl text-sm"
          style={{
            fontFamily: 'rato',
          }}
        >
          <p>© 2024 Priscilla Chan</p>
          <p>All Rights Reserved.</p>
        </div>
      </div>

      <button onClick={() => scrollToTop()} className="flex text-black ml-auto">
        <img
          src={topArrowIcon}
          alt="Top Arrow Icon"
          className="border-solid border-black border-2 rounded-full desktop:w-16 desktop:h-16 w-9 h-9 p-1"
        />
      </button>
    </footer>
  );
}
