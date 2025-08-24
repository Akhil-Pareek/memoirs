import ContactUs from "@/components/ContactUs/ContactUs";
import { libData } from "@/lib/data";
import { generateMetadata } from "@/utils/meta";

export const metadata = generateMetadata({
  title: libData?.meta?.ContactUs?.title,
  description: libData?.meta?.ContactUs?.description,
  canonical: libData?.meta?.ContactUs?.canonical,
});

export default function page() {
  return <ContactUs />;
}
