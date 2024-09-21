import ArtBoard from "../components/UI/ArtBoard";
import Layout from "../components/UI/Layout";

export default function FreeForAllFormPage(): React.ReactNode {
  return (
    <Layout>
      <div className="flex h-full w-full items-center justify-center gap-20">
        <ArtBoard />
      </div>
    </Layout>
  );
}
