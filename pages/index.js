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
          Chaque pièce est unique et confectionné à la main dans nos differents ateliers. Nous choissisions des tissus wax de grande qualité et aux motifs tendances
        </p>
         <p className="description">
          Decouvrez sans plus tarder dans notre boutique:
         </p>
         <p className="description">nos collections de <a href="https://www.sublime-wax.com/collections/robes" target="_blank">robes africaines et robes en wax</a> pour toutes occassions</p>
         
         <p className="description">
          Nous proposons egalement  <a href="https://www.sublime-wax.com/collections/tenue-africaine-pour-couple-sublimewax">des tenues africaines pour couples</a> pour plus de comlicités pour vos ceremonies.
         </p> 
         <a href="https://https://twitter.com/sublimewax" 
          class="twitter-follow-button" 
          data-show-count="false">Follow @sublimewax
         </a>
         <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
    
    
      </main>

      <Footer />
    </div>
  )
}
