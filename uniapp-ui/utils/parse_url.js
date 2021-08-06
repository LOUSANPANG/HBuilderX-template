// hash 解析参数
export const parseHashUrl = (tagetParams) => {
	const parmas = location.hash.indexOf('?')
	const query = location.hash.substring(parmas + 1)
	const queryArr = query.split('&')

	for (let i = 0; i < queryArr.length; i++) {
		const queryPair = queryArr[i].split('=')
		if (queryPair[0] === tagetParams) {
			return queryPair[1]
		}
	}
	return false
}

// history 解析参数
export const parseHistoryUrl = (tagetParams) => {
	const query = window.location.search.substring(1)
	const queryArr = query.split('&')

	for (let i = 0; i < queryArr.length; i++) {
		const queryPair = queryArr[i].split('=')
		if (queryPair[0] === tagetParams) {
			return queryPair[1]
		}
	}
	return false
}

// history去除url制定参数
export const removeHistoryUrlParams = (name) => {
	var loca = window.location;
	var baseUrl = loca.origin + loca.pathname + "?";
	var query = decodeURIComponent(loca.search.split('?')[1]);
	if (!query) {
		return loca
	}
	if (loca.href.indexOf(name) > -1) {
		var obj = {}
		var arr = query.indexOf('&') > -1 ? query.split("&") : [query];
		for (var i = 0; i < arr.length; i++) {
			arr[i] = arr[i].split("=");
			obj[arr[i][0]] = arr[i][1];
		};
		delete obj[name];
		var url = baseUrl + JSON.stringify(obj).replace(/[\"\{\}]/g, "").replace(/\:/g, "=").replace(/\,/g, "&");
		return url
	}
}
