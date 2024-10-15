export const registerUser = (req, res, next) => {
    res.json ('user registered!');
}

export const loginUser = (req, res, next) => {
    res.json('user logged in!');
}

export const logoutUser =(req, res, next) => {
    res.json('user logged out!');
}

export const updateProfile = (req, res, next) =>{
    res.json('user profile is updated')
}