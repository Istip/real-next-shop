import Link from "next/link";
import Logo from "./Logo";

const StudioNavbar = (props: any) => {
  return (
    <div>
      <div className="w-full border-b border-stone-200 bg-stone-100 p-4 flex items-center justify-between flex-col md:flex-row">
        <Link href="/" className="center text-primary">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_2497_25894)">
              <path
                d="M14 7L9 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9 12L14 17"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_2497_25894">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
          Go back to Website
        </Link>
        <Logo />
        <p className="text-xs">Admin Panel for CMRC</p>
      </div>
      {props.renderDefault(props)}
    </div>
  );
};

export default StudioNavbar;
