import React from "react";
import { Flex, FormControl, FormLabel, Tag, Text, Select, Input, Stack } from "@chakra-ui/core";
import HorrorCard from "@/components/HorrorCard";
import ms from "match-sorter";
import horrorList from "@/data/horrorList.json";
import matchSorter from "match-sorter";

export default function Home() {
  const [query, setQuery] = React.useState();
  const filteredItems = query ? horrorList.filter((horror) => horror.text.includes(query)) : horrorList;
  return (
    <div className="container">
      <main>
        <Flex justify="flex-end" mr={1}>
          <FormControl width="10%" minW="10rem" mr={2}>
            <FormLabel htmlFor="search">Search</FormLabel>
            <Input id="search" placeholder="e.g. Jared" onChange={(e) => setQuery(e.target.value)} />
          </FormControl>
          <FormControl width="10%" minW="10rem">
            <FormLabel htmlFor="filter">Filter</FormLabel>
            <Select id="filter" placeholder="Select year">
              <option value="2020">2020</option>
              <option value="2019">2019</option>
              <option value="2018">2018</option>
              <option value="2017">2017</option>
              <option value="2016">2016</option>
              <option value="2015">Before 2016</option>
            </Select>
          </FormControl>
        </Flex>
        <Flex as="ul" flexWrap="wrap" justifyContent="center" direction="column" alignItems="center">
          {filteredItems.map((horror) => {
            const date = new Date(horror.date);
            return <HorrorCard as="li" horror={horror} key={horror.id} />;
          })}
        </Flex>
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
          width: 100vw;
        }

        main {
          padding: 5rem 0;
          width: 100%;
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
          color: #1e4e8c;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: none;
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

        .card date {
          display: block;
          margin: 0 0 1rem 0;
          font-weight: 600;
        }

        .card p {
          margin: 0;
          font-size: 1rem;
          line-height: 1.5;
          text-decoration: none;
        }

        .card a {
          text-decoration: inherit;
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
    </div>
  );
}
