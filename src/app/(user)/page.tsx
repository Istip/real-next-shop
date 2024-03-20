import Banner from "@/components/Banner";
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";

export const revalidate = 10;

const bannerQuery = groq`*[_type == 'banner']{image, _id, title} | order(_createdAt asc)`;

const Home = async () => {
  const banners = await client.fetch(bannerQuery);

  return (
    <main className="text-sm overflow-hidden min-h-screen">
      <Banner banners={banners} />
    </main>
  );
};

export default Home;
