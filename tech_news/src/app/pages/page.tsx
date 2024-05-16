import Image from "next/image";
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import CarouselNews from "../components/CarouselNews";

export default function Home() {
  return (
    <main className="mx-auto">
        <CarouselNews />
        <div className="mt-3 p-4 mx-auto">
          <h1>Esta eh a home page</h1>
        </div>
    </main>
  );
}
