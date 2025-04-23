import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white dark:bg-black shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <Link href="/" className="text-xl font-bold text-green-600">
          Ma Chaîne WhatsApp
        </Link>
        <nav className="space-x-4">
          <Link href="/">Accueil</Link>
          <Link href="/bots">Bots</Link>
          <Link href="/admin" className="text-sm text-gray-500">Admin</Link>
        </nav>
      </div>
    </header>
  )
}