const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const session = require('koa-session')
const cors = require('koa-cors')

const index = require('./routes/index')
const users = require('./routes/users')
const article = require('./routes/article')



// error handler
onerror(app)

// middlewares
app.use(bodyparser({
    enableTypes: ['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))
app.keys = ['luoluosecret'];
app.use(session({
    key: 'blog:koa:sess',
    maxAge: 86400000
}, app));


app.use(views(__dirname + '/views', {
    extension: 'ejs'
}))
app.use(cors({
    credentials: true
}))

app.use(async(ctx, next) => {
    if (ctx.method.toUpperCase() == "OPTIONS")
        ctx.body = ""
    else await next()
})

app.use(async(ctx, next) => {
    console.log(ctx.request)
    if (ctx.request.method == 'post' && ctx.request.url == '/article') {
        if (ctx.session.userId)
            await next()
        else {
            ctx.body = {
                err: 1,
                info: null
            }
        }
    } else {
        await next()
    }


})


// logger
app.use(async(ctx, next) => {
    const start = new Date()
    await next()
    const ms = new Date() - start
    console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})


// routes
app.use(index.routes(), index.allowedMethods())
app.use(users.routes(), users.allowedMethods())
app.use(article.routes(), article.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
    console.error('server error', err, ctx)
});

module.exports = app