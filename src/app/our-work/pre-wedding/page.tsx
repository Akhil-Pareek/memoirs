import PreWedding from "@/components/OurWork/PreWedding";
import { libData } from "@/lib/data";
import { generateMetadata } from "@/utils/meta";

export const metadata = generateMetadata({
  title: libData?.meta?.PreWedding?.title,
  description: libData?.meta?.PreWedding?.description,
  canonical: libData?.meta?.PreWedding?.canonical,
});

export default function page() {
  return <PreWedding />;
}
