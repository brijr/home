import Image from 'next/image';
import Projects from '@/lib/projects.json';
import Socials from '@/lib/socials.json';

export default function Home() {
	return (
		<main>
			<h1>Bridger Tower</h1>
			<h2>
				Designer and Developer from Salt Lake City, UT. Crafting software and websites using <a href="https://figma.com">Figma</a>,
				<a href="https://nextjs.org">Next.js</a>, <a href="https://tailwindcss.com">Tailwind</a>,
				and <a href="https://vercel.com">Vercel</a>.{' '}
			</h2>

			<h3>Socials</h3>
			{Socials.map((social, index) => (
				<div key={index}>
					<a href={social.url}>{social.name}</a>
				</div>
			))}

			<h3>Current Projects</h3>
			{Projects.map((project, index) => (
				<div key={index}>
					<h4>{project.title}</h4>
					<p>{project.description}</p>
					<a href={project.href}>{project.linkName}</a>
				</div>
			))}

			<h3>Recent Components</h3>
			<p>Coming Soon...</p>

			<h3>Recent Posts</h3>
			<p>Coming Soon...</p>

			<p>Send me an email<a href='mailto:bridgertower@gmail.com'>here.</a></p>
		</main>
	);
}
