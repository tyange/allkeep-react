import Layout from "../components/UI/Layout";
import { axiosClient } from "../api/axiosClient";
import { useQuery } from "@tanstack/react-query";
import { Utility } from "../types/Utility";

export default function MainPage(): React.ReactNode {
  async function getUtilitiesData(): Promise<Utility[]> {
    const res = await axiosClient.get("/utilities");

    return res.data;
  }

  const { data, isPending, isError } = useQuery<Utility[]>({
    queryKey: ["utilities"],
    queryFn: getUtilitiesData,
  });

  if (!data || isPending) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error Occurred!</p>;
  }

  return (
    <Layout>
      <div className="w-full h-full flex justify-center items-center">
        <div className="w-3/4 h-2/3 rounded-lg">
          <p>MainPage</p>
          {data.map((util) => (
            <p key={util.id}>{util.name}</p>
          ))}
        </div>
      </div>
    </Layout>
  );
}
