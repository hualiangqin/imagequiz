import React from 'react';
import {
    Link
  } from "react-router-dom";
import './Home.css';

class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username: "",
            signin: false,
            quizNames: [],
            quizImgs: [],
            quizIds: []
        };
    }

    componentDidMount = () => {
        let api = "https://hualiangqin-imagequiz.herokuapp.com/quizzes";
        fetch(api).then(x => x.json()).then(y => {
            let names = [];
            let imgs = [];
            let ids = [];
            for (let i=0; i<y.length; i++){
                names.push(y[i].name);
                imgs.push(y[i].image);
                ids.push(y[i].id);
            }
            console.log(names);
            console.log(imgs);
            this.setState({quizNames: names, quizImgs: imgs, quizIds: ids});
        }).catch(e => console.log(e));
    }
    
    render(){
        const {quizImgs, quizNames, quizIds, username} = this.state;
        let quiz1 = {pathname: '/quiz', state: {id: quizIds[0], user: username}}
        let quiz2 = {pathname: "/quiz", state: {id: quizIds[1], user: username}}
        let quiz3 = {pathname: "/quiz", state: {id: quizIds[2], user: username}}
        let quiz4 = {pathname: "/quiz", state: {id: quizIds[3], user: username}}
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
                    <div className='img'>
                        <Link to={quiz1}>
                            <img src={"https://hualiangqin-imagequiz.herokuapp.com/image/" + quizImgs[0]} alt="cherryblossom"></img>
                        </Link>
                        <label>{quizNames[0]}</label>
                    </div>
                    <div className='img'>
                        <Link to={quiz2}>
                            <img src={"https://hualiangqin-imagequiz.herokuapp.com/image/" + quizImgs[1]} alt='daffodil'></img>
                        </Link>
                        <label>{quizNames[1]}</label>
                    </div>
                    <div className='img'>
                        <Link to={quiz3}>
                            <img src={"https://hualiangqin-imagequiz.herokuapp.com/image/" + quizImgs[2]} alt='daisy'></img>
                        </Link>
                        <label>{quizNames[2]}</label>
                    </div>
                    <div className='img'>
                        <Link to={quiz4}>
                            <img src={"https://hualiangqin-imagequiz.herokuapp.com/image/" + quizImgs[3]} alt='lily'></img>
                        </Link>
                        <label>{quizNames[3]}</label>
                    </div>
                </div>
                
            </div>

        );
    }
}

export default Home;