const context=React.createContext({
theme:'light',
todoList:{},
numberOfTodos:0,
clearCompleted:()=>{},
activeTodos:{},
completeTodos:{},
})

export default context;