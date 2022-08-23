export const mkGameUrl = (result) => {
	return result.map(r => ({
		name: r.name,
		url: `/game/${r.id}`
	}))
}

export const mkCommentUrl = (result) => {
	return result.map(r => ({
		user: r.user,
		url: `/comment/${r.id}`
	}))
}

export const mkError = (error) => {
	return { error }
}
