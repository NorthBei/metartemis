import { Head, Html, Main, NextScript } from 'next/document';

const GA_ID = process.env.NODE_ENV === 'production' ? 'G-XQB8HXJ2MY' : '';

function Document() {
  return (
    <Html lang="zh">
      <Head>
        <meta
          name="description"
          content="Metartemis providing NFT marketing service, including NFT consulting, marketing project planning, Dapps development, NFT design and creation."
        />
        {/* i18n */}
        <link
          rel="alternate"
          hrefLang="zh-TW"
          href="https://metartemis.co/?lang=zh"
        />
        <link
          rel="alternate"
          hrefLang="en-US"
          href="https://metartemis.co/?lang=en"
        />
        {/* Google Font */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Ubuntu&display=swap"
          rel="stylesheet"
        />
        {/* facebook open grahp */}
        <meta
          property="og:title"
          content="Metartemis | Best NFT marketing solution"
        />
        <meta
          name="og:description"
          content="The best NFT marketing total solution in crypto world, fire your NFT with us"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://metartemis.co" />
        <meta
          property="og:image"
          content="https://metartemis.co/images/og_image.png"
        />
        <meta
          name="description"
          content="The best NFT marketing solution in crypto world, fire your NFT with us"
        />
        {/* favion */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicon/safari-pinned-tab.svg"
          color="#7e2b89"
        />
        <meta name="msapplication-TileColor" content="#7e2b89" />
        <meta name="theme-color" content="#7e2b89" />
        {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: ` window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
  
            gtag('config', '${GA_ID}');`,
          }}
        ></script>
        {/* JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Corporation',
              name: 'Metartemis',
              url: 'https://metartemis.co/',
              logo: '',
              alternateName: 'Metartemis | Best NFT marketing solution',
              contactPoint: [
                {
                  '@type': 'ContactPoint',
                  telephone: '',
                  contactType: 'sales',
                  areaServed: ['US', 'TW'],
                  availableLanguage: ['en', 'zh-Hant', 'zh-Hans'],
                },
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': ['SoftwareApplication', 'WebApplication'],
              name: 'Metartemis',
              operatingSystem: 'Ethereum, Polygon, Solana',
              applicationCategory: 'BusinessApplication',
            }),
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default Document;
