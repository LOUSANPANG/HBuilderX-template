
## use
```js
	import { postLogin } from '@/services/api/login.js'

	try {
		const loginRes = await postLogin({ code: '' })
		// TODO success
		console.log(loginRes)
	} catch(e) {
		//TODO fail code !== '1000' & return Promise.reject()
		console.log(e)
	}
```