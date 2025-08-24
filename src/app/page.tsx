import Main from "@/components/Home/Main";
import { libData } from "@/lib/data";
import { generateMetadata } from "@/utils/meta";

export const metadata = generateMetadata({
  title: libData?.meta?.Home?.title,
  description: libData?.meta?.Home?.description,
  canonical: libData?.meta?.Home?.canonical,
});

export default function Home() {
  return <Main />;
}
