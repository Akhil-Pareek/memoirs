// components/ImageGallery.tsx
import Image from "next/image";

type ImageItem = {
  src: string;
  alt?: string;
};

type Props = {
  images: ImageItem[];
};

export default function ImageGallery({ images }: Props) {
  return (
    <div className="flex flex-wrap">
      {images.map((img, index) => (
        <div key={index} className={`relative w-full h-full `}>
          <Image
            src={img.src}
            alt={img.alt || `Gallery Image ${index + 1}`}
            width={1000}
            height={1000}
            className="object-contain rounded-lg"
            sizes="(max-width: 768px) 100vw, 33vw"
            priority={index === 0}
          />
        </div>
      ))}
    </div>
  );
}
