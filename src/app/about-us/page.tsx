import AboutUs from "@/components/AboutUs";
import { libData } from "@/lib/data";
import { generateMetadata } from "@/utils/meta";

export const metadata = generateMetadata({
  title: libData?.meta?.AboutUs?.title,
  description: libData?.meta?.AboutUs?.description,
  canonical: libData?.meta?.AboutUs?.canonical,
});

export default function page() {
  return <AboutUs />;
}
