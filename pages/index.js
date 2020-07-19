import Head from "next/head";
import { format, parseISO } from "date-fns";
import horrorList from "../horrorList.json";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Lest We Forget</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital@0;1&family=IBM+Plex+Sans+Condensed:ital@0;1&family=IBM+Plex+Sans:ital,wght@0,100;0,400;0,700;1,100;1,400;1,700&family=IBM+Plex+Serif:ital@0;1&display=swap"
          rel="stylesheet"
        ></link>
      </Head>

      <main>
        <h1 className="title">Lest We Forget The Horrors</h1>
        <p className="description">A catalog of Trump's worst cruelities, collusions, corruptions, and crimes</p>
        <ul className="grid">
          {horrorList.map((horror) => {
            console.log(horror.date);
            //const date = new Date(horror.date);

            return (
              <li className="card" key={horror.id}>
                {/* <h3>{format(date, "MM/dd/yyyy")}</h3> */}

                <p dangerouslySetInnerHTML={{ __html: horror.html }} />
                <span className="category">{horror.categories.join(", ")}</span>
              </li>
            );
          })}
        </ul>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by <img src="/vercel.svg" alt="Vercel Logo" className="logo" />
        </a>
      </footer>

      <style jsx>{`
        .container {
          background-color: #f2f4f8;
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: #0f62fe;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          font-family: "IBM Plex Serif", serif;
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: "IBM Plex Mono", monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-flow: row wrap;
          max-width: 1920px;
          margin-top: 3rem;
        }

        .card {
          background-color: white;
          font-size: 0.875rem;
          margin: 1rem;
          max-width: 70ch;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: transform 0.25s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          transform: scale(1.03);
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1rem;
          line-height: 1.5;
        }

        .card span {
          color: #21272a;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 820px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          color: #121619;
          padding: 0;
          margin: 0;
          font-family: "IBM Plex Sans", sans-serif;
        }

        * {
          box-sizing: border-box;
        }

        ul,
        ol {
          list-style: none;
          padding-inline-start: 0;
        }
      `}</style>
    </div>
  );
}
