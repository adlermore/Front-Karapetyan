import React, { useContext, useState, useRef, useEffect, memo } from "react";
import '../../assets/scss/_header.scss';
import mainLogo from '../../assets/img/mainLogo.png';
import JsonContext from "../JsonContext/JsonContext";

const Header = () => {

    const { stopListData, setCurrentStop } = useContext(JsonContext);
    const [scrollY, setScrollY] = useState(0);
    const [scrollDirectionUp, setScrollDirectionUp] = useState(false);
    const [searchOpened, setsearchOpened] = useState(false);
    const [isOpen, setOpen] = useState(false);

    const headerRef = useRef(null);
    const SearchRef = useRef(null);

    useEffect(() => {
        const handleBodyClick = () => {
            setsearchOpened(false);
            setOpen(false);
        };

        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > scrollY) {
                setScrollDirectionUp(false);
            } else {
                setScrollDirectionUp(true);
            }
            setScrollY(currentScrollY);
        };

        if (scrollY > 200 && scrollDirectionUp) {
            headerRef.current.classList.remove('header_inline_hide')
        } else if (scrollY > 200 && !scrollDirectionUp) {
            headerRef.current.classList.add('header_inline_hide')
        }
        else {
            headerRef.current.classList.remove('header_inline_hide')
        }

        window.addEventListener('scroll', handleScroll);
        document.body.addEventListener('click', handleBodyClick);

        return () => {
            document.body.removeEventListener('click', handleBodyClick);
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrollY, scrollDirectionUp]);


    const inputToggleSubmit = (e) => {
        e.stopPropagation();
        e.preventDefault();
        if (SearchRef.current) {
            setsearchOpened(!searchOpened)
        }
    }

    const menuOpen = (e) => {
        e.preventDefault();
        e.stopPropagation();
        document.body.classList.add('hidden');
        setOpen(true);
    }

    const menuClose = (e) => {
        e.preventDefault();
        e.stopPropagation();
        document.body.classList.remove('hidden');
        setOpen(false);
    }


    const handleComplete = (inputValue) => {
        setCurrentStop(inputValue)
        console.log(stopListData);
    }

    const handleChange = (e) => {
        handleComplete(e.target.value);
    }

    return (
        <>
            <div className="header_top">
                <div className="custom_container">
                    <a href="/#" className="menu_btn icon-menu" onClick={(e) => menuOpen(e)}> </a>
                    <a href="/#" className="main_logo">
                        <img src={mainLogo} alt="mainLogo" />
                    </a>
                    <div className="search_block" onClick={(e) => e.stopPropagation()}>
                        <div className={searchOpened ? 'search_line opened' : 'search_line'}>
                            <input
                                type="text"
                                ref={SearchRef}
                                placeholder="Search"
                                className="search_input"
                                onChange={(e) => handleChange(e)}
                            />
                            <button className="search_btn" onClick={(e) => { inputToggleSubmit(e) }}> <span className="icon-search"></span> </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={isOpen ? `header_bottom opened` : `header_bottom`} ref={headerRef}  >
                <div className="main_menu" onClick={(e)=>e.stopPropagation()}>
                    <div className="custom_container">
                        <div className="menu_header">
                            <span className="menu_img">
                                <img src={mainLogo} alt="mainLogo" />
                            </span>
                            <a href="#/" className="icon-close menu_close"
                                onClick={(e) => menuClose(e)}
                            > </a>
                        </div>
                        <div className="menu_inner">
                            <div className="navbar_block">
                                <a href="#/">Demos</a>
                                <div className="dropdown_menu">
                                    <button className="dropbtn icon-down">Post</button>
                                    <div className="dropdown-content">
                                        <a href="#/" className="icon-right" >Post Header</a>
                                        <a href="#/" className="icon-right" >Post Layout</a>
                                        <a href="#/" className="icon-right" >Share Buttons</a>
                                        <a href="#/" className="icon-right" >Gallery Post</a>
                                        <a href="#/" className="icon-right" >Video Post</a>
                                    </div>
                                </div>
                                <div className="dropdown_menu">
                                    <button className="dropbtn icon-down">Features</button>
                                    <div className="dropdown-content">
                                        <a href="#/" className="icon-right" >Features Header</a>
                                        <a href="#/" className="icon-right" >Features Layout</a>
                                        <a href="#/" className="icon-right" >Share Buttons</a>
                                        <a href="#/" className="icon-right" >Gallery Features</a>
                                        <a href="#/" className="icon-right" >Video Features</a>
                                    </div>
                                </div>
                                <a href="#/">Categories</a>
                                <a href="#/">Shop</a>
                                <a href="#/">Buy Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default memo(Header);