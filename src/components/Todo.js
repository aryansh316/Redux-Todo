import React from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { todoData } from '../thunk/todo';


class Todos extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: 1,
            todosPerPage: 10
        };
    }

    componentDidMount() {
        this.props.todoData();
        console.log(this.props, '******')
    }
    handleClick = (event) => {
        this.setState({
            currentPage: Number(event.target.id)
        });
    };
    handlePrevClick = () => {
        this.setState((prevState) => ({
            currentPage: prevState.currentPage - 1
        }))
    };
    handleNextClick = () => {
        this.setState((prevState) => ({
            currentPage: prevState.currentPage + 1
        }))
    };

    render() {
        const { todos } = this.props;
        const { currentPage, todosPerPage } = this.state;
        const indexOfLastTodo = currentPage * todosPerPage;
        const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
        const todoItems = this.props.todos.slice(indexOfFirstTodo, indexOfLastTodo).map((todo, index) => (
            <table>
            <tbody key={index}>
                <tr>
                    <td>
                        {todo.title}
                    </td>
                    <td>
                        {todo.completed.toString()}
                    </td>
                </tr>
            </tbody>
            </table>
        ))
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(todos.length / todosPerPage); i++) {
            pageNumbers.push(i);
        }
        return (
            <div>

                <table >
                    <thead>
                        <tr>
                            <th>
                                name
                            </th>
                            <th>
                                completed
                            </th>
                        </tr>
                        {todoItems}

                    </thead>

                </table>
                <div id='buttons'>
                    <button
                        onClick={this.handlePrevClick}
                        disabled={currentPage === 1}
                    >
                        Previous
                    </button>
                    {/* <ul id="page-numbers">
                        {pageNumbers.map((number) => (
                            <li
                                key={number}
                                id={number}
                                onClick={this.handleClick}
                                className={currentPage === number ? "active" : ""}
                            >
                                {number}
                            </li>
                        ))}
                    </ul> */}
                    {currentPage}
                    <button
                    onClick={this.handleNextClick}
                    disabled={currentPage === Math.ceil(todos.length/todosPerPage)}
                    >
                        Next
                    </button>
                </div>
            </div>
        )
    }
}
Todos.prototypes = {
    todos: PropTypes.array.isRequired
}

const mapStateToProps = state => {
    console.log(state, "---------------state")
    return ({
        todos: state.todo.todo
    })
}
export default connect(mapStateToProps, { todoData })(Todos);