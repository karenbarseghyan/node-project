module.exports = (app) => {
    // app.use('/users', require('./routers/users'));
    // app.use('/', require('./routers/index'));
    app.use('/posts', require('./routers/posts'));
}