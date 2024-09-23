type ArtBoardItemContainerProps = {
  children: React.ReactNode;
};

export default function ArtBoardItemContainer({
  children,
}: ArtBoardItemContainerProps): React.ReactNode {
  return (
    <div className="flex h-fit w-full items-center justify-center rounded-3xl bg-slate-200 px-5 py-8">
      {children}
    </div>
  );
}
