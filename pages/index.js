import Head from 'next/head'
import PrimaryHero from '../components/PrimaryHero'
import HeaderNavbar from '../components/HeaderNavbar'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeaderNavbar />
      <PrimaryHero />
      
    </>
  )
}
