const router = require('koa-router')()
const Article = require("../model/articlemodel")
const sequelize = require('../model/dbconnect');
const Sequelize = require('sequelize');

const createDOMPurify = require('dompurify');
const { JSDOM } = require('jsdom');
const window = (new JSDOM('')).window;
const DOMPurify = createDOMPurify(window);


router.prefix('/article')

router.get('/', async function(ctx, next) {
    const Op = Sequelize.Op
    let { offset, size, filter } = ctx.request.query;
    let articles = null;
    console.log(filter)
    if (filter) {

        let month = filter.substr(filter.length - 2, filter.length)
        let year = filter.substr(0, 4)
        month = +month
        year = +year
        if (month == 12) {
            month = 0;
            year += 1
        }
        month = month + 1
        let filter1 = filter + '-01'
        let filter2 = year + '-' + month + '-01'
        articles = await Article.findAll({
            offset: +offset,
            limit: +size,
            where: {
                createdAt: {
                    [Op.gte]: filter1,
                    [Op.lt]: filter2
                }
            }
        });
    } else {
        articles = await Article.findAll({
            offset: +offset,
            limit: +size,
        });
    }

    ctx.body = {
        err: 0,
        info: null,
        data: articles
    }
})


router.get('/recent', async function(ctx, next) {
    articles = await Article.findAll({
        order: [
            ['createdAt', 'DESC']
        ],
        limit: 3
    });
    ctx.body = {
        err: 0,
        info: null,
        data: articles
    }
})

router.get('/bytime', async function(ctx, next) {
    let res = await sequelize.query(`select date_format(createdAt,'%Y-%m') as data,count(*) as articleNum from articles GROUP BY date_format(createdAt,'%Y-%m')`, { type: sequelize.QueryTypes.SELECT })
    ctx.body = {
        err: 0,
        info: null,
        data: res
    }
})


router.get('/:id', async function(ctx, next) {


    let articles = await Article.findAll({
        where: {
            id: ctx.params.id
        }
    });
    ctx.body = {
        err: 0,
        info: null,
        data: articles
    }
})

router.post('/', function(ctx, next) {
    // ctx.set('Access-Control-Allow-Origin', '*')
    // ctx.set('Access-Control-Allow-Methods', 'OPTIONS, GET, PUT, POST, DELETE');

    //console.log(ctx.request.body)
    let { title, content, target } = ctx.request.body.data;
    let authorid = ctx.session.userId
    content = DOMPurify.sanitize(content);
    Article.create({ title, content, target, authorid }).then(data => {
        console.log(data.id);
    });
    ctx.body = {
        err: 0,
        info: null,
    }
})

router.delete('/', function(ctx, next) {
    console.log(ctx.request.body)
    let id = ctx.request.body;
    Article.destroy({
        where: {
            id: id
        }
    }).then(() => {
        console.log("Done");
    });
    ctx.body = {
        err: 0,
        info: null,
    }
})

module.exports = router