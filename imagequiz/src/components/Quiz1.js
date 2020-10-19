import React from 'react';
import {Link} from 'react-router-dom';
import burger from './q1img/burger.jpg';
import egg from './q1img/egg.jpg';
import fries from './q1img/fries.jpg';
import pancake from './q1img/pancake.jpeg';
import salad from './q1img/salad.jpg';
import wings from './q1img/wings.jpg';
import './Quiz.css';

class Quiz1 extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            scores: 0,
            imgs: [burger, egg, fries, pancake, salad, wings],
            answer: ['burger', 'egg', 'fries', 'pancake', 'salad', 'wings'],
            choice: [
                ['sandwich', 'croissiant', 'noodle', 'burger'],
                ['porridge', 'oatmeal', 'egg', 'paste'],
                ['fries', 'potato', 'crayon', 'pasta'],
                ['pan', 'cake', 'pancake', 'cakes'],
                ['vetegables', 'salad', 'leaves', 'plant'],
                ['win', 'wings', 'wing', 'chicken']
            ],
            cursor: 0,
        };
    }

    handleOnClick = (i) => {
        const {cursor, choice, answer, scores} = this.state;
        if (cursor < answer.length){
            if (choice[cursor][i] === answer[cursor]){
                this.setState({scores: scores+1});
            }
            this.setState({cursor: cursor+1});
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
                        <img src={img} alt={name}></img>
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

export default Quiz1;