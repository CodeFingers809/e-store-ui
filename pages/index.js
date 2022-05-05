import Head from "next/head";
import Link from "next/link";
import { FaRegHandRock, FaCut } from "react-icons/fa";
import { IoPower, IoDiscOutline } from "react-icons/io5";
import { GiDrill } from "react-icons/gi";
import { MdTexture } from "react-icons/md";

export default function Home() {
  let types = [
    {
      icon: <FaRegHandRock />,
      type: "Hand tools",
      desc: "Hammers, Screw-Drivers, Wrenches, Pliers, Cutters, Saws, etc.",
    },
    {
      icon: <IoPower />,
      type: "Power tools",
      desc: "Drills, Saws, Sanders, Grinders, Heat Guns, Power Drills, Electric Cutters, etc.",
    },
    {
      icon: <GiDrill />,
      type: "Drilling tools",
      desc: "Hand Drills, Hammer Drills, Impact Driver, SDS Hammer Drill, etc.",
    },
    {
      icon: <FaCut />,
      type: "Cutting tools",
      desc: "Cutting Blades, Marble Cutting Blades, Wood Cutting Blades, Chisels, Shears, Hand Saws, etc.",
    },
    {
      icon: <MdTexture />,
      type: "Grinding tools",
      desc: "Angle Grinders, Die Grinders, Surface Grinders, Grinding Wheels, etc.",
    },
    {
      icon: <IoDiscOutline />,
      type: "Abrasives",
      desc: "Cut Off Wheels, Grinding Wheels, Sand Discs, Flap Discs, Cutting Discs, Abrasive Papers, etc.",
    },
  ];
  return (
    <div>
      <Head>
        <title>Mayura Tools</title>
        <meta
          name="description"
          content="Buy hardware and tools for cheap online from Mayura Tools"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <img src="/banner.png" alt="banner" />
      </div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
              Our Products
            </h1>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
              These are the product types that we offer here at Mayura Tools.
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            {types.map((el, i) => {
              return (
                <div key={i} className="xl:w-1/3 md:w-1/2 p-4">
                  <div className="border border-gray-200 p-6 rounded-lg">
                    <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                      {el.icon}
                    </div>
                    <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                      {el.type}
                    </h2>
                    <p className="leading-relaxed text-base">{el.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <button className="flex mx-auto mt-16 text-white bg-indigo-500 drop-shadow-[0_8px_12px_rgba(99,102,241,0.45)] border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            <Link href={"/products"}>
              <a>See all Products</a>
            </Link>
          </button>
        </div>
      </section>
    </div>
  );
}
