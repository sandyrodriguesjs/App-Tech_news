"use client";
import CarouselNews from "../components/CarouselNews";

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      <section className="hero mb-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between">
          <div className="flex-grow">
            <h1 className="text-3xl font-bold leading-tight mb-3 dark:text-white">Bem Vindo ao Tech News Hub!</h1>
            <p className="text-lg text-gray-700 dark:text-white">
              Mantenha-se informado sobre os últimos avanços e tendências que moldam o mundo da tecnologia.
            </p>
          </div>
        </div>
      </section>

      <CarouselNews /> {/* Include the news carousel component */}

      <section className="featured-articles mb-8 mt-3">
        <h2 className="text-2xl font-semibold mb-4 dark:text-white">Artigos em Destaque</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Add placeholders or links to actual articles here */}
          <article className="flex rounded-lg shadow-md overflow-hidden dark:bg-gray-800">
            <img src="/gemini_AI.avif" alt="Descrição da imagem 1" className="w-1/3 object-cover"/>
            <div className="p-4">
              <h3 className="text-lg font-medium mb-2 dark:text-white">O surgimento das IA's generativas</h3>
              <p className="text-base text-gray-700 line-clamp-3 dark:text-white">
                Big Techs investem pesado em criação dos chatbot's com Inteligência Artificial
              </p>
              <a href="#" className="text-blue-500 hover:text-blue-700">Saiba Mais</a>
            </div>
          </article>
          <article className="flex rounded-lg shadow-md overflow-hidden dark:bg-gray-800">
            <img src="/elon_musk.webp" alt="Descrição da imagem 1" className="w-1/3 object-cover"/>
            <div className="p-4">
              <h3 className="text-lg font-medium mb-2 dark:text-white">Controle das máquinas com a mente</h3>
              <p className="text-base text-gray-700 line-clamp-3 dark:text-white">
                Neuralink faz 1° implante de chip cerebral em humano
              </p>
              <a href="#" className="text-blue-500 hover:text-blue-700">Saiba Mais</a>
            </div>
          </article>
        </div>
      </section>

      <section className="latest-news mb-8 mt-3">
        <h2 className="text-2xl font-semibold mb-4 dark:text-white">Últimas Notícias</h2>
        <div className="flex flex-col space-y-4">
          {/* Add placeholders or links to actual news here */}
          <article className="flex rounded-lg shadow-md overflow-hidden dark:bg-gray-800">
            <img src="/spotify.avif" alt="Descrição da imagem 1" className="w-1/3 object-cover"/>
            <div className="p-4">
              <h3 className="text-lg font-medium mb-2 dark:text-white">10 anos do Spotify no Brasil: 5 curiosidades sobre o streaming de música</h3>
              <p className="text-base text-gray-700 line-clamp-3 dark:text-white">
                Spotify completa 10 anos no Brasil, nesta terça-feira (21). App é a maior plataforma de streaming de música do mundo, com mais de 600 milhões de usuários ativos; confira
              </p>
              <a href="#" className="text-blue-500 hover:text-blue-700">Leia Mais</a>
            </div>
          </article>
          <article className="flex rounded-lg shadow-md overflow-hidden dark:bg-gray-800">
            <img src="/google_fotos.avif" alt="Descrição da imagem 1" className="w-1/3 object-cover"/>
            <div className="p-4">
              <h3 className="text-lg font-medium mb-2 dark:text-white">Google Fotos: 6 novos recursos de IA que você precisa testar agora no app</h3>
              <p className="text-base text-gray-700 line-clamp-3 dark:text-white">
                Google Fotos liberou ferramentas de IA para uso gratuito a todos os usuários da plataforma; veja como fazer edições usando recursos como borracha mágica e modo retrato
              </p>
              <a href="#" className="text-blue-500 hover:text-blue-700 ">Leia Mais</a>
            </div>
          </article>
          <article className="flex rounded-lg shadow-md overflow-hidden dark:bg-gray-800">
            <img src="/headset.avif" alt="Descrição da imagem 1" className="w-1/3 object-cover"/>
            <div className="p-4">
              <h3 className="text-lg font-medium mb-2 dark:text-white">Headset gamer Redragon: confira 6 fones bons e baratos para jogar</h3>
              <p className="text-base text-gray-700 line-clamp-3 dark:text-white">
              Redragon Zeus, Hero, Lamia e Diomedes são alguns dos modelos da marca focada em produtos para jogadores; fones com ou sem fio custam a partir de R$ 97 no varejo online
              </p>
              <a href="#" className="text-blue-500 hover:text-blue-700">Leia Mais</a>
            </div>
          </article>
          <article className="flex rounded-lg shadow-md overflow-hidden dark:bg-gray-800">
            <img src="/android_15.avif" alt="Descrição da imagem 1" className="w-1/3 object-cover"/>
            <div className="p-4">
              <h3 className="text-lg font-medium mb-2 dark:text-white">Android 15 pode aumentar a duração da bateria em até 3 horas; entenda2</h3>
              <p className="text-base text-gray-700 line-clamp-3 dark:text-white">
              Android 15 terá recurso que irá ajudar a gerir a bateria e melhorar a vida útil, com possibilidade de aumentar em até 3 horas o funcionamento; confira detalhes
              </p>
              <a href="#" className="text-blue-500 hover:text-blue-700">Leia Mais</a>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
