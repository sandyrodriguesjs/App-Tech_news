import Image from "next/image";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import CarouselNews from "../components/CarouselNews";

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      <section className="hero mb-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between">
          <div className="flex-grow">
            <h1 className="text-3xl font-bold leading-tight mb-3">Bem Vindo ao Tech News Hub!</h1>
            <p className="text-lg text-gray-700">
              Mantenha-se informado sobre os últimos avanços e tendências que moldam o mundo da tecnologia.
            </p>
          </div>
        </div>
      </section>

      <CarouselNews /> {/* Include the news carousel component */}
    </main>
  );
}
