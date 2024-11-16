#!/usr/bin/env node

console.log('running bin')

const main = async () => {}
main()
	.then(() => {
		console.log('success...', __dirname)
	})
	.catch((e) => {
		console.log(e)
	})
