import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ProjectCard from '../components/ProjectCard'
import bots from '../data/bots.json'

export default function Bots() {
  return (
    <>
      <Head>
        <title>Nos Bots WhatsApp</title>
      </Head>
      <main className="bg-black text-white min-h-screen">
        <Header />
        <section className="max-w-6xl mx-auto p-6">
          <h2 className="text-3xl font-bold mb-6 text-center">Nos Bots</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {bots.map((bot, index) => (
              <ProjectCard key={index} {...bot} />
            ))}
          </div>
        </section>
        <Footer />
      </main>
    </>
  )
}