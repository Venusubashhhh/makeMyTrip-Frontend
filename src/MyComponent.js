import React from 'react';


const MyComponent = () => {

    return (
        <div id='mycomponent' style={{marginTop:''}}>
            <div className="box">
            
                
                <div className="ticket" id='tickett' style={{overflow:'hidden'}}>
                    <span className="airline">Postsnap</span>
                    <span className="airline airlineslip">Postsnap</span>
                    <span className="boarding">Boarding pass</span>
                    <div className="content">
                        <span className="jfk">LHR</span>
                        <span className="plane">
                            {/*?xml version="1.0" ?*/}
                            <svg
                                clipRule="evenodd"
                                fillRule="evenodd"
                                height={60}
                                width={60}
                                imageRendering="optimizeQuality"
                                shapeRendering="geometricPrecision"
                                textRendering="geometricPrecision"
                                viewBox="0 0 500 500"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g stroke="#222">
                                    <line
                                        fill="none"
                                        strokeLinecap="round"
                                        strokeWidth={30}
                                        x1={300}
                                        x2={55}
                                        y1={390}
                                        y2={390}
                                    />
                                    <path
                                        d="M98 325c-9 10 10 16 25 6l311-156c24-17 35-25 42-50 2-15-46-11-78-7-15 1-34 10-42 16l-56 35 1-1-169-31c-14-3-24-5-37-1-10 5-18 10-27 18l122 72c4 3 5 7 1 9l-44 27-75-15c-10-2-18-4-28 0-8 4-14 9-20 15l74 63z"
                                        fill="#222"
                                        strokeLinejoin="round"
                                        strokeWidth={10}
                                    />
                                </g>
                            </svg>
                        </span>
                        <span className="sfo">SFO</span>
                        <span className="jfk jfkslip">LHR</span>
                        <span className="plane planeslip">
                            {/*?xml version="1.0" ?*/}
                            <svg
                                clipRule="evenodd"
                                fillRule="evenodd"
                                height={50}
                                width={50}
                                imageRendering="optimizeQuality"
                                shapeRendering="geometricPrecision"
                                textRendering="geometricPrecision"
                                viewBox="0 0 500 500"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g stroke="#222">
                                    <line
                                        fill="none"
                                        strokeLinecap="round"
                                        strokeWidth={30}
                                        x1={300}
                                        x2={55}
                                        y1={390}
                                        y2={390}
                                    />
                                    <path
                                        d="M98 325c-9 10 10 16 25 6l311-156c24-17 35-25 42-50 2-15-46-11-78-7-15 1-34 10-42 16l-56 35 1-1-169-31c-14-3-24-5-37-1-10 5-18 10-27 18l122 72c4 3 5 7 1 9l-44 27-75-15c-10-2-18-4-28 0-8 4-14 9-20 15l74 63z"
                                        fill="#222"
                                        strokeLinejoin="round"
                                        strokeWidth={10}
                                    />
                                </g>
                            </svg>
                        </span>
                        <span className="sfo sfoslip">SFO</span>
                        <div className="sub-content">
                            <span className="watermark">Postsnap</span>
                            <span className="name">
                                PASSENGER NAME
                                <br />
                                <span>BLOGGS, Joe</span>
                            </span>
                            <span className="flight">
                                FLIGHT N°
                                <br />
                                <span>X3-65C3</span>
                            </span>
                            <span className="gate">
                                GATE
                                <br />
                                <span>11B</span>
                            </span>
                            <span className="seat">
                                SEAT
                                <br />
                                <span>45A</span>
                            </span>
                            <span className="boardingtime">
                                BOARDING TIME
                                <br />
                                <span>8:25PM ON AUGUST 2014</span>
                            </span>
                            <span className="flight flightslip">
                                FLIGHT N°
                                <br />
                                <span>X3-65C3</span>
                            </span>
                            <span className="seat seatslip">
                                SEAT
                                <br />
                                <span>45A</span>
                            </span>
                            <span className="name nameslip">
                                PASSENGER NAME
                                <br />
                                <span>BLOGGS, Joe</span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default MyComponent;
