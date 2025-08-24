import OurWork from "@/components/OurWork/OurWork";
import { libData } from "@/lib/data";
import { generateMetadata } from "@/utils/meta";

export const metadata = generateMetadata({
  title: libData?.meta?.OurWork?.title,
  description: libData?.meta?.OurWork?.description,
  canonical: libData?.meta?.OurWork?.canonical,
});

export default function page() {
  return <OurWork />;
}
