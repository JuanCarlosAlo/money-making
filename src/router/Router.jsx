import { Route, Routes } from 'react-router-dom';
import Layout from '../layout/Layout';
import About from '../pages/about/About';

import Contact from '../pages/contact/Contact';
import Home from '../pages/home/Home';
import Pricing from '../pages/pricing/Pricing';

const Router = () => {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<Home />} />
				<Route path='/pricing' element={<Pricing />} />
				<Route path='/about' element={<About />} />
				<Route path='/contact' element={<Contact />} />
			</Route>
		</Routes>
	);
};

export default Router;
