/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable prettier/prettier */
/* eslint-disable no-console */
// eslint-disable-next-line @typescript-eslint/no-unused-vars

console.log('running')

const main = async () => {}
main()
	.then(() => {
		console.log('success...', __dirname)
	})
	.catch((e) => {
		console.log(e)
	})

export {}
