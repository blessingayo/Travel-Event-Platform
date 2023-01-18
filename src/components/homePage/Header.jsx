import React, {useState} from 'react'
import Box from '@mui/material/Box';
import HotelIcon from '@mui/icons-material/Hotel';
import FlightIcon from '@mui/icons-material/Flight';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import LocalTaxiIcon from '@mui/icons-material/LocalTaxi';
import PersonIcon from '@mui/icons-material/Person';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import "./header.css"
import { useNavigate } from 'react-router-dom';
import {DateRange} from "react-date-range"
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import {format} from "date-fns"


const Header = ({type}) => {
    const [openDate, setOpenDate] = useState(false)
    const [openOptions, setOpenOptions] = useState(false)
        const [options, setOptions] = useState({
        adult: 1,
        children: 0,
        room: 1,
    })
const [destination, setDestination] = useState("")
    const handleOption = (name, operation) => {
        setOptions(prev => {
            return{
                ...prev, [name] :operation === "i"  ? options[name] + 1 : options[name] - 1
            }
        })
    }

    const navigate = useNavigate()

    const handleSearch = () =>{
        navigate("/hotels", {state: {destination, date,options}})
    }

    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'

        }
    ]);
    return (
         <Box component="main" sx={{paddingTop: "30px"  }}>
    
        <div className={type === "list" ? "header listMode" : "header"}>
            <div className="headerContainer">
                <div className='headerList'>
                <div className='headerListItem active'><HotelIcon /> <span>Stays</span></div>
                <div className='headerListItem'><FlightIcon /> <span>Flights</span></div>
                <div  className='headerListItem'><DirectionsCarIcon /> <span>Car rental</span></div>
                <div  className='headerListItem'><HotelIcon /> <span>Attractions</span></div>
                <div  className='headerListItem'><LocalTaxiIcon /> <span>Airport taxis</span></div>
                </div>
            </div>

        { type !== "list" &&
            <>
            <h2 className="headerTitle">A life of discounts? It's Genius.</h2>
            <p className="headerDes">Get rewarded for your travels unlock instant  savings of 10% or move with a free TravelWorld's account </p>
            <button className="headerBtn">Sign in / Register</button>
        <div style={{display: "flex", justifyContent: "center"}}>
            <div className='headerSearch'>
                <div className="headerSearchItem">
                <div className='headerIcon'><HotelIcon />
                <input type="text" placeholder="where are you going" className='headerSearchInput' onChange={(e) => setDestination(e.target.value)} />
                </div>
                </div>

                 <div className="headerSearchItem">
                <div className='headerIcon'><CalendarMonthIcon  />
                    <span onClick={() => setOpenDate(!openDate)} className='headerSearchText'>{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")} `}</span>
                    {openDate &&(<DateRange editableDateInputs={true} onChange={item => setDate([item.selection])}
                    moveRangeOnFirstSelection={false} ranges={date} className='date' minDate={new Date()}  />)}
                </div>
                </div>

                 <div className="headerSearchItem">
                <div className='headerIcon'><PersonIcon/>
                <span onClick={() => setOpenOptions(!openOptions)} className='headerSearchText'>{`${options.adult} adult . ${options.children} children . ${options.room} room`}</span>
                   {openOptions && <div className="options">
                        <div className="optionItem">
                            <span className="optionText">Adult</span>
                            <div className="optionCounter">
                            <button disabled={options.adult <= 1} className="optionCounterButton" onClick={() => handleOption("adult", "d")}>-</button>
                            <span className="optionCounterNumber">{options.adult}</span>
                            <button className="optionCounterButton" onClick={() => handleOption("adult", "i")}>+</button>
                            </div>
                        </div>

                        <div className="optionItem">
                            <span className="optionText">Children</span>
                            <div className="optionCounter">
                            <button disabled={options.children <= 0}  className="optionCounterButton" onClick={() => handleOption("children", "d")}>-</button>
                            <span className="optionCounterNumber">{options.children}</span>
                            <button className="optionCounterButton" onClick={() => handleOption("children", "i")}>+</button>
                            </div>
                        </div>

                        <div className="optionItem">
                            <span className="optionText">Room</span>
                            <div className="optionCounter">
                            <button disabled={options.room <= 1}  className="optionCounterButton" onClick={() => handleOption("room", "d")}>-</button>
                            <span className="optionCounterNumber">{options.room}</span>
                            <button className="optionCounterButton" onClick={() => handleOption("room", "i")}>+</button>
                            </div>
                        </div>
                    </div>}
                </div>
                </div>

                 <div className="headerSearchItem">
                    <button className="headerBtn"onClick={handleSearch}>Search</button>
                </div>
            </div>
       
            </div>
             </>
        }
        </div>
      </Box>
    )
}

export default Header
