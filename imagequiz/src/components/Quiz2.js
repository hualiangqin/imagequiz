import React from 'react';
import {Link} from 'react-router-dom';
import apple from './q2img/apple.jpeg';
import bananas from './q2img/bananas.jpg';
import durian from './q2img/durian.jpg';
import kiwifruit from './q2img/kiwifruit.png';
import pomegranate from './q2img/pomegranate.jpeg';
import watermelon from './q2img/watermelon.jpg';

class Quiz2 extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            scores: 0,
            imgs: [apple, bananas, durian, kiwifruit, pomegranate, watermelon],
            answer: ['apple', 'bananas', 'durian', 'kiwifruit', 'pomegranate', 'watermelon'],
            choice: [
                ['apple', 'app', 'red balls', 'Apple'],
                ['banana', 'bananas', 'yellow sausage', 'banana skin'],
                ['hedgehog', 'durian', 'weapon', 'stinky'],
                ['kiwi', 'wiki', 'kiwifruit', 'wikifruit'],
                ['coco Plum', 'mammee apple', 'persimmon', 'pomegranate'],
                ['waterymelon', 'waterproofmelon', 'watermelon', 'waterlessmelon']
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

export default Quiz2;