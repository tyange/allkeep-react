import ArtBoard from "../components/FreeForAllForm/ArtBoard";
import SideKick from "../components/FreeForAllForm/SideKick";
import Layout from "../components/UI/Layout";

export default function FreeForAllFormPage(): React.ReactNode {
  return (
    <Layout>
      <div className="flex h-full w-full items-center justify-center gap-20">
        <div className="relative">
          <ArtBoard />
          <SideKick />
        </div>
      </div>
    </Layout>
  );
}
