import Image from "next/image";
import { link } from "../util/data";

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
    </div>
  );
};

export default Links;
