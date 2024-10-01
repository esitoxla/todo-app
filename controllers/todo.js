export const addTodo = (req, res, next) => {
    res.json('Todo was added!');
}

export const getTodo = (req, res, next) =>{
    res.json('All todos');
}

export const updateTodo = (req,res,next) =>{
    res.json('Todo updateed!');
}

export const deleteTodo = (req, res, next) =>{
    res.json('Todo deleted!');
}
//in controllers we do named exports    