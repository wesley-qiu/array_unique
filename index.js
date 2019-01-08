function array_unique(arr)
{
	let l = arr.length
	if (l < 2) {
		return arr
	}
	let hf = parseInt(l/2)
	if (l % 2 == 0) {
		return recur_unique_concat(arr.slice(0, hf), arr.slice(hf))
	} else {
		return recur_unique_concat(arr.slice(0, hf+1 ), arr.slice(hf+1))
	}

}
function recur_unique_concat(arr1, arr2)
{
	for (let i=0; i<arr2.length; i++) {
		if (arr1.includes(arr2[i])) {
			arr2.splice(i--, 1)
		}
	}

	return array_unique(arr1).concat(array_unique(arr2))
}

exports = module.exports = array_unique