import WeddingHighlights from "@/components/OurWork/WeddingHighlights";
import { AppAssets } from "@/constants/AppAssets";

export default function WeddingHighlightsPage() {
  const weddingHighlightsData = [
    {
      id: 1,
      url: "https://www.youtube.com/embed/XPILTdqn_Z0?autoplay=1",
      title: "Wedding Film 1",
      thumbnail: AppAssets.ourWorkBanner, // Replace with your image
    },
    {
      id: 2,
      url: "https://www.youtube.com/embed/_ebUuqIp7MU?autoplay=1",
      title: "Wedding Film 2",
      thumbnail: AppAssets.contactUsBanner,
    },
    {
      id: 3,
      url: "https://www.youtube.com/embed/CoTXK1jUQn0?autoplay=1",
      title: "Wedding Film 3",
      thumbnail: AppAssets.aboutUsBanner,
    },
  ];

  return <WeddingHighlights weddingHighlightsData={weddingHighlightsData} />;
}
