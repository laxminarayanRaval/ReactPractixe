import Head from "next/head";
import Link from "next/link";

const NewsPage = () => {
  const data = [
    "How to make things Happens",
    "Who cares about Reels",
    "When Gold Found on Planet Earth",
    "Making things possible without knowing",
  ];
  return (
    <>
      <Head>
        <title>News | Next Aap</title>
        <meta name="description" content="News | NextAap" />
      </Head>
      <h3>News Page</h3>
      <ul>
        {data.map((ele) => (
          <li>
            <Link href={`news/${ele.replaceAll(" ", "_")}`}>{ele}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default NewsPage;
