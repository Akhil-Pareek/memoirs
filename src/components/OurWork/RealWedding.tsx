import { AppAssets } from "@/constants/AppAssets";
import WorkShowcaseCard from "./WorkShowcaseCard";

export default function RealWedding() {
  const couplesData = [
    {
      id: 1,
      label: "Aarav & Meera",
      slug: "aarav-meera",
      src: AppAssets?.discoverOne,
    },
    {
      id: 2,
      label: "Vihaan & Anaya",
      slug: "vihaan-anaya",
      src: AppAssets?.discoverTwo,
    },
    {
      id: 3,
      label: "Rohan & Ishita",
      slug: "rohan-ishita",
      src: AppAssets?.discoverThree,
    },
    {
      id: 4,
      label: "Arjun & Priya",
      slug: "arjun-priya",
      src: AppAssets?.discoverOne,
    },
    {
      id: 5,
      label: "Kabir & Kiara",
      slug: "kabir-kiara",
      src: AppAssets?.discoverTwo,
    },
    {
      id: 6,
      label: "Dev & Saanvi",
      slug: "dev-saanvi",
      src: AppAssets?.discoverThree,
    },
  ];

  return (
    <section
      className="text-primaryGolden font-cormorant  px-4 pt-30"
      aria-labelledby="realwedding-heading"
      role="region"
    >
      {/* Intro Section */}
      <div className="space-y-6 text-center max-w-5xl mx-auto">
        <h1
          id="realwedding-heading"
          className="text-3xl  md:text-4xl lg:text-5xl font-bold leading-tight text-primaryGolden"
          tabIndex={0}
        >
          Weddings — Where Souls Vow and Journeys Begin
        </h1>
        <p className="text-2xl" tabIndex={0}>
          A single day that echoes through a lifetime.
        </p>
        <article  
          className="text-lg 4xl:text-2xl  text-center space-y-6"
          aria-label="Real wedding description"
        >
          <p tabIndex={0}>
            A wedding is more than a celebration — it’s a sacred moment where two
            lives entwine, two hearts synchronize, and two souls promise to walk
            as one. It marks the beginning of a shared forever, where love becomes
            not just a feeling, but a commitment — quiet, fierce, and enduring.
          </p>
          <p tabIndex={0}>
            In the embrace of a spouse, we find not only companionship, but
            courage. Not just laughter, but refuge. A partner is the mirror of our
            spirit, the keeper of our dreams, and the silent strength through
            every season of life.
          </p>
          <p tabIndex={0} className="italic">
            Love is not always loud. Sometimes, it’s the way they wait at the
            door, the way they remember your silences, or the way they hold your
            trembling hand without a word.
          </p>
          <p tabIndex={0}>
            We believe every wedding holds magic — not in the grandeur of the
            venue, but in the unspoken glances, the trembling vows, and the tears
            held back by fathers. Here, we capture not just images, but the
            invisible thread that ties two lives together. Let your love story
            live through our lens — honest, heartfelt, and timeless.
          </p>
        </article>
      </div>

      {/* Grid of couples */}
      <section
        className="py-10 grid md:grid-cols-2 xl:grid-cols-3 4xl:grid-cols-4 gap-6 xl:w-[85%] mx-auto"
        aria-label="Real wedding couples showcase"
      >
        {couplesData.map((item, index) => (
          <WorkShowcaseCard href={`/our-work/real-wedding/${item?.slug}`} item={item} key={index} />
        ))}
      </section>
    </section>
  );
}
