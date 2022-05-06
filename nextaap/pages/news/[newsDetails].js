import Head from "next/head";
import { useRouter } from "next/router";

const NewsDetailsPage = () => {
  const router = useRouter();
  const title = router.query.newsDetails.replaceAll('_', ' ');
  return (
    <>
      <Head>
        <title>{title} | News | Next Aap</title>
        <meta
          name="description"
          content={`${title} | News | NextAap`}
        />
      </Head>
      <h3>{title}</h3>
    </>
  );
};

export default NewsDetailsPage;
