import Image from "next/image";
import Logo from "../assets/Images/RojGarpics.svg";
import LandingImg from "../assets/Images/undraw_remotely.svg";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <header className="max-w-6xl mx-auto px-4 sm:px-8 py-6">
        <Image src={Logo} alt="RojGar Logo" className="max-w-xs" />
      </header>
      <section className="max-w-6xl mx-auto px-4 sm:px-8 h-screen -mt-20 grid  lg:grid-cols-[1fr,500px] items-center">
        <div>
          <h1 className="capitalize text-4xl md:text-5xl font-bold">
            <span className="text-primary">Simplifying </span> Employment,
            Amplifying Progress
          </h1>
          <p className="leading-loose max-w-md mt-4 md:text-1l">
            Empower your job search with Rojgar. Our cutting-edge web
            application transforms the way you track employment opportunities,
            allowing you to focus on what matters most - landing your dream job.
            Stay organized, stay ahead.
          </p>
          <Button className="mt-4" asChild>
            <Link href="/add-job">Get Started..</Link>
          </Button>
        </div>
        <Image
          src={LandingImg}
          alt="Landing Image"
          className="hidden  lg:block "
        />
      </section>
    </main>
  );
}
