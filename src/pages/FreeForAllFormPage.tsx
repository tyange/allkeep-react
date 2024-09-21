import { useState } from "react";

import Layout from "../components/UI/Layout";
import ArtBoard from "../components/FreeForAllForm/ArtBoard";
import SideKick from "../components/FreeForAllForm/SideKick";

export default function FreeForAllFormPage(): React.ReactNode {
  const [elementsInForm, setElementsInForm] = useState<React.ReactNode[]>([]);

  function addElement(elm: React.ReactNode): void {
    setElementsInForm((prevElements) => [...prevElements, elm]);
  }

  return (
    <Layout>
      <div className="flex h-full w-full items-center justify-center gap-20">
        <div className="relative">
          <ArtBoard>{elementsInForm}</ArtBoard>
          <SideKick addElement={addElement} />
        </div>
      </div>
    </Layout>
  );
}
