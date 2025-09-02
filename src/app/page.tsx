"use client";

import Image from "next/image";
import { differenceInCalendarDays } from 'date-fns';
import { TARGET_DATE } from "../utils/constants";
import Confetti from 'react-confetti';

export default function Home() {
  const today = new Date();
  const daysRemaining = differenceInCalendarDays(TARGET_DATE, today);

  const message = daysRemaining <= 0
    ? "O Chagas chegou!"
    : `Faltam ${daysRemaining} dias para o Chagas chegar!`;

  const showConfetti = daysRemaining <= 0;

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-center">
        {showConfetti && <Confetti />}
        <div className="flex flex-col items-center">
          <Image
            src="/fck.gif"
            alt="Next.js logo"
            width={180}
            height={38}
            priority
          />
        </div>
        <h1 className={`text-center text-4xl font-bold ${showConfetti ? 'bg-gradient-to-r from-blue-500 via-green-500 to-pink-500 bg-clip-text text-transparent animate-rainbow' : 'text-white'}`}>{message}</h1>
      </main>
      <footer className="row-start-3 text-center text-sm text-gray-500 mt-auto">
        Feito com 💙 pelo Sonic
      </footer>
    </div>
  );
}
