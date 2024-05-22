import Image from "next/image";
import fon from "../../public/images/image.png";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center pt-52">
      <div className="font-bold text-8xl">Dream Team</div>
      <Image src={fon} alt="fon" />
    </main>
  );
}
