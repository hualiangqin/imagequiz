import React from 'react';
import {Link} from 'react-router-dom';
import bowl from './q3img/bowl.jpg';
import chopsticks from './q3img/chopsticks.jpeg';
import fork from './q3img/fork.jpg';
import plate from './q3img/plate.jpg';
import spoon from './q3img/spoon.jpg';
import spork from './q3img/spork.jpeg';

class Quiz3 extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            scores: 0,
            imgs: [bowl, chopsticks, fork, plate, spoon, spork],
            answer: ['bowl', 'chopsticks', 'fork', 'plate', 'spoon', 'spork'],
            choice: [
                ['bowl', 'bowling', 'bowler', 'bow'],
                ['woodsticks', 'bamboosticks', 'chopsticks', 'stainlesssticks'],
                ['oyster fork', 'fork', 'cocktail fork', 'breakfast fork'],
                ['china plate', 'dinner plate', 'beautiful plate', 'plate'],
                ['spoon', 'dessert spoon', 'teaspoon', 'soup spoon'],
                ['spoork', 'spfork', 'spork', 'sfork']
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

export default Quiz3;