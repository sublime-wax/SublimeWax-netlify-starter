import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>SublimeWax</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Boutique de tenue Africaine en ligne" />
        <p className="description">
          SublimeWax vous propose des tenues africaines: Robe africaine, jupe africaine, des bombers,
          des hauts africians, des pantalons africians dans des tissus wax 100% en coton.
        </p>
        <p className="description">
          Chaque pièce est unique et confectionné à la main dans nos differents ateliers.Nous choissisions des tissus wax de grande qualité et aux motifs tendances
        </p>
         <p className="description">
          Decouvrez sans plus tarder dans notre boutique:
         </p>
    
      </main>

      <Footer />
    </div>
  )
}
