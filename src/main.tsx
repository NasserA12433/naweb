import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './cssFiles/index.css';
import { ThemeProvider } from './ldtheme.tsx';
import Navbar from './navbar.tsx';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<ThemeProvider>
			<link rel="icon" type="image/jpg" href="src\assets\favicon_c2.jpg"/>
			<Navbar />
		</ThemeProvider>
	</StrictMode>,
)
