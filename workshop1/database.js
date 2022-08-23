import { Database } from 'fakebase'

const db = new Database("./data/bgg")
const Games = db.table("game")
const Comments = db.table("comment")

export const findAllGames = (offset = 0, limit = 10) => {
	return Games.findAll()
		.then(result => result.slice(offset, offset + limit))
}

export const findGamesByName = (name) => {
	const n = name.toLowerCase()
	return Games.findAll(g => g.name.toLowerCase().indexOf(n) != -1)
}

export const findGameById = (gameId) => {
	return Games.findById(parseInt(gameId))
}

export const countGames = () => {
	return Games.findAll()
		.then(result => result.length)
}

export const findCommentsByGameId = (gameId, offset = 0, limit = 10) => {
	return Comments.findAll(c => c.gid == gameId)
		.then(result => result.slice(offset, offset + limit))
}

export const findCommentsByUser = (user, offset = 0, limit = 10) => {
	const u = user.toLowerCase()
	return Comments.findAll(c => c.user.toLowerCase() == u)
		.then(result => result.slice(offset, offset + limit))
}

export const findCommentById = (commentId) => {
		return Comments.findById(commentId)
}

export const insertComment = (comment) => {
	return Comments.create(comment)
		.then(result => result.id)
}
