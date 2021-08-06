import Vue from 'vue'

// 999999 => ¥999,999.00
Vue.filter('appointFormatMoney', function(num, options = { style: 'currency', currency: 'CNY' }) {
	if (!num) return ''
	return (Number(num)).toLocaleString('zh-CN', options)
})

// 153****0730
Vue.filter('appointFormatPhone', function(phone) {
	if (!phone) return ''
	let newPhone = phone.replace(/(\d{3})\d{4}(\d{4})/, '$1****$2')
	return newPhone
})