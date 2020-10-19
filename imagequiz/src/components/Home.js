import React from 'react';
import {
    Link
  } from "react-router-dom";
import './Home.css';
import cherryblossom from './images/cherryblossom.png';
import daffodil from './images/daffodil.png';
import daisy from './images/daisy.jpg';
import lily from './images/lily.jpg';
import rose from './images/rose.png';
import sunflower from './images/sunflower.png';
import tulip from './images/tulip.png';
import waterlily from './images/waterlily.png';

class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username: "",
            signin: false
        };
    }
    
    render(){

        const location = this.props.location;
        let user = '';
        if (location){
            if(location.state){
                user = location.state.user ? location.state.user : '';
            }
        }

        return (
            <div>
                
                <div className="homepage">
                    <h1>Homepage</h1>

                    <div>
                        {user.length <= 0 ? "" : 
                        <Link to='/login'>
                            <button>switch account</button>
                        </Link>
                        }
                    </div>

                    <div className="loginButton">
                        
                        {user.length > 0 ? "User: " + user : 
                        <Link to='/login'>
                            <button>login</button>
                        </Link>
                        }
                    
                    </div>
                </div>

                <div className='images'>
                    <div>
                        <Link to='/quiz1'>
                            <img src={cherryblossom} alt="cherryblossom"></img>
                            <label>cherryblossom</label>
                        </Link>
                    </div>
                    <div>
                        <Link to='/quiz2'>
                            <img src={daffodil} alt='daffodil'></img>
                            <label>daffodil</label>
                        </Link>
                    </div>
                    <div>
                        <Link to='/quiz3'>
                            <img src={daisy} alt='daisy'></img>
                            <label>daisy</label>
                        </Link>
                    </div>
                    <div>
                        <Link to='/quiz4'>
                            <img src={lily} alt='lily'></img>
                            <label>lily</label>
                        </Link>
                    </div>
                    <div>
                        <Link to='/quiz1'>
                            <img src={rose} alt='rose'></img>
                            <label>rose</label>
                        </Link>
                    </div>
                    <div>
                        <Link to='/quiz2'>
                            <img src={sunflower} alt='sunflower'></img>
                            <label>sunflower</label>
                        </Link>
                    </div>
                    <div>
                        <Link to='/quiz3'>
                            <img src={tulip} alt='tulip'></img>
                            <label>tulip</label>
                        </Link>
                    </div>
                    <div>
                        <Link to='/quiz4'>
                            <img src={waterlily} alt='waterlily'></img>
                            <label>waterlily</label>
                        </Link>
                    </div>
                </div>
                
            </div>

        );
    }
}

export default Home;