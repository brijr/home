import Image from 'next/image';
import Link from 'next/link';
import Cap from '@/public/1.svg';

// Content Imports
import Projects from '@/lib/projects.json';
import Socials from '@/lib/socials.json';

// Component Imports
import Section from '@/components/Section';

export default function Home() {
	return (
		<main>
			<Section>
				<Link href="/" className='mb-12 block'>
					<Image src={Cap} alt="bridger tower key cap" width={75} className="dark:invert" />
				</Link>
				<h1 className="text-3xl">Bridger Tower</h1>
				<h2>
					Designer and Developer from Salt Lake City, UT. Crafting software and websites using{' '}
					<a className="transition-all border-b border-black dark:border-white hover:pb-1 hover:-mt-1 hover:border-blue-500"
						href="https://figma.com">Figma</a>, {" "}<a className="transition-all border-b border-black dark:border-white hover:pb-1 hover:-mt-1 hover:border-blue-500"
							href="https://nextjs.org">Next.js</a>,{' '}
					<a className="transition-all border-b border-black dark:border-white hover:pb-1 hover:-mt-1 hover:border-blue-500"
						href="https://tailwindcss.com">Tailwind</a>, and{' '}
					<a className="transition-all border-b border-black dark:border-white hover:pb-1 hover:-mt-1 hover:border-blue-500"
						href="https://vercel.com">Vercel</a>.{' '}
				</h2>
			</Section>

			<Section>
				<h3 className="text-xl">Socials</h3>
				<div className="flex gap-2">
					{Socials.map((social, index) => (
						<a
							key={index}
							className="transition-all border-b border-black dark:border-white hover:pb-1 hover:-mt-1 hover:border-blue-500"
							href={social.url}
							target="_blank"
							rel="nopener noreferrer"
						>
							{social.name}
						</a>
					))}
				</div>
			</Section>

			<Section>
				<h3 className="text-xl">Current Projects</h3>
				{Projects.map((project, index) => (
					<div key={index}>
						<h4>{project.title}</h4>
						<p>{project.description}</p>
						<a href={project.href}>{project.linkName}</a>
					</div>
				))}
			</Section>

			<Section>
				<h3 className="text-xl">Recent Components</h3>
				<p>Coming Soon...</p>
			</Section>

			<Section>
				<h3 className="text-xl">Recent Posts</h3>
				<p>Coming Soon...</p>
			</Section>

			<Section>
				<p>
					Send me an email<a href="mailto:bridgertower@gmail.com">here.</a>
				</p>
				<p>
					Created by <a href="https://github.com/brijr">Bridger Tower</a>.
				</p>
			</Section>
		</main>
	);
}
