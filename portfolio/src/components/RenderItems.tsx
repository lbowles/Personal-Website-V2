import { Experience } from "@/util/data";
import Image from "next/image";
import Link from "next/link";

interface RenderItemsProps {
  items: Array<Experience>;
}
const RenderItems: React.FC<RenderItemsProps> = ({ items }) => {
  return (
    <>
      {items.map((item, index) => (
        <div
          className="pb-2 relative transition duration-200 hover:text-white"
          key={index}
        >
          <div className="pl-4 flex items-center text-stone-200">
            <Image
              src={item.img}
              width={20}
              height={20}
              className="mr-2 rounded-md size-5 max-h-5  "
              alt={item.name}
            />
            {`${item.name} [${item.year}]`}
          </div>
          <div className="pb-1 pl-14 mr-6 text-stone-400">{`${item.description}`}</div>
          {item.url && (
            <Link
              href={item.url}
              className="absolute top-0 right-0 mr-2"
              target="_blank"
            >
              <Image
                src="/img/open.svg"
                alt="Item URL"
                width={15}
                height={15}
                className="hover:brightness-200 transition duration-200"
              />
            </Link>
          )}
        </div>
      ))}
    </>
  );
};

export default RenderItems;
