const router = require('koa-router')()
const User = require("../model/usermodel")

router.prefix('/users')

router.get('/', function(ctx, next) {
    ctx.body = 'this is a users response!'
})

router.get('/bar', function(ctx, next) {
    ctx.body = 'this is a users/bar response'
})

router.get('/login', async function(ctx, next) {
    let user = await User.findAll({ where: { id: ctx.session.userId } })
    ctx.body = {
        err: 0,
        info: null,
        data: user
    }
})

router.delete('/login', async function(ctx, next) {
    ctx.session.userId = null
    ctx.body = {
        err: 0,
        info: null,
    }
})


router.get('/register', async function(ctx, next) {
    await ctx.render('register.html')
})


router.post('/register', async function(ctx, next) {
    // console.log(ctx.request.body)
    let { username, password, phone } = ctx.request.body;
    User.create({ username: username, password: password, phone: phone }).then(data => {
        console.log(data.id);
    });
})


router.post('/login', async function(ctx, next) {
    let { username, password } = ctx.request.body.data;

    let user = await User.findAll({ where: { username } })
    if (!user) {
        ctx.body = {
            err: 1,
            info: null,
            data: null
        }
    }
    if (user[0].dataValues.password != password) {

        ctx.body = {
            err: 1,
            info: null,
            data: null
        }
    } else {
        ctx.session.userId = user[0].dataValues.id;
        ctx.body = {
            err: 0,
            info: null,
            data: user[0].dataValues.id
        }
    }
})

module.exports = router