import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-color1 h-100 pt-10">
      <div className="container mx-auto flex flex-wrap justify-around">
        <div className="mt-10">
          <p className="md:text-6xl 2xl:text-center md:w-80 text-white font-bold">Hi, I am</p>
          <p className="md:text-6xl md:w-100 text-white font-bold">
            <span className="text-green-600">MUHAMMAD SULEMAN</span> and this is my first Next.js Project.
          </p>
        </div>
        <div>
          <Image
            src="/tech.png"
            width={300}
            height={300}
            alt="Picture of the author"
          />
        </div>
      </div>
    </main>
  );
}
