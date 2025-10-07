import { Navbar } from "@/components/pages/landingpage/Navbar";
import Footer from "@/components/pages/landingpage/footer";
export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      {children}
      <Footer />
    </main>
  );
}
