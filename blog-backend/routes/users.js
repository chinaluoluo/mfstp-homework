const router = require('koa-router')()

router.prefix('/users')

router.get('/', function(ctx, next) {
    ctx.body = 'this is a users response!'
})

router.get('/bar', function(ctx, next) {
    ctx.body = 'this is a users/bar response'
})

router.get('/login', async function(ctx, next) {
    await ctx.render('login.html')
})
module.exports = router