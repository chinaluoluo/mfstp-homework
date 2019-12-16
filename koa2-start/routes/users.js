const router = require('koa-router')()

router.prefix('/users')

router.post('/', function(ctx, next) {
    ctx.set('Access-Control-Allow-Origin', '*')
    ctx.set('Access-Control-Allow-Methods', 'OPTIONS, GET, PUT, POST, DELETE');
    if (ctx.request.body.username == "mafengshe") ctx.body = true;
    else ctx.body = false;
})

router.get('/bar', function(ctx, next) {
    ctx.body = 'this is a users/bar response'

})

module.exports = router