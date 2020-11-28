import quizzes from './quizzes';

let server = {
    fetchQuizzes: () => {
        //later on, connect to server
        return quizzes;
    }
};

export default server;