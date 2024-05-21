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

      <section className="featured-articles mb-8 mt-3">
        <h2 className="text-2xl font-semibold mb-4">Artigos em Destaque</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Add placeholders or links to actual articles here */}
          <article className="rounded-lg shadow-md overflow-hidden">
            <div className="p-4">
              <h3 className="text-lg font-medium mb-2">O surgimento das IA's generativas</h3>
              <p className="text-base text-gray-700 line-clamp-3">
                Big Techs investem pesado em criação dos chatbot's com Inteligência Artificial
              </p>
              <a href="#" className="text-blue-500 hover:text-blue-700">Saiba Mais</a>
            </div>
          </article>
          <article className="rounded-lg shadow-md overflow-hidden">
            <div className="p-4">
              <h3 className="text-lg font-medium mb-2">Controle das máquinas com a mente</h3>
              <p className="text-base text-gray-700 line-clamp-3">
                Neuralink faz 1° implante de chip cerebral em humano
              </p>
              <a href="#" className="text-blue-500 hover:text-blue-700">Saiba Mais</a>
            </div>
          </article>
        </div>
      </section>

    </main>
  );
}
