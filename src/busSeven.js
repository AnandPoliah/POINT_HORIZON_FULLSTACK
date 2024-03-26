import React from 'react'
import AirlineSeatIndividualSuiteIcon from '@mui/icons-material/AirlineSeatIndividualSuite';
import DoneIcon from '@mui/icons-material/Done';
import ShareLocationIcon from '@mui/icons-material/ShareLocation';
import AlarmOffIcon from '@mui/icons-material/AlarmOff';
import StarIcon from '@mui/icons-material/Star';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import RemoveDoneIcon from '@mui/icons-material/RemoveDone';
import './busSeven.css';
import { Link } from 'react-router-dom';

export default function busSeven(props) {
  return (
    <div>
    <div className='secondfull'>
    <div className='eightypercent2'> 
          <div className='busbooking'>
                  <div className='busbooking1'>
                          <div className='divofdiv'>
                              <div>
                                <div>A-B-C Trvelz</div>
                                <div style={{fontSize:'10px'}}>AC Sleeper(2+1)</div>
                              </div>
                          </div>
                          
                          <div className='divofdiv'>
                              <div>
                                <div style={{fontSize:'10px'}}>{props.dater}</div>
                                <div style={{fontSize:'15px'}}>10.15AM</div>
                              </div>
                          </div>

                          <div className='divofdiv'>
                            <div>
                              <div style={{fontSize:'10px'}}>3H15M</div>
                            </div>
                          </div>

                          <div className='divofdiv'>
                            <div>
                            <div style={{fontSize:'10px'}}>{props.dater}</div>
                              <div>01.30PM</div>
                            </div>
                          </div>

                          <div className='divofdiv'>
                            <div>
                              <div>Rating</div>
                              <div className='nearicon'>
                                <div ><StarIcon style={{height:'15px', width:'15px'}}/></div>
                                <div style={{fontSize:'9px', padding:'3px'}}>4.5</div>
                              </div>
                            </div>
                          </div>

                          <div className='divofdiv'>
                            <div>
                              <div>PRICE</div>
                              <div className='nearicon'>
                                <div ><CurrencyRupeeIcon style={{height:'15px', width:'15px'}}/></div>
                                <div style={{fontSize:'13px', padding:'3px'}}>999</div>
                              </div>
                            </div>
                          </div>
                  </div>

                      
              
                  <div className='busbooking1'>
                          <div className='divofdiv'>
                            <div>
                              <div style={{fontSize:'12px'}}>Avaliable Seats</div>
                              <div className='nearicon'>
                                <div ><AirlineSeatIndividualSuiteIcon style={{height:'20px', width:'20px',paddingTop:'4px'}}/></div>
                                <div style={{fontSize:'9px', padding:'8px'}}>10</div>
                              </div>
                            </div>
                          </div>

                          <div className='divofdiv'>
                            <div>
                              <div style={{fontSize:'12px'}}>Cancellation</div>
                              <div className='nearicon'>
                              <div ><DoneIcon style={{height:'20px', width:'20px',paddingTop:'4px'}}/></div>
                              <div style={{fontSize:'9px', padding:'8px'}}>Avaliable</div>
                            </div>
                            </div>
                          </div>

                          <div className='divofdiv'>
                            <div>
                              <div style={{fontSize:'12px'}}>Cancellation Before</div>
                              <div className='nearicon'>
                              <div ><AlarmOffIcon style={{height:'20px', width:'20px',paddingTop:'4px'}}/></div>
                              <div style={{fontSize:'9px', padding:'8px'}}>5Hrs before Departure</div>
                            </div>
                            </div>
                          </div>

                          <div className='divofdiv'>
                            <div>
                              <div style={{fontSize:'12px'}}>Live Tracking</div>
                              <div className='nearicon'>
                              <div ><ShareLocationIcon style={{height:'20px', width:'20px',paddingTop:'4px'}}/></div>
                              <div style={{fontSize:'9px', padding:'8px'}}>Yes</div>
                            </div>
                            </div>
                    </div>
                  </div>
          </div>

          <div className='buttonforbook'>
                  <Link to={{pathname:'/SeatBook'}}><button className="button-32" >Book Now</button></Link>
          </div>
          
    </div>
</div> 
<div className='secondfull'>
    <div className='eightypercent2'> 
          <div className='busbooking'>
                  <div className='busbooking1'>
                          <div className='divofdiv'>
                              <div>
                                <div>D-E-F Trvelz</div>
                                <div style={{fontSize:'10px'}}>Non-AC Sleeper(2+1)</div>
                              </div>
                          </div>
                          
                          <div className='divofdiv'>
                              <div>
                                <div style={{fontSize:'10px'}}>{props.dater}</div>
                                <div style={{fontSize:'15px'}}>08.15AM</div>
                              </div>
                          </div>

                          <div className='divofdiv'>
                            <div>
                              <div style={{fontSize:'10px'}}>2H45M</div>
                            </div>
                          </div>

                          <div className='divofdiv'>
                            <div>
                            <div style={{fontSize:'10px'}}>{props.dater}</div>
                              <div>11.00AM</div>
                            </div>
                          </div>

                          <div className='divofdiv'>
                            <div>
                              <div>Rating</div>
                              <div className='nearicon'>
                                <div ><StarIcon style={{height:'15px', width:'15px'}}/></div>
                                <div style={{fontSize:'9px', padding:'3px'}}>4.1</div>
                              </div>
                            </div>
                          </div>

                          <div className='divofdiv'>
                            <div>
                              <div>PRICE</div>
                              <div className='nearicon'>
                                <div ><CurrencyRupeeIcon style={{height:'15px', width:'15px'}}/></div>
                                <div style={{fontSize:'13px'}}>1100</div>
                              </div>
                            </div>
                          </div>
                  </div>

                      
              
                  <div className='busbooking1'>
                          <div className='divofdiv'>
                            <div>
                              <div style={{fontSize:'12px'}}>Avaliable Seats</div>
                              <div className='nearicon'>
                                <div ><AirlineSeatIndividualSuiteIcon style={{height:'20px', width:'20px',paddingTop:'4px'}}/></div>
                                <div style={{fontSize:'9px', padding:'8px'}}>30</div>
                              </div>
                            </div>
                          </div>

                          <div className='divofdiv'>
                            <div>
                              <div style={{fontSize:'12px'}}>Cancellation</div>
                              <div className='nearicon'>
                              <div ><RemoveDoneIcon style={{height:'20px', width:'20px',paddingTop:'4px'}}/></div>
                              <div style={{fontSize:'9px', padding:'8px'}}>Not-Avaliable</div>
                            </div>
                            </div>
                          </div>

                          <div className='divofdiv'>
                            <div>
                              <div style={{fontSize:'12px'}}>Cancellation Before</div>
                              <div className='nearicon'>
                              <div ><AlarmOffIcon style={{height:'20px', width:'20px',paddingTop:'4px'}}/></div>
                              <div style={{fontSize:'9px', padding:'8px'}}>Not-Avaliable</div>
                            </div>
                            </div>
                          </div>

                          <div className='divofdiv'>
                            <div>
                              <div style={{fontSize:'12px'}}>Live Tracking</div>
                              <div className='nearicon'>
                              <div ><ShareLocationIcon style={{height:'20px', width:'20px',paddingTop:'4px'}}/></div>
                              <div style={{fontSize:'9px', padding:'8px'}}>Yes</div>
                            </div>
                            </div>
                    </div>
                  </div>
          </div>

          <div className='buttonforbook'>
                  <Link to={{pathname:'/SeatBook'}}><button className="button-32" >Book Now</button></Link>
          </div>
          
    </div>
</div> 
<div className='secondfull'>
    <div className='eightypercent2'> 
          <div className='busbooking'>
                  <div className='busbooking1'>
                          <div className='divofdiv'>
                              <div>
                                <div>G-H-I Trvelz</div>
                                <div style={{fontSize:'10px'}}>Non-AC Sleeper(2+1)</div>
                              </div>
                          </div>
                          
                          <div className='divofdiv'>
                              <div>
                                <div style={{fontSize:'10px'}}>{props.dater}</div>
                                <div style={{fontSize:'15px'}}>12.15PM</div>
                              </div>
                          </div>

                          <div className='divofdiv'>
                            <div>
                              <div style={{fontSize:'10px'}}>3H10M</div>
                            </div>
                          </div>

                          <div className='divofdiv'>
                            <div>
                            <div style={{fontSize:'10px'}}>{props.dater}</div>
                              <div>03.25PM</div>
                            </div>
                          </div>

                          <div className='divofdiv'>
                            <div>
                              <div>Rating</div>
                              <div className='nearicon'>
                                <div ><StarIcon style={{height:'15px', width:'15px'}}/></div>
                                <div style={{fontSize:'9px', padding:'3px'}}>3.9</div>
                              </div>
                            </div>
                          </div>

                          <div className='divofdiv'>
                            <div>
                              <div>PRICE</div>
                              <div className='nearicon'>
                                <div ><CurrencyRupeeIcon style={{height:'15px', width:'15px'}}/></div>
                                <div style={{fontSize:'13px'}}>840</div>
                              </div>
                            </div>
                          </div>
                  </div>

                      
              
                  <div className='busbooking1'>
                          <div className='divofdiv'>
                            <div>
                              <div style={{fontSize:'12px'}}>Avaliable Seats</div>
                              <div className='nearicon'>
                                <div ><AirlineSeatIndividualSuiteIcon style={{height:'20px', width:'20px',paddingTop:'4px'}}/></div>
                                <div style={{fontSize:'9px', padding:'8px'}}>13</div>
                              </div>
                            </div>
                          </div>

                          <div className='divofdiv'>
                            <div>
                              <div style={{fontSize:'12px'}}>Cancellation</div>
                              <div className='nearicon'>
                              <div ><DoneIcon style={{height:'20px', width:'20px',paddingTop:'4px'}}/></div>
                              <div style={{fontSize:'9px', padding:'8px'}}>Avaliable</div>
                            </div>
                            </div>
                          </div>

                          <div className='divofdiv'>
                            <div>
                              <div style={{fontSize:'12px'}}>Cancellation Before</div>
                              <div className='nearicon'>
                              <div ><AlarmOffIcon style={{height:'20px', width:'20px',paddingTop:'4px'}}/></div>
                              <div style={{fontSize:'9px', padding:'8px'}}>6Hrs before Departure</div>
                            </div>
                            </div>
                          </div>

                          <div className='divofdiv'>
                            <div>
                              <div style={{fontSize:'12px'}}>Live Tracking</div>
                              <div className='nearicon'>
                              <div ><ShareLocationIcon style={{height:'20px', width:'20px',paddingTop:'4px'}}/></div>
                              <div style={{fontSize:'9px', padding:'8px'}}>No</div>
                            </div>
                            </div>
                    </div>
                  </div>
          </div>

          <div className='buttonforbook'>
                  <Link to={{pathname:'/SeatBook'}}><button className="button-32" >Book Now</button></Link>
          </div>
          
    </div>
</div> 
<div className='secondfull'>
    <div className='eightypercent2'> 
          <div className='busbooking'>
                  <div className='busbooking1'>
                          <div className='divofdiv'>
                              <div>
                                <div>J-K-L Trvelz</div>
                                <div style={{fontSize:'10px'}}>Non-AC Sleeper(2+1)</div>
                              </div>
                          </div>
                          
                          <div className='divofdiv'>
                              <div>
                                <div style={{fontSize:'10px'}}>{props.dater}</div>
                                <div style={{fontSize:'15px'}}>02.25PM</div>
                              </div>
                          </div>

                          <div className='divofdiv'>
                            <div>
                              <div style={{fontSize:'10px'}}>3H30M</div>
                            </div>
                          </div>

                          <div className='divofdiv'>
                            <div>
                            <div style={{fontSize:'10px'}}>{props.dater}</div>
                              <div>05.55PM</div>
                            </div>
                          </div>

                          <div className='divofdiv'>
                            <div>
                              <div>Rating</div>
                              <div className='nearicon'>
                                <div ><StarIcon style={{height:'15px', width:'15px'}}/></div>
                                <div style={{fontSize:'9px', padding:'3px'}}>4.4</div>
                              </div>
                            </div>
                          </div>

                          <div className='divofdiv'>
                            <div>
                              <div>PRICE</div>
                              <div className='nearicon'>
                                <div ><CurrencyRupeeIcon style={{height:'15px', width:'15px'}}/></div>
                                <div style={{fontSize:'13px'}}>1135</div>
                              </div>
                            </div>
                          </div>
                  </div>

                      
              
                  <div className='busbooking1'>
                          <div className='divofdiv'>
                            <div>
                              <div style={{fontSize:'12px'}}>Avaliable Seats</div>
                              <div className='nearicon'>
                                <div ><AirlineSeatIndividualSuiteIcon style={{height:'20px', width:'20px',paddingTop:'4px'}}/></div>
                                <div style={{fontSize:'9px', padding:'8px'}}>17</div>
                              </div>
                            </div>
                          </div>

                          <div className='divofdiv'>
                            <div>
                              <div style={{fontSize:'12px'}}>Cancellation</div>
                              <div className='nearicon'>
                              <div ><DoneIcon style={{height:'20px', width:'20px',paddingTop:'4px'}}/></div>
                              <div style={{fontSize:'9px', padding:'8px'}}>Avaliable</div>
                            </div>
                            </div>
                          </div>

                          <div className='divofdiv'>
                            <div>
                              <div style={{fontSize:'12px'}}>Cancellation Before</div>
                              <div className='nearicon'>
                              <div ><AlarmOffIcon style={{height:'20px', width:'20px',paddingTop:'4px'}}/></div>
                              <div style={{fontSize:'9px', padding:'8px'}}>4Hrs before Departure</div>
                            </div>
                            </div>
                          </div>

                          <div className='divofdiv'>
                            <div>
                              <div style={{fontSize:'12px'}}>Live Tracking</div>
                              <div className='nearicon'>
                              <div ><ShareLocationIcon style={{height:'20px', width:'20px',paddingTop:'4px'}}/></div>
                              <div style={{fontSize:'9px', padding:'8px'}}>Yes</div>
                            </div>
                            </div>
                    </div>
                  </div>
          </div>

          <div className='buttonforbook'>
                  <Link to={{pathname:'/SeatBook'}}><button className="button-32" >Book Now</button></Link>
          </div>
          
    </div>
</div> 
<div className='secondfull'>
    <div className='eightypercent2'> 
          <div className='busbooking'>
                  <div className='busbooking1'>
                          <div className='divofdiv'>
                              <div>
                                <div>M-N-O-P Trvelz</div>
                                <div style={{fontSize:'10px'}}>Non-AC Sleeper(2+1)</div>
                              </div>
                          </div>
                          
                          <div className='divofdiv'>
                              <div>
                                <div style={{fontSize:'10px'}}>{props.dater}</div>
                                <div style={{fontSize:'15px'}}>04.15PM</div>
                              </div>
                          </div>

                          <div className='divofdiv'>
                            <div>
                              <div style={{fontSize:'10px'}}>2H55M</div>
                            </div>
                          </div>

                          <div className='divofdiv'>
                            <div>
                            <div style={{fontSize:'10px'}}>{props.dater}</div>
                              <div>07.10AM</div>
                            </div>
                          </div>

                          <div className='divofdiv'>
                            <div>
                              <div>Rating</div>
                              <div className='nearicon'>
                                <div ><StarIcon style={{height:'15px', width:'15px'}}/></div>
                                <div style={{fontSize:'9px', padding:'3px'}}>3.8</div>
                              </div>
                            </div>
                          </div>

                          <div className='divofdiv'>
                            <div>
                              <div>PRICE</div>
                              <div className='nearicon'>
                                <div ><CurrencyRupeeIcon /></div>
                                <div style={{fontSize:'9px'}}>870</div>
                              </div>
                            </div>
                          </div>
                  </div>

                      
              
                  <div className='busbooking1'>
                          <div className='divofdiv'>
                            <div>
                              <div style={{fontSize:'12px'}}>Avaliable Seats</div>
                              <div className='nearicon'>
                                <div ><AirlineSeatIndividualSuiteIcon style={{height:'20px', width:'20px',paddingTop:'4px'}}/></div>
                                <div style={{fontSize:'9px', padding:'8px'}}>24</div>
                              </div>
                            </div>
                          </div>

                          <div className='divofdiv'>
                            <div>
                              <div style={{fontSize:'12px'}}>Cancellation</div>
                              <div className='nearicon'>
                              <div ><RemoveDoneIcon style={{height:'20px', width:'20px',paddingTop:'4px'}}/></div>
                              <div style={{fontSize:'9px', padding:'8px'}}>Not-Avaliable</div>
                            </div>
                            </div>
                          </div>

                          <div className='divofdiv'>
                            <div>
                              <div style={{fontSize:'12px'}}>Cancellation Before</div>
                              <div className='nearicon'>
                              <div ><AlarmOffIcon style={{height:'20px', width:'20px',paddingTop:'4px'}}/></div>
                              <div style={{fontSize:'9px', padding:'8px'}}>Not-Avaliable</div>
                            </div>
                            </div>
                          </div>

                          <div className='divofdiv'>
                            <div>
                              <div style={{fontSize:'12px'}}>Live Tracking</div>
                              <div className='nearicon'>
                              <div ><ShareLocationIcon style={{height:'20px', width:'20px',paddingTop:'4px'}}/></div>
                              <div style={{fontSize:'9px', padding:'8px'}}>No</div>
                            </div>
                            </div>
                    </div>
                  </div>
          </div>

          <div className='buttonforbook'>
                  <Link to={{pathname:'/SeatBook'}}><button className="button-32" >Book Now</button></Link>
          </div>
          
    </div>
</div> 
<div className='secondfull'>
    <div className='eightypercent2'> 
          <div className='busbooking'>
                  <div className='busbooking1'>
                          <div className='divofdiv'>
                              <div>
                                <div>Q-R-S-T Trvelz</div>
                                <div style={{fontSize:'10px'}}>Non-AC Sleeper(2+1)</div>
                              </div>
                          </div>
                          
                          <div className='divofdiv'>
                              <div>
                                <div style={{fontSize:'10px'}}>{props.dater}</div>
                                <div style={{fontSize:'15px'}}>4.15PM</div>
                              </div>
                          </div>

                          <div className='divofdiv'>
                            <div>
                              <div style={{fontSize:'10px'}}>3H19M</div>
                            </div>
                          </div>

                          <div className='divofdiv'>
                            <div>
                            <div style={{fontSize:'10px'}}>{props.dater}</div>
                              <div>07.34PM</div>
                            </div>
                          </div>

                          <div className='divofdiv'>
                            <div>
                              <div>Rating</div>
                              <div className='nearicon'>
                                <div ><StarIcon style={{height:'15px', width:'15px'}}/></div>
                                <div style={{fontSize:'9px', padding:'3px'}}>4.1</div>
                              </div>
                            </div>
                          </div>

                          <div className='divofdiv'>
                            <div>
                              <div>PRICE</div>
                              <div className='nearicon'>
                                <div ><CurrencyRupeeIcon style={{height:'15px', width:'15px'}}/></div>
                                <div style={{fontSize:'13px'}}>1140</div>
                              </div>
                            </div>
                          </div>
                  </div>

                      
              
                  <div className='busbooking1'>
                          <div className='divofdiv'>
                            <div>
                              <div style={{fontSize:'12px'}}>Avaliable Seats</div>
                              <div className='nearicon'>
                                <div ><AirlineSeatIndividualSuiteIcon style={{height:'20px', width:'20px',paddingTop:'4px'}}/></div>
                                <div style={{fontSize:'9px', padding:'8px'}}>7</div>
                              </div>
                            </div>
                          </div>

                          <div className='divofdiv'>
                            <div>
                              <div style={{fontSize:'12px'}}>Cancellation</div>
                              <div className='nearicon'>
                              <div ><DoneIcon style={{height:'20px', width:'20px',paddingTop:'4px'}}/></div>
                              <div style={{fontSize:'9px', padding:'8px'}}>Avaliable</div>
                            </div>
                            </div>
                          </div>

                          <div className='divofdiv'>
                            <div>
                              <div style={{fontSize:'12px'}}>Cancellation Before</div>
                              <div className='nearicon'>
                              <div ><AlarmOffIcon style={{height:'20px', width:'20px',paddingTop:'4px'}}/></div>
                              <div style={{fontSize:'9px', padding:'8px'}}>2Hrs before Departure</div>
                            </div>
                            </div>
                          </div>

                          <div className='divofdiv'>
                            <div>
                              <div style={{fontSize:'12px'}}>Live Tracking</div>
                              <div className='nearicon'>
                              <div ><ShareLocationIcon style={{height:'20px', width:'20px',paddingTop:'4px'}}/></div>
                              <div style={{fontSize:'9px', padding:'8px'}}>Yes</div>
                            </div>
                            </div>
                    </div>
                  </div>
          </div>

          <div className='buttonforbook'>
                  <Link to={{pathname:'/SeatBook'}}><button className="button-32" >Book Now</button></Link>
          </div>
          
    </div>
</div> 
<div className='secondfull'>
    <div className='eightypercent2'> 
          <div className='busbooking'>
                  <div className='busbooking1'>
                          <div className='divofdiv'>
                              <div>
                                <div>X-Y-Z Trvelz</div>
                                <div style={{fontSize:'10px'}}>AC Sleeper(2+1)</div>
                              </div>
                          </div>
                          
                          <div className='divofdiv'>
                              <div>
                                <div style={{fontSize:'10px'}}>{props.dater}</div>
                                <div style={{fontSize:'15px'}}>7.15PM</div>
                              </div>
                          </div>

                          <div className='divofdiv'>
                            <div>
                              <div style={{fontSize:'10px'}}>2H35M</div>
                            </div>
                          </div>

                          <div className='divofdiv'>
                            <div>
                            <div style={{fontSize:'10px'}}>{props.dater}</div>
                              <div>10.50PM</div>
                            </div>
                          </div>

                          <div className='divofdiv'>
                            <div>
                              <div>Rating</div>
                              <div className='nearicon'>
                                <div ><StarIcon style={{height:'15px', width:'15px'}}/></div>
                                <div style={{fontSize:'9px', padding:'3px'}}>4.2</div>
                              </div>
                            </div>
                          </div>

                          <div className='divofdiv'>
                            <div>
                              <div>PRICE</div>
                              <div className='nearicon'>
                                <div ><CurrencyRupeeIcon style={{height:'15px', width:'15px'}}/></div>
                                <div style={{fontSize:'13px'}}>1290</div>
                              </div>
                            </div>
                          </div>
                  </div>

                      
              
                  <div className='busbooking1'>
                          <div className='divofdiv'>
                            <div>
                              <div style={{fontSize:'12px'}}>Avaliable Seats</div>
                              <div className='nearicon'>
                                <div ><AirlineSeatIndividualSuiteIcon style={{height:'20px', width:'20px',paddingTop:'4px'}}/></div>
                                <div style={{fontSize:'9px', padding:'8px'}}>40</div>
                              </div>
                            </div>
                          </div>

                          <div className='divofdiv'>
                            <div>
                              <div style={{fontSize:'12px'}}>Cancellation</div>
                              <div className='nearicon'>
                              <div ><DoneIcon style={{height:'20px', width:'20px',paddingTop:'4px'}}/></div>
                              <div style={{fontSize:'9px', padding:'8px'}}>Avaliable</div>
                            </div>
                            </div>
                          </div>

                          <div className='divofdiv'>
                            <div>
                              <div style={{fontSize:'12px'}}>Cancellation Before</div>
                              <div className='nearicon'>
                              <div ><AlarmOffIcon style={{height:'20px', width:'20px',paddingTop:'4px'}}/></div>
                              <div style={{fontSize:'9px', padding:'8px'}}>7Hrs before Departure</div>
                            </div>
                            </div>
                          </div>

                          <div className='divofdiv'>
                            <div>
                              <div style={{fontSize:'12px'}}>Live Tracking</div>
                              <div className='nearicon'>
                              <div ><ShareLocationIcon style={{height:'20px', width:'20px',paddingTop:'4px'}}/></div>
                              <div style={{fontSize:'9px', padding:'8px'}}>Yes</div>
                            </div>
                            </div>
                    </div>
                  </div>
          </div>

          <div className='buttonforbook'>
                  <Link to={{pathname:'/SeatBook'}}><button className="button-32" >Book Now</button></Link>
          </div>
          
    </div>
</div> 
<div className='secondfull'>
    <div className='eightypercent2'> 
          <div className='busbooking'>
                  <div className='busbooking1'>
                          <div className='divofdiv'>
                              <div>
                                <div>U-V-W Trvelz</div>
                                <div style={{fontSize:'10px'}}>Non-AC Sleeper(2+1)</div>
                              </div>
                          </div>
                          
                          <div className='divofdiv'>
                              <div>
                                <div style={{fontSize:'10px'}}>{props.dater}</div>
                                <div style={{fontSize:'15px'}}>07.15AM</div>
                              </div>
                          </div>

                          <div className='divofdiv'>
                            <div>
                              <div style={{fontSize:'10px'}}>2H55M</div>
                            </div>
                          </div>

                          <div className='divofdiv'>
                            <div>
                            <div style={{fontSize:'10px'}}>{props.dater}</div>
                              <div>10.10AM</div>
                            </div>
                          </div>

                          <div className='divofdiv'>
                            <div>
                              <div>Rating</div>
                              <div className='nearicon'>
                                <div ><StarIcon style={{height:'15px', width:'15px'}}/></div>
                                <div style={{fontSize:'9px', padding:'3px'}}>4.3</div>
                              </div>
                            </div>
                          </div>

                          <div className='divofdiv'>
                            <div>
                              <div>PRICE</div>
                              <div className='nearicon'>
                                <div ><CurrencyRupeeIcon style={{height:'15px', width:'15px'}}/></div>
                                <div style={{fontSize:'13px'}}>985</div>
                              </div>
                            </div>
                          </div>
                  </div>

                      
              
                  <div className='busbooking1'>
                          <div className='divofdiv'>
                            <div>
                              <div style={{fontSize:'12px'}}>Avaliable Seats</div>
                              <div className='nearicon'>
                                <div ><AirlineSeatIndividualSuiteIcon style={{height:'20px', width:'20px',paddingTop:'4px'}}/></div>
                                <div style={{fontSize:'9px', padding:'8px'}}>4</div>
                              </div>
                            </div>
                          </div>

                          <div className='divofdiv'>
                            <div>
                              <div style={{fontSize:'12px'}}>Cancellation</div>
                              <div className='nearicon'>
                              <div ><DoneIcon style={{height:'20px', width:'20px',paddingTop:'4px'}}/></div>
                              <div style={{fontSize:'9px', padding:'8px'}}>Avaliable</div>
                            </div>
                            </div>
                          </div>

                          <div className='divofdiv'>
                            <div>
                              <div style={{fontSize:'12px'}}>Cancellation Before</div>
                              <div className='nearicon'>
                              <div ><AlarmOffIcon style={{height:'20px', width:'20px',paddingTop:'4px'}}/></div>
                              <div style={{fontSize:'9px', padding:'8px'}}>2Hrs before Departure</div>
                            </div>
                            </div>
                          </div>

                          <div className='divofdiv'>
                            <div>
                              <div style={{fontSize:'12px'}}>Live Tracking</div>
                              <div className='nearicon'>
                              <div ><ShareLocationIcon style={{height:'20px', width:'20px',paddingTop:'4px'}}/></div>
                              <div style={{fontSize:'9px', padding:'8px'}}>No</div>
                            </div>
                            </div>
                    </div>
                  </div>
          </div>

          <div className='buttonforbook'>
                  <Link to={{pathname:'/SeatBook'}}><button className="button-32" >Book Now</button></Link>
          </div>
          
    </div>
</div> 
</div>
  )
}
