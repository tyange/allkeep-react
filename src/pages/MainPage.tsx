import { Suspense } from "react";
import { useQuery } from "@tanstack/react-query";

import { axiosClient } from "../api/axiosClient";
import { Utility } from "../types/Utility";
import { Size } from "../constants/Size";

import Layout from "../components/UI/Layout";
import Spinner from "../components/UI/Spinner";

export default function MainPage(): React.ReactNode {
  async function getUtilitiesData(): Promise<Utility[]> {
    const res = await axiosClient.get("/utilities");

    return res.data;
  }

  const { data, isPending, isError } = useQuery<Utility[]>({
    queryKey: ["utilities"],
    queryFn: getUtilitiesData,
  });

  if (isError) {
    return <p>Error Occurred!</p>;
  }

  return (
    <Layout>
      <div className="w-full h-full flex justify-center items-center">
        <div className="w-3/4 h-2/3 rounded-lg">
          <p>MainPage</p>
          <Suspense fallback={<Spinner size={Size.LARGE} />}>
            {!isPending &&
              data &&
              data.map((util) => <p key={util.id}>{util.name}</p>)}
          </Suspense>
        </div>
      </div>
    </Layout>
  );
}
