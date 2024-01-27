export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div
      className="flex h-auto p-10 bg-slate-600 justify-between items-center"
      style={{
        fontFamily: 'rato',
        fontWeight: '800',
        fontSize: '20px',
      }}
    >
      <div className="flex items-center">
        © Copyright 2024. All Rights Reserved.
      </div>

      <div className="text-black p-2 border-solid border-black border-2 rounded-full w-12 h-12">
        <button onClick={() => scrollToTop()}>
          <img
            src="src/assets/icons/arrow.svg"
            className="w-10 h-19"
            alt="Top Arrow Icon"
          />
        </button>
      </div>
    </div>
  );
}
