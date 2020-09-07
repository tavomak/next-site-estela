import Head from 'next/head'
import PrimaryHero from '../components/primaryHero'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PrimaryHero />
      
    </>
  )
}
