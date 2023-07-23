import Link from "next/link";

interface LinkButtonProps {
  href: string;
  children: React.ReactNode;
}

const LinkButton: React.FC<LinkButtonProps> = ({ href, children }) => {
  return (
    <Link href={href}>
      <button className="bg-black h-[20px] rounded-full block m-0 px-3  text-white text-sm font-normal hover:bg-gray-700 hover:pointer">
        {children}
      </button>
    </Link>
  );
};

export default LinkButton;
