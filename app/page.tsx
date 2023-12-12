import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main className="relative flex min-h-screen flex-col">
        <section className="flex-1">page accueil</section>
        <Footer />
      </main>
    </>
  );
}
