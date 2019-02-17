const getLogin = (req, res, next) => {
    res.render('/auth/login')
    console.log('in get login');
};

const postLogin = (req, res, next) => {
    console.log('request post login');
};

const postLogout = (req, res, next) => {
    console.log('request post logout');
};

const api = {
    getLogin: getLogin,
    postLogin: postLogin,
    postLogout:  postLogout
};

export default api;