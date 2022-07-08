import React from 'react'
import Head from 'next/head'

const Headtags = ({ title, desc, keywords }) => {
  return (
    <Head>
      <meta charSet="utf-8" />
      <title>{title}</title>
      <link rel="shortcut icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#000000" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={desc} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={window.location.href} />
      <meta property="og:title" content={desc} />
      <meta property="og:description" content="Contact Description" />
      <meta property="og:image" content="https://res.cloudinary.com/dn5kttwc8/image/upload/v1617961366/hold/jpglogo.jpg" />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={window.location.href} />
      <meta property="twitter:title" content={desc} />
      <meta property="twitter:description" content={desc} />
      <meta property="twitter:image" content="https://res.cloudinary.com/dn5kttwc8/image/upload/v1617961366/hold/jpglogo.jpg" />
    </Head>
  )
}

export default Headtags
