import Banner from "@/components/Banner";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Banner content="현카드" />
      {children}
    </div>
  );
}
