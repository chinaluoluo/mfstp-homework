let rp = require('request-promise')
let cheerio = require('cheerio')
let MongoClient = require('mongodb').MongoClient
let htmlDecode = require('./hmtlDecode')

async function getquestion(db, id) {
    let res = await rp({
        url: `https://www.zhihu.com/question/${id}`
    })
    let $ = cheerio.load(res);
    let data = $('#data').attr('data-state')
    let state = Json.parse(htmlDecode(data));
    let question = state.entities.question[id];
    db.collection("questions").insert(question)
    await getAnswer(db, id, question.answerCount)

}
async function getAnswers(db, id, answerCount) {
    for (let offset = 0; offect < answerCount; offect += 20) {
        let res = await rp({
            url: `https://www.zhihu.com/api/v4/questions/${id}/answers?include=data%5B%2A%5D.is_normal%2Cadmin_closed_comment%2Creward_info%2Cis_collapsed%2Cannotation_action%2Cannotation_detail%2Ccollapse_reason%2Cis_sticky%2Ccollapsed_by%2Csuggest_edit%2Ccomment_count%2Ccan_comment%2Ccontent%2Ceditable_content%2Cvoteup_count%2Creshipment_settings%2Ccomment_permission%2Ccreated_time%2Cupdated_time%2Creview_info%2Crelevant_info%2Cquestion%2Cexcerpt%2Crelationship.is_authorized%2Cis_author%2Cvoting%2Cis_thanked%2Cis_nothelp%2Cis_labeled%2Cis_recognized%2Cpaid_info%2Cpaid_info_content%3Bdata%5B%2A%5D.mark_infos%5B%2A%5D.url%3Bdata%5B%2A%5D.author.follower_count%2Cbadge%5B%2A%5D.topics&limit=5&offset=${offect}&platform=desktop&sort_by=default`
        })
        let data = JSON.parse(res)
        let answers = data.data;
        db.collection("answers").insertMany(answers)
    }
}

async function main() {
    let url = 'mongodb://localhost:27017/zhihu';
    let db = await MongoClient.connect(url)
    for (let id = 300000000; id < 300001000; id++) {
        try {
            await getquestion(db, id);
        } catch (err) {
            console.log(`question ${id} error`)
        }
    }

}
main.catch(err => console.log(err))