/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import Head from 'next/head'

const Products = () => {
  return (
    <div>
      <Head>
        <title>Products</title>
      </Head>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap ">
            {[...Array(16)].map((el, i) => {
              return (
                <Link href={"/products/the-catalyser"} key={i}>
                  <div className="lg:w-1/4 md:w-1/2 p-4 w-full transition-all duration-300 hover:shadow-lg rounded-xl cursor-pointer">
                    <a className="block relative h-48 rounded overflow-hidden">
                      <img
                        alt="ecommerce"
                        className="object-cover object-center w-full h-full block"
                        src="/notfound.png"
                      />
                    </a>
                    <div className="mt-4">
                      <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                        CATEGORY
                      </h3>
                      <h2 className="text-gray-900 title-font text-lg font-medium">
                        The Catalyzer
                      </h2>
                      <p className="mt-1">$16.00</p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
