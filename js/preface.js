new Vue({
	el: '#app',
	data: {
		result1: false,
		result2: false,
		result3: false
	},
	mounted() {
		const bills = [5, 5, 10, 20]
		this.result1 = this.lemonadeChange(bills)

		const str = ""
		const tar = ""
		this.result2 = this.isAnagram(str, tar)

		const nums = [11, 15, 2, 7]
		const target = 9
		this.result3 = this.twoSum(nums, target);

	},
	methods: {
		/* 1.在柠檬水摊上，每一杯柠檬水的售价为 5 美元。
		顾客排队购买你的产品，（按账单 bills 支付的顺序）一次购买一杯。
		每位顾客只买一杯柠檬水，然后向你付 5 美元、10 美元或 20 美元。你必须给每个顾客正确找零，也就是说净交易是每位顾客向你支付 5 美元。
		注意，一开始你手头没有任何零钱。
		如果你能给每位顾客正确找零，返回 true ，否则返回 false 。 */
		lemonadeChange(bills) {
			let five = 0,
				ten = 0
			for (const bill of bills) {
				if (bill === 5) {
					five += 1
				} else if (bill === 10) {
					if (five === 0) {
						return false
					}
					five -= 1
					ten += 1
				} else {
					if (five > 0 && ten > 0) {
						five -= 1
						ten -= 1
					} else if (five >= 3) {
						five -= 3
					} else {
						return false
					}
				}
			}
			return true
		},
		/* 2.给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。 */
		isAnagram(s, t) {
			return s.length == t.length && [...s].sort().join('') === [...t].sort().join('')
		},

		/* 3.给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。	
		你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍。 
		示例:
		给定 nums = [2, 7, 11, 15], target = 9
		因为 nums[0] + nums[1] = 2 + 7 = 9	
		所以返回 [0, 1]。*/
		twoSum(nums, target) {
			// 第一种解法
			const originMap = new Map();
			nums.forEach((v, i) => {
				originMap.set(v, i);
			})
			for (let i = 0; i < nums.length; i++) {
				let diff = target - nums[i];
				if (originMap.has(diff) && i !== originMap.get(diff)) {
					return [i, originMap.get(diff)];
				}
			}
			/* 第二种解法
			for (let i = 0; i < nums.length; i++) {
				for (let j = i + 1; j < nums.length; j++) {
					if (nums[i] === target - nums[j]) {
						return [i, j]
					}
				}
			} */
		}
	}
})
