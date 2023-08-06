import { Html, Head, Main, NextScript } from 'next/document'


export default function Document() {
  return (
    <Html lang="en">
      <Head >
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
        <meta name="msapplication-TileColor" content="#da532c"/>
        <meta name="theme-color" content="#ffffff"/>
        <meta name="keywords" content="prompt, gpt-3, dall-e, ai, midjourney, stable diffusion, marketplace, buy, sell"></meta>
        <meta name="description" content="A marketplace for quality DALL·E, Midjourney, ChatGPT, Stable Diffusion &amp; GPT Prompts. Find the best prompts, produce better results, save on API costs, make money selling prompts."></meta>
        
        <meta property="og:description" content="A marketplace for quality DALL·E, Midjourney, ChatGPT, Stable Diffusion &amp; GPT Prompts. Find the best prompts, produce better results, save on API costs, make money selling prompts." />
        <meta property="og:image" content="/ogimg.png"/>
        <meta property="og:image:width" content="256"/>
        <meta property="og:image:height" content="256"/>

        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:title" content="Prompt Works"/>  
        <meta name="twitter:description" content="A marketplace for quality DALL·E, Midjourney, ChatGPT, Stable Diffusion &amp; GPT Prompts. Find the best prompts, produce better results, save on API costs, make money selling prompts." />
        <meta name="twitter:image" content="/ogimg.png" />
      </Head>
      <body >
        <Main />
        <NextScript />
      
      </body>
    </Html>
  )
}
