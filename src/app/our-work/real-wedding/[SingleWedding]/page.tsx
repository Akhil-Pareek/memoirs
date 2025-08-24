import Banner from "@/components/common/Banner";
import ImageGallery from "@/components/OurWork/ImageGallery";
import { weddingData } from "@/lib/data";

export default async function page({ params }: any) {
  const coupleSlug = (await params)?.SingleWedding;

  const matchedWedding = weddingData?.realWedding.find(
    (item) => item?.slug === coupleSlug
  );

  const { bannerUrl, urls, coupleName }: any = matchedWedding;

  if (!matchedWedding) {
    return (
      <section className="min-h-screen flex justify-center items-center text-red-500">
        <p>No wedding found for "{coupleSlug}"</p>
      </section>
    );
  }

  return (
    <section className="min-h-screen">
      <div>
        <Banner srcUrl={bannerUrl} />
        <div className="px-4 py-10 space-y-8">
          <p className="text-darkMutedRed font-cormorant text-3xl xl:text-5xl mx-auto w-fit">
            {coupleName}
          </p>
          <ImageGallery images={urls} />
        </div>
      </div>
    </section>
  );
}
