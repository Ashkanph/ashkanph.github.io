import '../styles/global.css';
import '../styles/myIconFont.css';
import '../styles/common.css';

export default function BaseLayout(props) {
	const { title, description, tags, url } = props;

	return (
		<>
			{/* Global Metadata */}
			<meta charSet="utf-8" />
			<meta name="viewport" content="width=device-width,initial-scale=1" />

			{/* Font preloads */}
			<link rel="preload" href="/fonts/myIconFont.woff" as="font" type="font/woff" crossOrigin="true" />
			<link rel="preload" href="/fonts/sahel.woff" as="font" type="font/woff" crossOrigin="true" />

			{/* Canonical URL */}
			<link rel="canonical" href={url} />

			{/* Primary Meta Tags */}
			<title>{title}</title>
			<meta name="title" content={title} />
			<meta name="description" content={description} />
			{ tags && <meta name="keywords" content={tags} /> }

			<link rel="icon" href="/favicon-32x32.png" sizes="any" />
			<link rel="manifest" href="/manifest.webmanifest" />

			{/* Open Graph / Facebook */}
			<meta property="og:type" content="website" />
			<meta property="og:url" content={url} />
			<meta property="og:title" content={title} />
			<meta property="og:description" content={description} />
		</>
	);
}