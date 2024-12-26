import { Link, Head, usePage } from "@inertiajs/react";
import React from "react";

export default function Home({ name }) {
  const {component} = usePage();
    return (
        <>
            <Head><title>{component}</title></Head>
            <h1 className="mt-10 text-4xl text-center">
              Welcome to Home page.
            </h1>
        </>
    );
}
