import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Admin() {
  return (
    <>
      <Head>
        <title>Admin - Gestion des Bots</title>
      </Head>
      <main className="bg-black text-white min-h-screen">
        <Header />
        <section className="max-w-4xl mx-auto p-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Espace Admin</h2>
          <p className="text-gray-400">Ajoute manuellement tes bots dans le fichier <code>data/bots.json</code></p>
        </section>
        <Footer />
      </main>
    </>
  )
}