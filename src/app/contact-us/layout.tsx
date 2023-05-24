import SearchNavbar from "../search/components/SearchNavbar/SearchNavbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <SearchNavbar />
      {children}
    </div>
  );
}
