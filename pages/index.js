import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ma Chaîne WhatsApp | Accueil</title>
      </Head>
      <main className="min-h-screen bg-black text-white">
        <Header />
        <section className="text-center py-20 px-4">
          <h1 className="text-4xl font-bold mb-4">Bienvenue sur la chaîne WhatsApp</h1>
          <p className="text-lg mb-6 text-gray-300">Découvrez nos bots WhatsApp, automatisés et intelligents</p>
          <Link href="/bots" className="bg-green-600 px-6 py-3 rounded-full text-white hover:bg-green-700 transition">
            Voir les bots
          </Link>
        </section>
        <Footer />
      </main>
    </>
  )
}