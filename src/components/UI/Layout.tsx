import TopNavigation from "./TopNavigation";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps): React.ReactNode {
  return (
    <>
      <TopNavigation />
      {children}
    </>
  );
}
