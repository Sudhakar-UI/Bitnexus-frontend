"use client"
import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import Homeheader from '../../components/Homeheader';
import Homefooter from '../../components/Homefooter';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faBars } from '@fortawesome/free-solid-svg-icons';
import Mobilemenu from "../../components/Mobilemenu";
import { useSideMenu } from "../../SideMenuProvider"
import Userheader from "../../components/Userheader";
import Link from 'next/link';

const page = () => {
    useEffect(() => {
        document.body.classList.add('innerpagebg');
        return () => {
            document.body.classList.remove('innerpagebg');
            document.body.classList.remove('loginbanner');

        };
    }, []);
    const { openMenu } = useSideMenu();

    return (
        <>
            <div className="mbheadingbox p-3">
                <div className="humberbutton">
                    <div href="#" className="bckbtn mt-0" id="backbtn">
                        <FontAwesomeIcon icon={faArrowLeft} />
                    </div>
                </div>
                <div className='flex-one-cls'>
                    <h2 className="heading-title text-center p-0 m-0">Privacy Policy</h2>
                </div>
                <div className="humberbutton" onClick={openMenu}>
                    <div className="bckbtn mt-0" id="backbtn">
                        <FontAwesomeIcon icon={faBars} />
                    </div>
                </div>
            </div>
            <article className=" innerpage">
                <div className="innerpages">
                    <Container>
                       
                        <div className="panelcontentbox">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic.</p>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic.</p>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic.</p>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic.</p>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic.</p>
                        </div>
                    </Container>
                </div>
            </article>
            <Mobilemenu />



        </>
    )
}

export default page