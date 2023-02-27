const _ = require("lodash");

//Task1
const subMaxMin = (arr) => _.subtract(_.max(arr), _.min(arr));

//Task2
const filterWords = (text, num) =>
	_.filter(_.words(text), (word) => _.gt(_.size(word), num));

//Task3
const checkEndOfStr = (s1, s2) =>
	_.isEqual(_.join(_.slice(s1, _.size(s1) - _.size(s2), _.size(s1)), ""), s2);

//Task4
const averages = (arr) =>
	_.reduce(
		arr,
		function (acc, val, index) {
			return index !== _.size(arr) - 1
				? [...acc, (val + arr[index + 1]) / 2]
				: acc;
		},
		[]
	);

//Task6
const uniqueNums = (arr1, arr2) => _.sortBy(_.uniq([...arr1, ...arr2]));

//Task11
const moveWord = (originalStr, targetStr) => {
	if (!_.isEqual(originalStr.length, targetStr.length)) return false;

	let i = 0;
	while (i < originalStr.length) {
		let resultStr = originalStr.slice(i) + originalStr.slice(0, i);

		if (_.isEqual(resultStr, targetStr)) return true;
		i++;
	}

	return false;
};

//Task12
const createTwoArr = (a) => {
	if (_.size(a) % 2 !== 0) return false;
	return _.reduce(
		a,
		function (acc, curVal, index, arr) {
			if (index % 2 === 0 && index < _.size(arr) - 1) {
				acc[0].push(curVal), acc[1].push(arr[index + 1]);
			}
			return acc;
		},
		[[], []]
	);
};

//Task17
const sortArr = (arr) => {
	if (!_.size(arr)) return false;
	let a = [],
		b = [];
	let tmp = _.sortBy(arr);
	_.forEach(tmp, function (element, index) {
		return index % 2 === 0 || index === 0
			? a.push(element)
			: b.unshift(element);
	});

	return [...a, ...b];
};
