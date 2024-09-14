import Layout from "../components/UI/Layout";

export default function MainPage(): React.ReactNode {
  return (
    <Layout>
      <div className="w-full h-full flex justify-center items-center">
        <div className="w-3/4 h-2/3 rounded-lg">
          <p>MainPage</p>
        </div>
      </div>
    </Layout>
  );
}
