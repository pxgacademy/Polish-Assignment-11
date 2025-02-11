import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import Loading from "../../components/loading/Loading";
import ItemCard from "../allLostAndFoundItems/ItemCard";
import { useAPI_Link } from "../../hooks/useAPI_Link";
import { Link } from "react-router-dom";
import BannerOne from "./BannerOne";
import Slider from "./Slider";
import TipsAndResources from "./TipsAndResources";
import FAQSection from "./FAQ";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import Container from "../../components/container/Container";

const Home = () => {
  const API_Link = useAPI_Link();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const {
    data: items,
    isPending,
    isError,
    error,
  } = useQuery({
    queryKey: ["limited8"],
    queryFn: async () => {
      const { data } = await API_Link.get(`/lost-founds-limited/8`);
      return data;
    },
  });

  if (isPending) return <Loading />;

  if (isError)
    Swal.fire({
      title: "Error fetching data",
      text: error.message,
      icon: "error",
      confirmButtonText: "Try again",
    });

  return (
    <>
      <Helmet>
        <title>Home | Track & Retrieve</title>
      </Helmet>

      <Container paddingX={false} paddingY="pb-16" >
          {/* Banner One */}
          <BannerOne />

          <div className="mt-16">
            <Slider />
          </div>

          <h2 className="text-3xl font-semibold text-center mt-16">
            <span className="text-error">Lost</span> and{" "}
            <span className="text-info">Found</span> Items
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-5 mt-7 px-5 lg:px-10">
            {items.map((item) => (
              <ItemCard key={item._id} item={item} />
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <Link to="/allItems">
              <button className="btn btn-neutral btn-wide">
                View All Items
              </button>
            </Link>
          </div>

          <TipsAndResources />

          <FAQSection />

      </Container>
    </>
  );
};

export default Home;
