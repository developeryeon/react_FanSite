// import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
// import Home from '../Pages/Home';
// import Detail from '../Pages/Detail';
// import EditDetail from '../Pages/EditDetail';
// import fakeData from '../common/Data/fakeData.json';
// import { useState } from 'react';

// export default function Router() {
// 	const [letters, setLetters] = useState(fakeData);

// 	return (
// 		<BrowserRouter>
// 			<Routes>
// 				<Route path="/" element={<Home letters={letters} setLetters={setLetters} />} />
// 				<Route path="detail/:id" element={<Detail letters={letters} />} />
// 				<Route path="editdetail/:id" element={<EditDetail />} />
// 				<Route path="*" element={<Navigate replace to="/" />} />
// 			</Routes>
// 		</BrowserRouter>
// 	);
// }
