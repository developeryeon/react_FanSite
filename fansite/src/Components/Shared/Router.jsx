import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home';
import Detail from '../Pages/Detail';
import EditDetail from '../Pages/EditDetail';

// import Layout from '../Pages/Layout';

const Router = () => {
	return (
		<BrowserRouter>
			{/* <Layout> */}
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="detail/:id" element={<Detail />} />
				<Route path="editdetail/:id" element={<EditDetail />} />
			</Routes>
			{/* </Layout> */}
		</BrowserRouter>
	);
};

export default Router;
