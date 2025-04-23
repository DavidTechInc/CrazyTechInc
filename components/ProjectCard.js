import Image from 'next/image'
import Link from 'next/link'

export default function ProjectCard({ name, description, image, link, date }) {
  return (
    <div className="bg-white dark:bg-zinc-800 p-4 rounded-xl shadow hover:shadow-lg transition">
      <Image src={image} alt={name} width={400} height={200} className="rounded-md object-cover" />
      <h3 className="mt-2 text-lg font-bold">{name}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-300">{description}</p>
      <p className="text-xs mt-1 text-gray-400">{date}</p>
      <Link href={link} target="_blank" className="mt-2 inline-block text-green-600 hover:underline">
        Voir le bot
      </Link>
    </div>
  )
}