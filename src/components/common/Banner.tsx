import Image from "next/image";

interface IBanner {
  srcUrl: string;
}

export default function Banner({ srcUrl }: IBanner) {
  return (
    <section
      className="relative h-screen "
      role="banner"
      aria-label="Hero banner with wedding photography theme"
    >
      <Image
        src={srcUrl}
        alt="Wedding photography banner showing couple and creative visuals"
        fill
        priority
        quality={75}
        sizes="(min-width: 1024px) 100vw"
        className="object-cover z-0"
      />
    </section>
  );
}
