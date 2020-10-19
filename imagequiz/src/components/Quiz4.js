import React from 'react';
import {Link} from 'react-router-dom';
import avocado from './q4img/avocado.jpg';
import broccoli from './q4img/broccoli.jpeg';
import carrot from './q4img/carrot.jpg';
import cucumber from './q4img/cucumber.jpg';
import garlic from './q4img/garlic.jpg';
import tomato from './q4img/tomato.jpeg';

class Quiz4 extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            scores: 0,
            imgs: [avocado, broccoli, carrot, cucumber, garlic, tomato],
            answer: ['avocado', 'broccoli', 'carrot', 'cucumber', 'garlic', 'tomato'],
            choice: [
                ['guacamole', 'avocado', 'cherimoya', 'green pear'],
                ['kalettes', 'broccoflower', 'romanesco', 'broccoli'],
                ['carrot', 'red parsnips', 'turnip', 'beetroot'],
                ['sponge gourd', 'zucchini', 'cucumber', 'wax gourd'],
                ['green garlic', 'garlic', 'garcinia mangostana', 'garlic fruit'],
                ['better boy', 'brandywine', 'cherry tomato', 'tomato']
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

export default Quiz4;