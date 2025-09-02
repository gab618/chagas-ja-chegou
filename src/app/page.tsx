import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-center">
        <div className="flex flex-col items-center">
          <Image
            src="/fck.gif"
            alt="Next.js logo"
            width={180}
            height={38}
            priority
          />
        </div>
        <h1 className="text-center text-white text-4xl font-bold">Faltam 14 dias para o Chagas chegar!</h1>
      </main>
    </div>
  );
}
