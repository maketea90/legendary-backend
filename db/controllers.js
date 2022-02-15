const {fetchTopics, fetchArticleById, updateArticle, fetchUsers, fetchArticles, fetchCommentsByArticleId} = require('./models')

exports.getTopics = (req, res, next) => {
    fetchTopics().then((result) => {
        res.status(200).send(result)
    })
    .catch(next)
}

exports.getArticleById = (req, res, next) => {
    const {article_id} = req.params
    fetchArticleById(article_id).then((result) => {
        res.status(200).send(result)
    })
    .catch(next)
}

exports.patchArticle = (req, res, next) => {
    const {inc_votes} = req.body;
    const {article_id} = req.params;
    updateArticle(inc_votes, article_id).then((result) => {
        res.status(200).send(result)
    })
    .catch(next)
}

exports.getUsers = (req, res, next) => {
    fetchUsers().then((result) => {
        res.status(200).send(result)
    })
}

exports.getArticles = (req, res, next) => {
    fetchArticles().then((result) => {
        res.status(200).send(result)
    })
}

exports.getCommentsByArticleId = (req, res, next) => {

    const {article_id} = req.params;
    fetchCommentsByArticleId(article_id).then((result) => {
        res.status(200).send(result)
    })
    .catch((err) => {
        return next(err)
    })
}