import SearchNavbar from "./components/SearchNavbar/SearchNavbar";

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <SearchNavbar />
      {children}
    </div>
  );
}
