import { Link } from "gatsby";
import React, { useRef } from "react";
import styled from "styled-components";
import useOnClickOutside from 'use-onclickoutside';

const SideMenuEl =
    styled.nav`
        background-color: #363030;
        position: absolute;
        top: var(--header-height);
        padding-top: 2rem;
        top: 0;
        bottom: 0;
        z-index: 2;
        width: 0;
        overflow-x: hidden; /* Disable horizontal scroll */
        transition: width 0.4s;

        &.width-230 {
            width: 230px !important;

            .dropdown-content {
                border-right: 1px solid #413a3a;
            }
        }


        #top-vertical-menu {
            display: block;
            position: fixed;
            background-color: #363030;
            width: inherit;
            z-index: 2;
            top: var(--header-height);
            white-space: nowrap;
            overflow-y: auto;
            bottom: 0;
            min-height: 100%;
            overflow-x: hidden;

            .menu-link{
                display: flex;
                align-items: center;
                color: #dbd7d7;
                border-bottom: 1px solid #413a3a;
                padding: 12px 16px;
                width: 100%;

                i{
                    padding: 0 7px 0 2px;
                    text-shadow: -1px 0 #000, 0 2px 3px #000, 0px 0 0px #000, 0 -1px #000;
                    color: #dbd7d7;
                    margin-top: 2px;
                    font-size: 18px;
                }

                &.active-menu, &:active, &:focus, &:hover {
                    background-color: #423c3c;
                    text-shadow: none;
                }
            }

            .active-menu{
                background-color: #292424;
            }
        }
    `;

const SideMenu = props => {
    const { show, setShowSideMenu } = props;
    const sideMenuRef = useRef(null);

    useOnClickOutside(sideMenuRef, e => {
        if(e.target.id !== "menu-icon" && e.target.id !== "icon-bars") {
            setShowSideMenu(false);
        }
    });

    const closeSideMenu = _e => setShowSideMenu(false);

    return (
        <SideMenuEl className={`side-menu ${show ? 'width-230' : ''}`} ref={sideMenuRef}>
            <span className="cursor-pointer open-menu">
                <i className="icon-bars"></i>
            </span>
            <div className="dropdown-content" id="top-vertical-menu">
                <Link activeClassName="active-menu" onClick={closeSideMenu} className="menu-link" to="/skills">
                    <i className="icon-check-square"></i>Skills
                </Link>
                <Link activeClassName="active-menu" onClick={closeSideMenu} className="menu-link" to="/book-recommendation">
                    <i className="icon-book"></i>Book recommendation
                </Link>
                <Link activeClassName="active-menu" onClick={closeSideMenu} className="menu-link" to="/notes">
                    <i className="icon-feather"></i>Notes
                </Link>
                <Link activeClassName="active-menu" onClick={closeSideMenu} className="menu-link" to="/blog">
                    <i className="icon-feather"></i>Blog
                </Link>
            </div>
        </SideMenuEl>
    )
}

export default SideMenu;