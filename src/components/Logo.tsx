import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <h1 className="text-xl font-black text-primary-dark center gap-1">
        <div className="w-4 h-4 rounded-full bg-primary" />
        <div>CMRC</div>
      </h1>
    </Link>
  );
};

export default Logo;
