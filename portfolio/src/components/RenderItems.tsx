import { WorkExperience, SideProject } from "@/util/data";
import Image from "next/image";
import open from "@/img/open.svg";

interface RenderItemsProps {
  items: Array<WorkExperience | SideProject>;
  imgAlt: string;
}
const RenderItems: React.FC<RenderItemsProps> = ({ items, imgAlt }) => {
  return (
    <>
      {items.map((item, index) => (
        <div
          className="pb-2 relative transition duration-200 hover:text-white hover:font-bold "
          key={index}
        >
          <div className="pl-4 flex items-center">
            <Image
              src={item.img}
              alt={imgAlt}
              width={15}
              height={15}
              className="mr-2 rounded-sm  "
            />
            {`${item.name} [${item.year}]`}
          </div>
          <div className="pb-1 pl-14 mr-6">{`${item.description}`}</div>
          <a href={item.url} className="absolute top-0 right-0 mr-2">
            <Image
              src={open}
              alt="Work URL"
              width={15}
              height={15}
              className="hover:brightness-200 transition duration-200"
            />
          </a>
        </div>
      ))}
    </>
  );
};

export default RenderItems;
