import React from 'react'
import Head from 'next/head';

export default function Meta() {
    return (
        <Head>
            {/* Primary Meta Tags */}
            <title>Nikola Dimitro Portfolio - Computer Engineering Student</title>
            <meta charSet="utf-8" />
            <meta name="title" content="Nikola Dimitro Portfolio - Computer Engineering Student" />
            <meta name="description"
                content="Nikola Dimitro's Personal Portfolio Website. Made with Ubuntu 20.04 (Linux) theme by Next.js and Tailwind CSS." />
            <meta name="author" content="Nikola Dimitro" />
            <meta name="keywords"
                content="nikola dimitro, nikola dimitro portfolio, linux portfolio, ubuntu portfolio, nikola dimitro computer, nikola dimitro ubuntu portfolio" />
            <meta name="robots" content="index, follow" />
            <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
            <meta name="language" content="English" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="theme-color" content="#E95420" />

            {/* Search Engine */}
            <meta name="image" content="images/logos/fevicon.png" />
            {/* Schema.org for Google */}
            <meta itemProp="name" content="Nikola Dimitro Portfolio - Computer Engineering Student" />
            <meta itemProp="description"
                content="Nikola Dimitro's Personal Portfolio Website. Made with Ubuntu 20.04 (Linux) theme by Next.js and Tailwind CSS." />
            <meta itemProp="image" content="images/logos/fevicon.png" />
            {/* Twitter */}
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:title" content="Nikola Dimitro Portfolio - Computer Engineering Student" />
            <meta name="twitter:description"
                content="Nikola Dimitro's Personal Portfolio Website. Made with Ubuntu 20.04 (Linux) theme by Next.js and Tailwind CSS." />
            <meta name="twitter:site" content="NikolaDimitro" />
            <meta name="twitter:creator" content="NikolaDimitro" />
            <meta name="twitter:image:src" content="images/logos/logo_1024.png" />
            {/* Open Graph general (Facebook, Pinterest & Google+) */}
            <meta name="og:title" content="Nikola Dimitro Portfolio - Computer Engineering Student" />
            <meta name="og:description"
                content="Nikola Dimitro's Personal Portfolio Website. Made with Ubuntu 20.04 (Linux) theme by Next.js and Tailwind CSS." />
            <meta name="og:image" content="images/logos/logo_1200.png" />
            <meta name="og:url" content="https://NikolaDimitro.github.io/" />
            <meta name="og:site_name" content="Nikola Dimitro Personal Portfolio" />
            <meta name="og:locale" content="en_US" />
            <meta name="og:type" content="website" />

            <link rel="icon" href="images/logos/fevicon.svg" />
            <link rel="apple-touch-icon" href="images/logos/logo.png" />
            <link rel="preload" href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap" as="style" />
            <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap" rel="stylesheet"></link>
        </Head>
    )
}
