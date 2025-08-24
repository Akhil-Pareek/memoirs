import PreWedding from "@/components/OurWork/PreWedding";
import { AppAssets } from "@/constants/AppAssets";

export const libData = {
  realWedding: [
    {
      slug: "aarav-meera",
      coupleName: "Aarav x Meera",
      bannerUrl: AppAssets?.aboutUsBanner,
      urls: [
        { src: AppAssets?.discoverOne },
        { src: AppAssets?.discoverTwo },
        { src: AppAssets?.discoverThree },
      ],
    },
    {
      slug: "vihaan-anaya",
      coupleName: "Vihaan x Anaya",
      bannerUrl: AppAssets?.contactUsBanner,
      urls: [
        { src: AppAssets?.discoverOne },
        { src: AppAssets?.discoverTwo },
        { src: AppAssets?.discoverThree },
      ]
    },
    {
      slug: "rohan-ishita",
      coupleName: "Rohan x Ishita",
      bannerUrl: AppAssets?.ourWorkBanner,
      urls: [
        { src: AppAssets?.discoverOne },
        { src: AppAssets?.discoverTwo },
        { src: AppAssets?.discoverThree },
      ]
    },
    {
      slug: "arjun-priya",
      coupleName: "Arjun & Priya",
      bannerUrl: AppAssets?.aboutUsBanner,
      urls: [
        { src: AppAssets?.discoverOne },
        { src: AppAssets?.discoverTwo },
        { src: AppAssets?.discoverThree },
      ],
    },
    {
      slug: "kabir-kiara",
      coupleName: "Kabir & Kiara",
      bannerUrl: AppAssets?.contactUsBanner,
      urls: [
        { src: AppAssets?.discoverOne },
        { src: AppAssets?.discoverTwo },
        { src: AppAssets?.discoverThree },
      ]
    },
    {
      slug: "dev-saanvi",
      coupleName: "Dev & Saanvi",
      bannerUrl: AppAssets?.ourWorkBanner,
      urls: [
        { src: AppAssets?.discoverOne },
        { src: AppAssets?.discoverTwo },
        { src: AppAssets?.discoverThree },
      ]
    },
  ],

  meta: {
    Home: {
      title: "Home | Memoirs",
      description:
        "Memoirs creates timeless wedding films and photography that beautifully capture emotions, love, and celebrations to preserve your special moments forever.",
      canonical: "https://www.memoirs.in",
    },
    OurWork: {
      title: "Our Work | Memoirs",
      description:
        "Explore Memoirs' portfolio of weddings, pre-weddings, and celebrations captured with cinematic storytelling and artistic elegance.",
      canonical: "https://www.memoirs.in/our-work",
    },

    PreWedding:
    {
      slug: "pre-wedding",
      title: "Pre Wedding | Memoirs",
      description:
        "Our pre-wedding shoots capture the chemistry, romance, and raw emotions of couples, creating cinematic memories before the big day.",
      canonical: "https://www.memoirs.in/our-work/pre-wedding",
    },
    RealWedding: {
      slug: "real-wedding",
      title: "Real Wedding | Memoirs",
      description:
        "Experience the beauty of real weddings documented by Memoirs — from heartfelt rituals to grand celebrations, every moment is captured authentically.",
      canonical: "https://www.memoirs.in/our-work/real-wedding",
    },
    WeddingHighlights: {
      slug: "wedding-highlights",
      title: "Wedding Highlights | Memoirs",
      description:
        "Watch curated wedding highlights crafted by Memoirs, blending emotions, traditions, and joyous moments into unforgettable cinematic stories.",
      canonical: "https://www.memoirs.in/our-work/wedding-higlights",
    },


    AboutUs: {
      title: "About Us | Memoirs",
      description:
        "Memoirs is a team of passionate storytellers dedicated to capturing weddings with creativity, elegance, and authenticity to make memories last forever.",
      canonical: "https://www.memoirs.in/about-us",
    },
    ContactUs: {
      title: "Contact Us | Memoirs",
      description:
        "Get in touch with Memoirs to book your wedding photography and films. Let’s discuss how we can capture your most cherished moments beautifully.",
      canonical: "https://www.memoirs.in/contact-us",
    },
  }

};
