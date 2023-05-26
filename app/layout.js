import './globals.css';

export const metadata = {
	title: 'Bridger Tower | Designer and Developer',
	description:
		'Bridger Tower is a designer and developer from Salt Lake City, UT. Crafting software and websites using Next.js, Tailwind, and Vercel.'
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className="p-8">{children}</body>
		</html>
	);
}
