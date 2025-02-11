import { useEffect } from "react";

import './side-menu.scss';

const SideMenu = props => {
    const { show, setShowSideMenu } = props;

    useEffect(() => {
        document.addEventListener('click', function(event) {
            const sideMenu = document.getElementsByClassName('side-menu')[0];
            const menuButton = document.getElementById('icon-bars');
          
            if (!sideMenu.contains(event.target) && event.target !== menuButton) {
                setShowSideMenu(false);
            }
        });
    }, []);

    const closeSideMenu = _e => setShowSideMenu(false);

    return (
        <nav className={`side-menu ${show ? 'width-230' : ''}`}>
            <span className="cursor-pointer open-menu">
                <i className="icon-bars"></i>
            </span>
            <div className="dropdown-content" id="top-vertical-menu">
                <a onClick={closeSideMenu} className="menu-link" href="/skills">
                    <i className="icon-check-square"></i>Skills
                </a>
                <a onClick={closeSideMenu} className="menu-link" href="/blog">
                    <i className="icon-feather"></i>نوشته‌ها
                </a>
            </div>
        </nav>
    )
}

export default SideMenu;
