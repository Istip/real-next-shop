const PageButtons = () => {
  return (
    <div className="fixed w-16 right-0 top-0 bottom-0 z-50 pointer-events-none flex items-center flex-col gap-2 justify-center">
      <button className="pointer-events-auto border border-stone-200 bg-stone-100 px-3 py-2 rounded-xl hover:border-stone-300 transition-all relative">
        <div className="sr-only">PROFILE</div>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20 21C20 18.2386 16.4183 16 12 16C7.58172 16 4 18.2386 4 21M12 13C9.23858 13 7 10.7614 7 8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8C17 10.7614 14.7614 13 12 13Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <button className="pointer-events-auto border border-stone-200 bg-stone-100 px-3 py-2 rounded-xl hover:border-stone-300 transition-all relative">
        <div className="absolute top-1 right-1 bg-red-500 text-stone-50 text-[10px] font-bold px-1 rounded-full flex items-center justify-center">
          3
        </div>
        <div className="sr-only">CART</div>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_2497_26252)">
            <path
              d="M4 9H20L19.1654 18.1811C19.0717 19.2112 18.208 20 17.1736 20H6.82643C5.79202 20 4.92829 19.2112 4.83464 18.1811L4 9Z"
              stroke="currentColor"
              stroke-width="2"
              stroke-linejoin="round"
            />
            <path
              d="M8 11V8C8 5.79086 9.79086 4 12 4C14.2091 4 16 5.79086 16 8V11"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_2497_26252">
              <rect width="24" height="24" fill="currentColor" />
            </clipPath>
          </defs>
        </svg>
      </button>
    </div>
  );
};

export default PageButtons;
