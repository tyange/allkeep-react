type ArtBoardProps = {
  children: React.ReactNode;
};

export default function ArtBoard({ children }: ArtBoardProps): React.ReactNode {
  return (
    <div className="artboard phone-1 rounded-3xl border border-slate-100 p-5 shadow-md">
      {children}
    </div>
  );
}
