import React from 'react';
import './cards.css';
import './Homepage.css';
import AOS from 'aos';
import { Link } from 'react-router-dom';
import img34 from './8116edf7ff5288be69469841ca05fbb8.jpg';


const Home = () => {

    const triggerAOs = async () => {
        AOS.init();
    }

    window.addEventListener('DOMContentLoaded', () => {

        setTimeout(() => {
            <div className="toast" role="alert" aria-live="assertive" aria-atomic="true">
                <div className="toast-header">
                    <img src="..." class="rounded me-2" alt="..." />
                    <strong className="me-auto">Bootstrap</strong>
                    <small>11 mins ago</small>
                    <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                </div>
                <div className="toast-body">
                    Hello, world! This is a toast message.
                </div>
            </div>
        }, 3000);

    })

    return (
        <>
            <div className="navigation-wrap bg-light start-header start-style" id='first'>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <nav className="navbar navbar-expand-md navbar-light">

                                <a className="navbar-brand" target="_blank"><img src={img34}
                                    alt="" /></a>

                                <button className="navbar-toggler" type="button" data-toggle="collapse"
                                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                    aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>

                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav ml-auto py-4 py-md-0">

                                        <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                                            <a className="nav-link" href='#'>Home</a>
                                        </li>

                                        <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                                            <a className="nav-link" href="#">About</a>
                                        </li>
                                        <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                                            <a className="nav-link" href="#">Explore</a>
                                        </li>
                                        <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                                            <a className="nav-link" href="#">Help</a>
                                        </li>

                                        <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                                            <a className="nav-link" href="#"><input className="form-control " type="search" placeholder="Search" aria-label="Search" id='search' /></a>
                                        </li>



                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section full-height" id='second'>
                <svg width="100%" height="100%" viewBox="0 0 1440 590" xmlns="http://www.w3.org/2000/svg"
                    className="transition duration-300 ease-in-out delay-150">
                    <defs>
                        <linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%">
                            <stop offset="5%" stop-color="#F78DA7"></stop>
                            <stop offset="95%" stop-color="#8ED1FC"></stop>
                        </linearGradient>
                    </defs>
                    <path id="svg"
                        d="M 0,600 C 0,600 0,200 0,200 C 123.39712918660285,172.38277511961724 246.7942583732057,144.76555023923444 333,165 C 419.2057416267943,185.23444976076556 468.22009569377985,253.32057416267946 558,264 C 647.7799043062201,274.67942583732054 778.3253588516748,227.95215311004787 889,202 C 999.6746411483252,176.04784688995213 1090.4784688995214,170.87081339712918 1179,174 C 1267.5215311004786,177.12918660287082 1353.7607655502393,188.56459330143542 1440,200 C 1440,200 1440,600 1440,600 Z"
                        stroke="none" stroke-width="0" fill="url(#gradient)" fill-opacity="0.53"
                        className="transition-all duration-300 ease-in-out delay-150 path-0"></path>
                    <defs>
                        <linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%">
                            <stop offset="5%" stop-color="#F78DA7"></stop>
                            <stop offset="95%" stop-color="#8ED1FC"></stop>
                        </linearGradient>
                    </defs>
                    <path id="svg2"
                        d="M 0,600 C 0,600 0,400 0,400 C 96.01913875598089,395.33014354066984 192.03827751196178,390.66028708133973 288,406 C 383.9617224880382,421.33971291866027 479.86602870813385,456.6889952153111 567,449 C 654.1339712918661,441.3110047846889 732.4976076555024,390.58373205741617 818,370 C 903.5023923444976,349.41626794258383 996.1435406698565,358.97607655502395 1101,369 C 1205.8564593301435,379.02392344497605 1322.9282296650717,389.511961722488 1440,400 C 1440,400 1440,600 1440,600 Z"
                        stroke="none" stroke-width="0" fill="url(#gradient)" fill-opacity="1"
                        className="transition-all duration-300 ease-in-out delay-150 path-1"></path>
                </svg>
                <div className="absolute-center">
                    <div className="section">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <h1><span id="address">Welcome</span></h1>
                                    <h1><span id="address2">Stranger!!</span></h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section full-height" id='container2'>
                <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 590" xmlns="http://www.w3.org/2000/svg"
                    className="transition duration-300 ease-in-out delay-150">
                    <defs>
                        <linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%">
                            <stop offset="5%" stop-color="#F78DA7"></stop>
                            <stop offset="95%" stop-color="#8ED1FC"></stop>
                        </linearGradient>
                    </defs>
                    <path id='svg3'
                        d="M 0,600 C 0,600 0,200 0,200 C 118.04784688995213,185.1004784688995 236.09569377990425,170.20095693779902 315,167 C 393.90430622009575,163.79904306220098 433.665071770335,172.29665071770336 535,158 C 636.334928229665,143.70334928229664 799.244019138756,106.61244019138755 896,126 C 992.755980861244,145.38755980861245 1023.3588516746411,221.2535885167464 1103,243 C 1182.641148325359,264.7464114832536 1311.3205741626793,232.3732057416268 1440,200 C 1440,200 1440,600 1440,600 Z"
                        stroke="none" stroke-width="0" fill="url(#gradient)" fill-opacity="0.53"
                        className="transition-all duration-300 ease-in-out delay-150 path-0" transform="rotate(-180 720 300)">
                    </path>
                    <defs>
                        <linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%">
                            <stop offset="5%" stop-color="#F78DA7"></stop>
                            <stop offset="95%" stop-color="#8ED1FC"></stop>
                        </linearGradient>
                    </defs>
                    <path id='svg4'
                        d="M 0,600 C 0,600 0,400 0,400 C 100.87081339712918,412.12440191387554 201.74162679425837,424.24880382775115 304,404 C 406.25837320574163,383.75119617224885 509.9043062200957,331.12918660287085 610,327 C 710.0956937799043,322.87081339712915 806.6411483253589,367.23444976076553 900,395 C 993.3588516746411,422.76555023923447 1083.531100478469,433.933014354067 1173,432 C 1262.468899521531,430.066985645933 1351.2344497607655,415.03349282296654 1440,400 C 1440,400 1440,600 1440,600 Z"
                        stroke="none" stroke-width="0" fill="url(#gradient)" fill-opacity="1"
                        className="transition-all duration-300 ease-in-out delay-150 path-1" transform="rotate(-180 720 300)">
                    </path>
                </svg>
                <div className="absolute-center">
                    <div className="section" onMouseOver={triggerAOs}>
                        <div className="container">
                            <div className="row">
                                <div className="col-12" data-aos="fade-down" data-aos-duration="3000">
                                    <h1>Explore Things</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section" id='sex'>
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div>
                                    <div className="container3">
                                        <div className="card" data-aos="fade-right" data-aos-easing="linear"
                                            data-aos-duration="1500">
                                            <div className="box">
                                                <div className="content">
                                                    <h2>01</h2>
                                                    <h3>Hospital Management</h3>
                                                    <p>
                                                        Lorem ipsum dolor sit amet consectetur adipisicing
                                                        elit. Dolorum exercitationem explicabo, quae eaque
                                                        fuga quia adipisci quo? Corporis, in nihil.
                                                    </p>
                                                    <Link to="/hospital">Click</Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card" data-aos="fade-left" data-aos-easing="linear"
                                            data-aos-duration="1500">
                                            <div className="box">
                                                <div className="content">
                                                    <h2>02</h2>
                                                    <h3>User Manaual</h3>
                                                    <p>
                                                        Lorem ipsum dolor sit amet consectetur adipisicing
                                                        elit. Dolorum exercitationem explicabo, quae eaque
                                                        fuga quia adipisci quo? Corporis, in nihil.
                                                    </p>
                                                    <Link to="/userdash">Click</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
