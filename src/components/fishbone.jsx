import React from 'react';
// import { FaWineGlassEmpty } from "react-icons/fa6";
import { BiSolidWine } from "react-icons/bi";
// import { FaTableList } from "react-icons/fa6";
import { BiCalendarHeart } from "react-icons/bi";
// import { IoFastFood } from "react-icons/io5";
import { PiForkKnifeFill } from "react-icons/pi";

function Fishbone(props) {
    return (
        <div style={{transform: props.width ? "scale(0.95)" : "scale(0.7)"}}>
            <div className="container fishbone-1 font-weight-bold">
                <div className="third-wording-type2 fishbone-2 white-space-no-wrap">WEDDING TIMELINE</div>
                <div className="vl2 fishbone-3"/>
                <div className='fishbone-ball-1' />
                <div className='fishbone-ball-2'/>
                <div className='fishbone-4'>
                    <div style={{display: "flex"}}>
                        <div className='fishbone-5'><BiCalendarHeart size={29} color={"#4b1e21"}/></div>
                        <div className='fishbone-6'>
                            <div>6.00PM</div>
                            <div className='fishbone-7'></div>
                            <div>RECEPTION</div>
                        </div>
                    </div>
                </div>
                <div className='fishbone-8'>
                    <div style={{display: "flex"}}>
                        <div className='fishbone-9'>
                            <div>6.30PM</div>
                            <div className='fishbone-7'></div>
                            <div>COCKTAILS</div>
                        </div>
                        <div className='fishbone-10'><BiSolidWine size={29} color={"#4b1e21"}/></div>
                    </div>
                </div>
                <div className='fishbone-11'>
                    <div style={{display: "flex"}}>
                        <div className='fishbone-5'><PiForkKnifeFill size={29} color={"#4b1e21"}/></div>
                        <div className='fishbone-6'>
                            <div>7.00PM</div>
                            <div className='fishbone-7'></div>
                            <div>BANQUET</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Fishbone;