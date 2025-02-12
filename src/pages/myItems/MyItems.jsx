import { useQuery } from "@tanstack/react-query";
import DataNotFound from "../../components/dataNotFound/DataNotFound";
import useContextValue from "../../hooks/useContextValue";
import Loading from "../../components/loading/Loading";
import Swal from "sweetalert2";
import { useSecureAPI_Link } from "../../hooks/useAPI_Link";
import MyItemsTableRow from "./MyItemsTableRow";
import { Helmet } from "react-helmet";
import Container from "../../components/container/Container";
import SectionHeader from "../../components/container/SectionHeader";

const MyItems = () => {
  const { user } = useContextValue();

  const secureAPI_Link = useSecureAPI_Link();

  const {
    data: items,
    isPending,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ["my_items"],
    queryFn: async () => {
      const { data } = await secureAPI_Link.get(
        `/my-items?email=${user.email}`
      );
      return data;
    },
  });

  if (isError)
    Swal.fire({
      title: "Error fetching data",
      text: error.message,
      icon: "error",
      confirmButtonText: "Try again",
    });

  if (isPending) return <Loading />;
  return (
    <>
      <Helmet>
        <title>My Items | Track & Retrieve</title>
      </Helmet>
      <Container>
        <SectionHeader>My Items</SectionHeader>

        {items?.length === 0 ? (
          <div className="max-w-lg mx-auto mt-14 rounded-full overflow-hidden">
            <DataNotFound />
          </div>
        ) : (
          <div className="mt-14">
            <div className="overflow-x-auto">
              <table className="table table-zebra">
                {/* head */}
                <thead className="bg-base-300 dark:bg-gray-950/60 text-darkTwo dark:text-lightTwo text-sm">
                  <tr>
                    <th>#</th>
                    <th>Creator</th>
                    <th>Items Details</th>
                    <th>Date & Location</th>
                    <th>Type & Status</th>
                    <th className="flex justify-center">Actions</th>
                  </tr>
                </thead>

                {/* table body */}
                <tbody>
                  {items.map((item, i) => (
                    <MyItemsTableRow
                      key={i}
                      item={item}
                      i={i}
                      refetch={refetch}
                    />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </Container>
    </>
  );
};

export default MyItems;
