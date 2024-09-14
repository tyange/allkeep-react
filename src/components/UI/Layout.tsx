import TopNavigation from "./TopNavigation";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps): React.ReactNode {
  return (
    <div className="flex flex-col w-full h-screen">
      <TopNavigation />
      <main className="flex-1">{children}</main>
    </div>
  );
}
