import RealWedding from "@/components/OurWork/RealWedding";
import { libData } from "@/lib/data";
import { generateMetadata } from "@/utils/meta";

export const metadata = generateMetadata({
  title: libData?.meta?.RealWedding?.title,
  description: libData?.meta?.RealWedding?.description,
  canonical: libData?.meta?.RealWedding?.canonical,
});

export default function page() {
  return <RealWedding />;
}
