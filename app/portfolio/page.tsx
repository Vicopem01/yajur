import Natura1 from "@/public/images/Projects/natura-1.png";
import Natura2 from "@/public/images/Projects/natura-2.png";
import Natura3 from "@/public/images/Projects/natura-3.png";
import Arsh1 from "@/public/images/Projects/arsh-1.jpg";
import Arsh2 from "@/public/images/Projects/arsh-2.jpg";
import Citius1 from "@/public/images/Projects/citius-1.png";
import Citius2 from "@/public/images/Projects/citius-2.png";
import Citius3 from "@/public/images/Projects/citius-3.png";
import Citius4 from "@/public/images/Projects/citius-4.png";
import Citius5 from "@/public/images/Projects/citius-5.png";
import Ibz1 from "@/public/images/Projects/ibz1.png";
import Ibz2 from "@/public/images/Projects/ibz2.png";
import Ibz3 from "@/public/images/Projects/ibz3.png";
import Ibz4 from "@/public/images/Projects/ibz4.png";
import Readocracy1 from "@/public/images/Projects/readocracy-1.png";
import Readocracy2 from "@/public/images/Projects/readocracy-2.png";
import Readocracy3 from "@/public/images/Projects/readocracy-3.png";
import Readocracy4 from "@/public/images/Projects/readocracy-4.png";
import { Timeline } from "@/components/UI/timeline";
import Carousel from "@/components/UI/Carousel";
import Link from "next/link";
import Image from "next/image";
import Back from "@/public/svgs/exit.svg";
import { MANAGER_TECHNOLOGIES } from "@/constant";

const data = [
  {
    subTitle: "2023",
    content: (
      <div>
        <p className="text-xl text-neutral-200">Innovation Boost Zone</p>
        <p className="text-sm my-2 text-neutral-300">
          Directed product-market fit sprints and go-to-market execution for
          early-stage deep-tech startups, accelerating roadmap clarity and
          investor-readiness within Toronto Metropolitan University’s flagship
          incubator.
        </p>

        <div className="relative overflow-hidden w-full h-full py-20">
          <Carousel alt="Innovation Boost Zone" slides={[Ibz1, Ibz2, Ibz3, Ibz4]} />
        </div>
      </div>
    ),
  },
  {
    subTitle: "Early 2024",
    content: (
      <div>
        <p className="text-xl text-neutral-200">Go Natura</p>
        <p className="text-sm my-2 text-neutral-300">
          Unlock Government Grants and Transform Your Home! Get Expert Help
          Navigating Home Renovation, Incentives and Funding
        </p>

        <div className="relative overflow-hidden w-full h-full py-20">
          <Carousel alt="Natura" slides={[Natura1, Natura2, Natura3]} />
        </div>
      </div>
    ),
  },
  {
    subTitle: "Early 2023",
    content: (
      <div>
        <p className="text-xl text-neutral-200">READOCRACY</p>
        <p className="text-sm my-2 text-neutral-300">
          Led acquisition and retention strategy for a mindful media consumption
          platform, optimising user growth loops and engagement metrics across
          hybrid B2B2C channels.
        </p>
        <div className="relative overflow-hidden w-full h-full py-20">
          <Carousel
            alt="READOCRACY"
            slides={[Readocracy1, Readocracy2, Readocracy3, Readocracy4]}
          />
        </div>
      </div>
    ),
  },
  {
    subTitle: "Late 2022",
    content: (
      <div>
        <p className="text-xl text-neutral-200">CITIUS COMMUNICATION</p>
        <p className="text-sm my-2 text-neutral-300">
          Drove B2G business. Operational planning and deployment for 5G
          communication and data centres, aligning public sector partnerships
          with telecom infrastructure rollouts and cross-border growth plans.
        </p>
        <div className="relative overflow-hidden w-full h-full py-20">
          <Carousel
            alt="CITIUS"
            slides={[Citius1, Citius2, Citius3, Citius4, Citius5]}
          />
        </div>
      </div>
    ),
  },
  {
    subTitle: "Late 2020",
    content: (
      <div>
        <p className="text-xl text-neutral-200">ARSH ELECTRONICS</p>
        <p className="text-sm my-2 text-neutral-300">
          Managed end-to-end lifecycle of commercial and residential solar power
          systems, leading cross-functional hardware teams and delivering
          scalable B2B energy solutions across urban and semi-urban markets.
        </p>
        <div className="relative overflow-hidden w-full h-full py-20">
          <Carousel alt="ARSH" slides={[Arsh1, Arsh2]} />
        </div>
      </div>
    ),
  },
];

const ProductManager = () => {
  return (
    <div className="relative w-full bg-neutral-950">
      <h3 className="pt-10 text-center md:text-left w-11/12 mx-auto">
        <Link
          href="/"
          className="text-xl flex items-center gap-2 hover:underline"
        >
          <Image src={Back} alt="" width={30} height={30} />
          Go Home
        </Link>
        <br />
      </h3>
      <div className="flex flex-wrap items-center justify-around w-11/12 mx-auto gap-4 p-4">
        {MANAGER_TECHNOLOGIES.map((tech, index) => (
          <Image
            key={index}
            src={tech.src}
            alt={tech.alt}
            width={120}
            height={60}
            className="transition-transform hover:scale-125"
            title={tech.name}
          />
        ))}
      </div>
      <Timeline data={data} />
    </div>
  );
};

export default ProductManager;
