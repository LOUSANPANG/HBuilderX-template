// 校验手机号
export const rulePhone = (phone) => {
	if (!phone) return false
	// 宽松手机号13 14 15 16 17 18 19开头即可
	const regRule = /^(?:(?:\+|00)86)?1[3-9]\d{9}$/
	const regexpTest = regRule.test(phone)

	// 严谨手机号 工信部19年公布的手机号段
	// const regRule = /^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-79])|(?:5[0-35-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[189]))\d{8}$/
	// const regexpTest = regRule.test(phone)

	console.log('regexp检验手机号========> ', regexpTest)
	return regexpTest
}


// 校验邮箱
export const ruleMail = (mail) => {
	if (!mail) return false
	const regRule = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
	const regexpTest = regRule.test(mail)
	console.log('regexp校验邮箱========> ', regexpTest)
	return regexpTest
}


// 检验身份证
export const ruleIdCard = (idCard) => {
	if (!idCard) return false
	const regRule = /^\d{6}((((((19|20)\d{2})(0[13-9]|1[012])(0[1-9]|[12]\d|30))|(((19|20)\d{2})(0[13578]|1[02])31)|((19|20)\d{2})02(0[1-9]|1\d|2[0-8])|((((19|20)([13579][26]|[2468][048]|0[48]))|(2000))0229))\d{3})|((((\d{2})(0[13-9]|1[012])(0[1-9]|[12]\d|30))|((\d{2})(0[13578]|1[02])31)|((\d{2})02(0[1-9]|1\d|2[0-8]))|(([13579][26]|[2468][048]|0[048])0229))\d{2}))(\d|X|x)$/
	const regexpTest = regRule.test(idCard)
	console.log('regexp校验身份证========> ', regexpTest)
	return regexpTest
}
