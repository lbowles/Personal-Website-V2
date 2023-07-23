import Image from "next/image";
import { link } from "../util/data";
import LinkButton from "../components/LinkButton";

const Links: React.FC = () => {
  return (
    <div className="flex pt-2">
      {link.map((link, index) => (
        <a
          key={index}
          target="_blank"
          href={link.url}
          className="pr-2 hover:opacity-70 transition duration-200"
        >
          <Image
            src={link.imgSrc}
            alt={link.alt}
            width={20}
            height={20}
            className=""
          />
        </a>
      ))}
      <a
        href="/blog"
        className="bg-black h-[20px] rounded-full block m-0 px-3  text-white text-sm font-normal hover:bg-gray-700 hover:pointer"
      >
        Blog →
      </a>
    </div>
  );
};

export default Links;
