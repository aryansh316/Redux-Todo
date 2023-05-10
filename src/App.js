import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Posts from './components/Posts';
import Comment from './components/Comment';
import Postform from './components/Postform';
import Todos from './components/Todo';

function App() {
    return (
        <>
            <Router >
                <Switch>
                    <Route exact path="/" component={Posts} />
                    <Route path='/posts' component={Postform}/>
                    <Route path='/posts/:id/comments' component={Comment} />
                    <Route path='/todo' component={Todos}/>
                </Switch>                
            </Router>

        </>
    )
}

export default App;
