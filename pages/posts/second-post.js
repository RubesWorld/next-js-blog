import Link from "next/link";
import Head from "next/head";
import Image from "next/image";

const profile = () => {
  return (
    <>
      <Head>
        <title>Profile Page</title>
      </Head>
      <h1>Ruben Ramirez</h1>
      <Image src="/images/ruben.jpg" alt="Ruben" height={144} width={144} />
      <h2>
        <Link href="/">
          <a>Back to Home</a>
        </Link>
      </h2>
    </>
  );
};

export default profile;
