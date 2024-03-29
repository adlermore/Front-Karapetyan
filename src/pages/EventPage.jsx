
import React, { useRef, useEffect, useState } from 'react';
import '../assets/scss/HomePage/_homePage.scss';
import mainSliderImg1 from '../assets/img/home-slider.jpg';
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import gallery1 from '../assets/img/gallery_01.jpg';
import gallery2 from '../assets/img/gallery_02.jpg';
import gallery3 from '../assets/img/gallery_03.jpg';
import gallery4 from '../assets/img/gallery_04.jpg';
import gallery5 from '../assets/img/gallery_05.jpg';
import gallery6 from '../assets/img/gallery_06.jpg';
import { Fancybox as NativeFancybox } from "@fancyapps/ui";
import { BsSearch } from 'react-icons/bs';

const EventPage = () => {

    const [EventName, setEventName] = useState('See Wolf');

    useEffect(() => {
        const element = document.getElementById('curr_container');
        const path = window.location.href;
        const parts = path.split("/");
        const desiredPart = parts.slice(parts.indexOf("eventPage") + 1).join("/");
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        if (desiredPart === 'Wolf') {
            setEventName('See Wolf')
        } else if (desiredPart === 'Lagoon') {
            setEventName('Sea Lagoon')
        } else if (desiredPart === 'Pearl') {
            setEventName('White Pearl')
        }
    }, [])

    function Fancybox(props) {
        const containerRef = useRef(null);
        useEffect(() => {
            const container = containerRef.current;

            const delegate = props.delegate || "[data-fancybox]";
            const options = props.options || {};

            NativeFancybox.bind(container, delegate, options);

            return () => {
                NativeFancybox.unbind(container);
                NativeFancybox.close();
            };
        });

        return <div ref={containerRef}>{props.children}</div>;
    }

    return (
        <div className='event-wrapper' id="curr_container">
            <div className="event_hero" style={{ backgroundImage: `url(${mainSliderImg1})` }}>
                <div className="custom_container">
                    <div className="hero_content">
                        <div className="title_wrapper center_mode">
                            <div className="main_title">Event</div>
                            <div className="background_title">yaht</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="event_section gallery_section">
                <div className="custom_container">
                    <div className="title_wrapper center_mode">
                        <div className="section_title">OVERVIEW</div>
                        <div className="main_title">{EventName}</div>
                        <div className="main_description">Sea Wolf is a perfect combination of luxury and performance</div>
                        <div className="background_title">yaht</div>
                    </div>
                    <Fancybox
                        options={{
                            Carousel: {
                                infinite: false,
                            },
                        }}
                    >
                        <ul className="gallery_list">
                            <li href={gallery1} data-fancybox="gallery">
                                <BsSearch />
                                <img src={gallery1} alt="gallery-img" />
                            </li>
                            <li href={gallery2} data-fancybox="gallery">
                                <BsSearch />
                                <img src={gallery2} alt="gallery-img" />
                            </li>
                            <li href={gallery3} data-fancybox="gallery">
                                <BsSearch />
                                <img src={gallery3} alt="gallery-img" />
                            </li>
                            <li href={gallery4} data-fancybox="gallery">
                                <BsSearch />
                                <img src={gallery4} alt="gallery-img" />
                            </li >
                            <li href={gallery5} data-fancybox="gallery">
                                <BsSearch />
                                <img src={gallery5} alt="gallery-img" />
                            </li >
                            <li href={gallery6} data-fancybox="gallery">
                                <BsSearch />
                                <img src={gallery6} alt="gallery-img" />
                            </li>
                        </ul>
                    </Fancybox>
                </div>
            </div>
        </div>
    )
}

export default EventPage;