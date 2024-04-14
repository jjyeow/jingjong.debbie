import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect, useRef} from 'react'
import VisibilitySensor from 'react-visibility-sensor';
import Fishbone from './components/fishbone';
import Countdown from './components/countdown';
import CalendarComponent from './components/calendar';
import Button from './components/button';
import Button2 from './components/button2';
import { MdPlayArrow } from "react-icons/md";
import Modal from './components/modal';
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { PiVinylRecordFill } from "react-icons/pi";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";

function App() {
    const [width, setWidth] = useState(undefined)
    const [widthValue, setWidthValue] = useState(undefined)
    const [heightValue, setHeightValue] = useState(undefined)
    const [clicked, setClicked] = useState(false)
    const [page1Visiblity, setPage1Visibility] = useState(true)
    const [page2Visiblity, setPage2Visibility] = useState(false)
    const [page3Visiblity, setPage3Visibility] = useState(false)
    const [page4Visiblity, setPage4Visibility] = useState(false)
    const [seenPage1, setSeenPage1] = useState(true)
    const [seenPage2, setSeenPage2] = useState(false)
    const [seenPage3, setSeenPage3] = useState(false)
    const [seenPage4, setSeenPage4] = useState(false)
    const [hasWindow, setHasWindow] = useState(false);
    const [modal, setModal] = useState(true)
    const [audio, setAudio] = useState()
    const [playing, setPlaying] = useState(false);
    
    const divRef = useRef();
    const divRef2 = useRef();
    const divRef3 = useRef();
    const divRef4 = useRef();

    const Background='/asset/images/xhsb1.jpeg'
    const Background2='/asset/images/IMG_3265.jpg'
    const Background3='/asset/images/xhsb1.jpeg'
    
    useEffect(() => {
        setAudio(new Audio('/asset/tracks/alwayswithme.mp3'))
        if (typeof window !== "undefined") {
            setHasWindow(true);
        }
        const updateWidthHeight = () => {
          setWidth(window.innerWidth > 600 ? true : false)
          setWidthValue(window.innerWidth)
          setHeightValue(window.innerHeight)
        }
        updateWidthHeight()
        window.removeEventListener('resize', updateWidthHeight)
        window.addEventListener('resize', updateWidthHeight)
        return () => {
            window.removeEventListener('resize', updateWidthHeight)
        }
    }, [])

    useEffect(() => {
        if (audio === undefined || audio === null) {
            return;
        }
        audio.addEventListener('ended', () => setPlaying(false));
        return () => {
            audio.removeEventListener('ended', () => setPlaying(false));
        };
    }, [audio]);

    // useEffect(() => {
    //     if (page1Visiblity && !seenPage1) {
    //         scrollToElement()
    //     }
    // }, [page1Visiblity])

    // useEffect(() => {
    //     if (page2Visiblity && !seenPage2) {
    //         setSeenPage2(true)
    //         scrollToElement2()
    //     }
    // }, [page2Visiblity])

    // useEffect(() => {
    //     if (page3Visiblity && !seenPage3) {
    //         setSeenPage3(true)
    //         scrollToElement3()
    //     }
    // }, [page3Visiblity])

    // useEffect(() => {
    //     if (page4Visiblity && !seenPage4) {
    //         setSeenPage4(true)
    //         scrollToElement4()
    //     }
    // }, [page4Visiblity])

    const scrollToElement = () => {
        const {current} = divRef
        if (current !== null){
            current.scrollIntoView({behavior: "smooth"})
        }
    }

    const scrollToElement2 = () => {
        const {current} = divRef2
        if (current !== null){
            current.scrollIntoView({behavior: "smooth"})
        }
    }

    const scrollToElement3 = () => {
        const {current} = divRef3
        if (current !== null){
            current.scrollIntoView({behavior: "smooth"})
        }
    }

    const scrollToElement4 = () => {
        const {current} = divRef4
        if (current !== null){
            current.scrollIntoView({behavior: "smooth"})
        }
    }

    const handleClose = () => {
        setModal(false)
    }

    return (
        <div style={{overflowX: "hidden", maxWidth: "100%"}}>
            {widthValue < 1000 && (widthValue > heightValue) ?
            <div style={{display: "flex", flexDirection: "column", width: "100vw", height: "100vh", justifyContent: "center", alignItems: "center", fontFamily: "Kurale", fontSize: "1.2rem", textAlign: "center"}}>
                <div className="animation-rotate">
                    <MdOutlinePhoneAndroid />
                </div>
                <div>Make sure your device is in<strong>&nbsp;VERTICAL&nbsp;</strong>view for the best experience!</div>
            </div>
            :
            <>
                <Modal
                    modal={modal}
                    content={
                        <div className="container">
                            <img src={Background3} alt={"background"} 
                                style={{
                                    filter: "blur(1px)", 
                                    opacity: 0.3, 
                                    height: "100vh",
                                }}
                            />
                            <div className='modal-content-1'>
                                <div className='rotating'>
                                    <PiVinylRecordFill color="#4b1e21" size={100} style={{opacity: 0.5}}/>
                                </div>
                            </div>
                            <div className='modal-content-2'>
                                <div className='text-align-center'>
                                    <p className='audio-wording'>Click <strong>YES</strong> to play music!</p>
                                    <div className='text-align-center flex-center'>
                                        <Button2 label={"YES"} action={()=> {audio?.play(); setClicked(true); setModal(false)}}/>
                                        <div style={{width: 10}}/>
                                        <Button2 label={"NO"} action={()=> {setClicked(true); setModal(false)}}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                >
                </Modal>
                {clicked ?
                <div>
                    <div className='flex-center'>
                        <VisibilitySensor
                            partialVisibility
                            onChange={(isVisible) => {
                                setPage1Visibility(isVisible)
                            }}
                        > 
                            <div className="container" ref={divRef}>
                                <div className={page1Visiblity ? 'fade-in-left-section-is-visible' : 'hide'}>
                                    <img src={Background} alt={"background"} className='background-1'/>
                                </div>
                                <div className='page-1-content-1'>
                                    <div className={page1Visiblity ? 'fade-in-right-section-is-visible' : 'hide'}>
                                        {/* old: Ephesis */}
                                        {/* cinzel*/}
                                        {/* bodoni */}
                                        <div className='page-1-content-2' style={{fontSize: width ? 50 : "2.2rem"}}>SAVE the <br/>DATE</div>
                                    </div>
                                </div>
                                <div className='page-1-content-3'>
                                    <div className={page1Visiblity ? 'fade-in-right-section-is-visible' : 'hide'}>
                                        <div className="third-wording">FOR THE WEDDING OF</div>
                                    </div>
                                </div>
                                <div className='page-1-content-4'>
                                    <div className={page1Visiblity ? 'fade-in-right-section-is-visible' : 'hide'}>
                                        <div className='flex-column'>
                                            <div className={width ? 'name-wording3' : 'name-wording'} >J I N G&nbsp;&nbsp;J O N G</div>
                                            <div className={width ? 'name-wording3 padding-left-10 padding-right-10 padding-left-10' : 'name-wording'}>&</div>
                                            <div className={width ? 'name-wording3' : 'name-wording'} >D E B B I E</div>
                                        </div>
                                    </div>
                                </div>
                                <div className='page-1-content-5'>
                                    <div style={{ width: "250px", display: "flex", justifyContent: "space-around", fontWeight: "bold"}} className={page1Visiblity ? 'fade-in-right-section-is-visible' : 'hide'}>
                                        <div className="third-wording" style={{margin: "auto"}}>MAY</div>
                                        <div className='vl'></div>
                                        <div className="third-wording" style={{margin: "auto"}}>
                                            <div>SUN</div>
                                            <div style={{fontSize: "25pt"}}>12</div>
                                        </div>
                                        <div className='vl'></div>
                                        <div className="third-wording" style={{margin: "auto"}}>2024</div>
                                    </div>
                                </div>
                                <div className='page-1-content-6'>
                                    <div className={page1Visiblity ? 'fade-in-right-section-is-visible' : 'hide'}>
                                        <div className="third-wording font-weight-bold white-space-no-wrap">G GLASSHOUSE @ KLANG</div>
                                    </div>
                                </div>
                                <div className='scroll-down'>
                                    <div className={page1Visiblity ? 'fade-in-left-section-is-visible' : 'hide'}>
                                        <MdKeyboardDoubleArrowDown size={24} color="#4b1e21"/>
                                    </div>
                                </div>
                            </div>
                        </VisibilitySensor>
                    </div>
                    <div className="flex-center">
                        <VisibilitySensor
                            partialVisibility
                            onChange={(isVisible) => {
                                setPage2Visibility(isVisible)
                            }}
                        >
                            <div id="test" className='container' ref={divRef2}>
                                <div className={page2Visiblity ? 'fade-in-left-section-is-visible' : ''}>
                                    <img src={Background} alt={"background"} 
                                        className='background-1'
                                    />
                                </div>
                                <div className='page-2-content-1'>
                                    <div className={page2Visiblity ? 'fade-in-right-section-is-visible' : ''}>
                                    <div style={{display: "flex", flexDirection: width ? "row" : "column"}}>
                                        <div className='name-wording2'>J I N G&nbsp;&nbsp;J O N G &nbsp;&nbsp;&&nbsp;&nbsp; D E B B I E</div>
                                    </div>
                                    </div>
                                </div>
                                <div className='page-2-content-2'>
                                    <div className={page2Visiblity ? 'fade-in-right-section-is-visible' : ''}>
                                        <div className="third-wording padding-bottom-5" >NOTHING FANCY,&nbsp;&nbsp;JUST LOVE.</div>
                                        <div className="third-wording padding-bottom-5" >INVITE YOU TO CELEBRATE OUR</div>
                                        <div className="third-wording">MARRIAGE</div>
                                    </div>
                                </div>
                                <div className='page-2-content-3'>
                                    <div
                                        className={page2Visiblity ? `fade-in-right-section-is-visible` : ''}
                                    >
                                        <div className="third-wording-6">
                                            <Fishbone width={width}/>
                                        </div>
                                    </div>
                                </div>
                                <div className='page-2-content-4'>
                                    <div className={page2Visiblity ? 'fade-in-right-section-is-visible' : ''}>
                                        <div className="third-wording font-weight-bold margin-bottom-5">DRESS CODE: FORMAL</div>
                                        <div className="third-wording-small font-weight-bold white-space-no-wrap">-&nbsp;EARTH TONE COLOURS PREFERRED&nbsp;-</div>
                                    </div>
                                </div>
                            </div>
                        </VisibilitySensor>
                    </div>
                    <div className='flex-center'>
                        <VisibilitySensor
                            partialVisibility
                            onChange={(isVisible) => {
                                setPage3Visibility(isVisible)
                            }}
                        >
                            <div className="container" ref={divRef3}>
                                <div className={page3Visiblity ? 'fade-in-section-is-visible' : ''}>
                                    <img src={Background} alt={"background"} 
                                        className="background-1"
                                    />
                                </div>
                                <div className='page-3-content-1'>
                                    <div className={page3Visiblity ? 'fade-in-right-section-is-visible' : ''}>
                                        <div className='third-wording font-weight-bond white-space-no-wrap'>COUNTING DOWN TO ETERNITY</div>
                                    </div>
                                </div>
                                <div className='page-3-content-2'>
                                    <div 
                                        className={page3Visiblity ? 'fade-in-right-section-is-visible' : ''}
                                    >
                                        <div style={{transform: width ? "scale(1)" : "scale(0.9)"}}>
                                            <Countdown width={width}/>
                                        </div>
                                    </div>
                                </div>
                                <div className='page-3-content-3'>
                                    <div className={page3Visiblity ? 'fade-in-right-section-is-visible' : ''}>
                                        <CalendarComponent width={width}/>
                                    </div>
                                </div>
                            </div>
                        </VisibilitySensor>
                    </div>
                    <div className='flex-center'>
                        <VisibilitySensor
                            partialVisibility
                            onChange={(isVisible) => {
                                setPage4Visibility(isVisible)
                            }}
                        >
                            <div className="container" ref={divRef4}>
                                <div className={page4Visiblity ? 'fade-in-section-is-visible' : ''}>
                                    <img src={Background2} alt={"background"} className="background-2"/>
                                </div>
                                <div className='page-4-content-1'>
                                    <div className={page4Visiblity ? 'fade-in-left-section-is-visible' : ''}>
                                        <Button label={"BRIDE"} whatsappLink={"https://wa.me/60127129271"}/>
                                    </div>
                                </div>
                                <div className='page-4-content-2'>
                                    <div className={page4Visiblity ? 'fade-in-right-section-is-visible' : ''}>
                                        <Button label={"GROOM"} whatsappLink={"https://wa.me/60129281428"}/>
                                    </div>
                                </div>
                                <div className='page-4-content-3'>
                                    <div className={page4Visiblity ? 'fade-in-bottom-section-is-visible' : ''}>
                                        <div style={{whiteSpace: "nowrap", color: "black", fontWeight: "bold"}} className='third-wording'>-&nbsp;KINDLY RSVP BY 20th APRIL 2024&nbsp;-</div>
                                    </div>
                                </div>
                            </div>
                        </VisibilitySensor>
                    </div>
                </div>
                : null}
            </>}
        </div>
    );
}

export default App;
