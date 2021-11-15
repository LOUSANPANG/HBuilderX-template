import Vue from 'vue'

// 999999 => ¥999,999.00
Vue.filter('filerFormatMoney', function(num, options = { style: 'currency', currency: 'CNY' }) {
	if (!num) return ''
	return (Number(num)).toLocaleString('zh-CN', options)
})

// 153****0730
Vue.filter('filerFormatPhone', function(phone) {
	if (!phone) return ''
	let newPhone = phone.replace(/(\d{3})\d{4}(\d{4})/, '$1****$2')
	return newPhone
})

// 1234 5678 9012 3456 789
Vue.filter('filerFormatCardNo', function(cardNo) {
	return String(cardNo).replace(/(\d{4})/g, "$1 ").trim()
})
