import Banner from "@/components/Banner";
import NewArrival from "@/components/NewArrival";
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";

export const revalidate = 10;

const bannerQuery = groq`*[_type == 'banner']{image, _id, title} | order(_createdAt asc)`;
const newArrivalsQuery = groq`*[_type == 'product' && position == 'New Arrivals']{...} | order(_createdAt asc)`;

const Home = async () => {
  const banners = await client.fetch(bannerQuery);
  const newArrivalProducts = await client.fetch(newArrivalsQuery);

  return (
    <main className="text-sm overflow-hidden min-h-screen">
      <Banner banners={banners} />
      <NewArrival products={newArrivalProducts} />
    </main>
  );
};

export default Home;
