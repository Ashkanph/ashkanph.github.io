import { useState } from "react"

import Header from './Header';
import SideMenu from './SideMenu';


export default function HeaderSideMenu(props) {
	const [showSideMenu, setShowSideMenu] = useState(false);
    const { title } = props;

	return (
		<>
			<SideMenu show={showSideMenu} setShowSideMenu={setShowSideMenu} />
			<Header title={title} onMenuClick={() => setShowSideMenu(!showSideMenu)} />
		</>
	);
}
