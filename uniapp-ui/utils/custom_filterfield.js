/**
 * 筛选字段
 * fieldCustom { 'a': '订单量' }
 * fieldService { 'a': 1, 'b': 2 }
 * => { '订单量': 1 }
 */

export default function customFilterField(fieldCustom, fieldService) {
	const fieldKeys = Object.keys(fieldCustom)
	let newField = {}
	
	fieldKeys.forEach(item => {
		newField[fieldCustom[item]] = fieldService[item]
	})
	
	return newField
}
