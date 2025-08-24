import Image from "next/image";
import Link from "next/link";

interface IWorkShowcaseCardProps {
  item: any;
  href: any;
}

export default function WorkShowcaseCard({ item,href }: IWorkShowcaseCardProps) {
  return (
    <Link
      href={href}
      // href={`/our-work/${item.slug}`}
      className="w-full group shadow-full relative rounded-2xl border-t-4 border-primaryGolden/60 transition-all duration-300 hover:border-scarletRed overflow-hidden"
    >
      {/* White overlay (left) */}
      <div className="absolute top-0 left-0 h-full w-1/2 bg-white/5 -translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-10"></div>

      {/* White overlay (right) */}
      <div className="absolute top-0 right-0 h-full w-1/2 bg-white/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-10"></div>

      {/* Image Layer */}
      <div className="overflow-hidden relative z-0 w-full">
        <Image
          alt={`${item.label} showcase image`}
          src={item.src}
          width={500}
          height={500}
          className="group-hover:scale-125 transition-transform duration-500 w-full"
        />
      </div>

      {/* Label */}
      <div className="group text-center bg-white w-1/2 py-1.5 rounded-2xl font-semibold transition-all duration-300 text-primaryGolden absolute bottom-[8%] left-1/2 transform -translate-x-1/2 z-20">
        <div className="relative inline-block">
          <span>{item.label}</span>
          <div className="h-[2px] w-2 bg-primaryGolden group-hover:w-full transition-all duration-300 mx-auto"></div>
        </div>
      </div>
    </Link>
  );
}
