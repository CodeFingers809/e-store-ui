import { useRouter } from "next/router";
import React from "react";
import Head from "next/head";

const Slug = () => {
  let router = useRouter();
  let { slug } = router.query;
  return (
    <div>
      <Head>
        <title>Product Details</title>
      </Head>
      Slug: {slug}
    </div>
  );
};

export default Slug;
