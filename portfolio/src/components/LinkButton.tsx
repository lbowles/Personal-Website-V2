import Link from "next/link";

interface StyledLinkProps {
  href: string;
  children: React.ReactNode;
}

const StyledLink: React.FC<StyledLinkProps> = ({ href, children }) => {
  return (
    <Link href={href}>
      <button className="bg-black h-[20px] rounded-full block m-0 px-3  text-white text-sm font-normal hover:bg-gray-700 hover:pointer">
        {children}
      </button>
    </Link>
  );
};

export default StyledLink;
