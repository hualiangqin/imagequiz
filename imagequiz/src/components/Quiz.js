import React from 'react';
import {Link} from 'react-router-dom';
import './Quiz.css';

class Quiz extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            scores: 0,
            imgs: [],
            answer: [],
            choice: [],
            cursor: 0,
            username: ""
        };
    }

    componentDidMount = () => {
        const location = this.props.location;
        let id = 0;
        let user = "";
        if (location){
            if(location.state){
                id = location.state.id ? location.state.id : '';
                user = location.state.user ? location.state.user : '';
                this.setState({username: user});
            }
        }
        let api = "https://hualiangqin-imagequiz.herokuapp.com/quiz/" + id;
        fetch(api).then(x => x.json()).then(y => {
            this.setState({imgs: y.imgs, answer: y.answer, choice: y.choice});
        }).catch(e => console.log(e));
    }

    handleOnClick = (i) => {
        const {cursor, choice, answer, scores, username} = this.state;
        if (cursor < answer.length){
            if (choice[cursor][i] === answer[cursor]){
                this.setState({scores: scores+1});
            }
            this.setState({cursor: cursor+1});
        }
        if (cursor+1 === answer.length){
            let api = "https://hualiangqin-imagequiz.herokuapp.com/score";
            let data = {user: username, scores: scores};
            
            fetch(api, {
                method: 'POST',
                headers: {
                    'Content-Type': 'Application/json'
                },
                body: JSON.stringify(data)
            }).then(x => x.json()).then(y => console.log(y)).catch(e => console.log(e));
        }
    }

    handleRestart = () => {
        this.setState({cursor: 0, scores: 0});
    }

    render(){
        const {cursor, imgs, answer, choice, scores} = this.state;
        let img = imgs[cursor];
        let name = answer[cursor];
        let option = choice[cursor];

        console.log('cursor in render: ' + cursor);

        return(
            <div className='content'>
                <div>
                    {cursor === imgs.length ? 
                    <p>scores: {scores}</p>
                    :
                    <div className='quiz'>
                        <img src={"https://hualiangqin-imagequiz.herokuapp.com/image/"+img} alt={name}></img>
                        <div className='options'>
                            <label onClick={() => this.handleOnClick(0)}>{option[0]}</label>
                            <label onClick={() => this.handleOnClick(1)}>{option[1]}</label>
                            <label onClick={() => this.handleOnClick(2)}>{option[2]}</label>
                            <label onClick={() => this.handleOnClick(3)}>{option[3]}</label>
                        </div>
                    </div>
                    }
                </div>
                <div className='buttons'>
                    <button onClick={this.handleRestart}>Restart</button>
                    <Link to='./imagequiz'>
                        <button>HomePage</button>
                    </Link>
                </div>
            </div>
        );
    }
}

export default Quiz;