//Task1
const subMaxMin = (arr) => Math.max(...arr) - Math.min(...arr);

//Task2
const filterWords = (str, num) => str.split(" ").filter((s) => s.length > num);

//Task3
const checkEndOfStr = (s1, s2) =>
	s1.slice(s1.length - s2.length, s1.length) === s2;

//Task4
const averages = (arr) =>
	arr.reduce((acc, val, index, array) => {
		return index !== array.length - 1
			? [...acc, (val + arr[index + 1]) / 2]
			: acc;
	}, []);

//Task5
const countVowels = (str) => str.match(/[aeiou]/gi).length;

//Task5.2
const removeABC = (str) =>
	str.match(/[abc]/gi) ? str.replace(/[abc]/gi, " ") : null;

//Task6
const uniqueNums = (arr1, arr2) =>
	Array.from(new Set([...arr1, ...arr2])).sort((a, b) => a - b);

//Task7
const func7 = (obj) => {
	let newObj = {};
	Object.entries(obj).forEach(([key, value]) => {
		newObj[value] = key;
	});
	return newObj;
};

//Task8
const calculateDifference = (things, insurance) =>
	!Object.values(things).length
		? "object is empty"
		: Object.values(things).reduce((curr, next) => curr + next) < insurance
		? "value of things cannot be less than the insurance"
		: Object.values(things).reduce((curr, next) => curr + next) - insurance;

//Task9
const doesBrickFit = (a, b, c, w, h) =>
	(a <= h && b <= w) || c <= w ? true : false;

//Task10
const getFileName = (url) => {
	return url.substring(url.lastIndexOf("/") + 1).split(".")[0];
};

//Task11
const moveWord = (originalStr, targetStr) => {
	if (originalStr.length !== targetStr.length) return false;

	let i = 0;
	while (i < originalStr.length) {
		let resultStr = originalStr.slice(i) + originalStr.slice(0, i);

		if (resultStr === targetStr) return true;
		i++;
	}
	return false;
};

//Task12
const createTwoArr = (a) => {
	if (a.length % 2 !== 0) return false;
	return a.reduce(
		(acc, curVal, index, arr) => {
			if (index % 2 === 0 && index < arr.length - 1) {
				acc[0].push(curVal), 
				acc[1].push(arr[index + 1]);
			}
			return acc;
		},
		[[], []]
	);
};

//Task17
const sortArr = (arr) => {
	if (!arr.length) return false;
	const a = [],
		b = [];
	arr
		.sort((a, b) => a - b)
		.forEach((element, index) => {
			return index % 2 === 0 || index === 0
				? a.push(element)
				: b.unshift(element);
		});

	return [...a, ...b];
};