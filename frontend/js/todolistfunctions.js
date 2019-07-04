let todos = [];
let todocount = 0;

let Todo = function statelessFunctionComponentClass(props){
    return (
        <tr><td>{props.count}</td><td>{props.data}</td><td><input type='checkbox' value={props.done}></input></td></tr>
    )
};

var TodoList = React.createClass({
    renderTodo: function(todo){
        todocount++;
        return (
            <Todo data={todo} count={todocount} done={false}/>
        )
    },

    renderTodos: function(todos){
        return (
            todos.map(this.renderTodo)
        )
    },

    render: function (){
        todocount = 0;
        return (
        <div>
            <table>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Done</th>
                </tr>
                {this.renderTodos(todos)}
            </table>
        </div>
        );
    } 
});

document.getElementById('todoform').addEventListener('submit', function(e){
    e.preventDefault();
    addTodo();
});

function addTodo(){
    todos.push(document.getElementById('entry').value);
    document.getElementById('entry').value = '';
    showTodos();
}

function showTodos(){
    ReactDOM.render(
        <TodoList />,
        document.getElementById('todolist')
    );
}

window.onload = showTodos();