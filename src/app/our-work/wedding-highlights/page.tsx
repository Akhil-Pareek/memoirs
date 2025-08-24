import WeddingHighlights from "@/components/OurWork/WeddingHighlights";
import { libData } from "@/lib/data";
import { generateMetadata } from "@/utils/meta";

export const metadata = generateMetadata({
  title: libData?.meta?.WeddingHighlights?.title,
  description: libData?.meta?.WeddingHighlights?.description,
  canonical: libData?.meta?.WeddingHighlights?.canonical,
});

export default function WeddingHighlightsPage() {
  const weddingHighlightsData = libData?.weddingHighlightsData;

  return <WeddingHighlights weddingHighlightsData={weddingHighlightsData} />;
}
