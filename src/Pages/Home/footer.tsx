export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="flex h-auto p-10 bg-slate-600 justify-center align-center items-center">
      <div
        className="flex ml-auto"
        style={{
          fontFamily: 'rato',
          fontWeight: '800',
          fontSize: '20px',
        }}
      >
        © 2024 Priscilla Chan. All Rights Reserved.
      </div>

      <div className="flex text-black p-2 border-solid border-black border-2 rounded-full w-13 h-13 ml-auto">
        <button onClick={() => scrollToTop()}>
          <img
            src="../../../public/assets/icons/arrow.svg"
            className="w-10 h-19"
            alt="Top Arrow Icon"
          />
        </button>
      </div>
    </footer>
  );
}
