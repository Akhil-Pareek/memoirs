import { AppAssets } from "@/constants/AppAssets";
import Image from "next/image";
import { IoStarSharp } from "react-icons/io5";

export default function Testimonial() {
  return (
    <section className="bg-warmGray text-darkMutedRed py-28 relative">
      <Image
        src={AppAssets?.leave}
        width={500}
        height={500}
        alt="couple image"
        className="w-52 top-[5%] right-0 absolute"
      />
      <div className="flex justify-between w-[90%] md:w-[95%] xl:w-[80%] mx-auto">
        <div className="md:w-1/2 space-y-5">
          <p className="text-sm font-semibold">TESTIMONIALS</p>
          <p className="text-2xl lg:text-3xl xl::text-5xl tracking-wide font-extrabold xl::leading-16">
            Capturing Love : Your
            <span>
              <br />
            </span>
            Wedding Day Storyteller
          </p>

          <div className="bg-grayishBlue py-16 px-4 xl:px-9 mt-12 space-y-12 md:absolute lg:static md:w-[60%] lg:w-full">
            <p className="text-xl tracking-wide xl:leading-9">
              Working with Annabel was an absolute pleasure. She made us feel
              comfortable and at ease during our photo shoot, resulting in
              beautiful and natural shots that we will treasure forever.{" "}
            </p>
            <div className="flex items-center justify-between">
              <div>
                <p className="lg:text-lg">ADELINE + MARVIN</p>
                <p className="text-sm">20th may, 2023 </p>
              </div>
              <p className="flex gap-1">
                <IoStarSharp />
                <IoStarSharp />
                <IoStarSharp />
                <IoStarSharp />
                <IoStarSharp />
              </p>
            </div>
          </div>
        </div>
        <div className="xl:w-1/2 hidden md:inline">
          <Image
            src={AppAssets?.couple}
            width={500}
            height={500}
            alt="couple image"
            className="w-full h-full border-5 border-white"
          />
        </div>
      </div>
    </section>
  );
}
  // import { AppAssets } from "@/constants/AppAssets";
  // import Image from "next/image";
  // import { IoStarSharp } from "react-icons/io5";

  // export default function Testimonial() {
  //   return (
  //     <section className="bg-warmGray text-darkMutedRed py-28 relative">
  //       <Image
  //         src={AppAssets?.leave}
  //         width={500}
  //         height={500}
  //         alt="couple image"
  //         className="w-52 top-[5%] right-0 absolute"
  //       />
  //       <div className="flex justify-between w-[90%] md:w-[95%] xl:w-[80%] mx-auto">
  //         <div className="md:w-1/2 space-y-5">
  //           <p className="text-sm font-semibold">TESTIMONIALS</p>
  //           <p className="text-2xl lg:text-3xl xl::text-5xl tracking-wide font-extrabold xl::leading-16">
  //             Capturing Love : Your
  //             <span>
  //               <br />
  //             </span>
  //             Wedding Day Storyteller
  //           </p>

  //           <div className="bg-grayishBlue py-16 px-4 xl:px-9 mt-12 space-y-12">
  //             <p className="text-xl tracking-wide xl:leading-9">
  //               Working with Annabel was an absolute pleasure. She made us feel
  //               comfortable and at ease during our photo shoot, resulting in
  //               beautiful and natural shots that we will treasure forever.{" "}
  //             </p>
  //             <div className="flex items-center justify-between">
  //               <div>
  //                 <p className="lg:text-lg">ADELINE + MARVIN</p>
  //                 <p className="text-sm">20th may, 2023 </p>
  //               </div>
  //               <p className="flex gap-1">
  //                 <IoStarSharp />
  //                 <IoStarSharp />
  //                 <IoStarSharp />
  //                 <IoStarSharp />
  //                 <IoStarSharp />
  //               </p>
  //             </div>
  //           </div>
  //         </div>
  //         <div className="xl:w-1/2 hidden md:inline">
  //           <Image
  //             src={AppAssets?.couple}
  //             width={500}
  //             height={500}
  //             alt="couple image"
  //             className="w-full h-full border-5 border-white"
  //           />
  //         </div>
  //       </div>
  //     </section>
  //   );
  // }
