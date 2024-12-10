const app = Vue.createApp({
	data() {
		return {
			inappropriateNum: 4,
			correctedNum: 150,
			correctedToday: 5,
			correctedWeek: 16,
			correctedMonth: 37,
			onesToCorrect: [
				[
					"Student: that's out of scope",
					"Chatbot: I don't understand"
				],
				[
					"Student: Lorem ipsum",
					"Chatbot: What???"
				],
				[
					"Student: Goldy",
					"Chatbot: Could you please say that again?"
				]
			],
			correctPossibilities: [
				"Okay, that's just as well.",
				"Great job!",
				"Try looking for hidden files.",
				"I still think it's a good idea.",
				"I think Jennifer would agree we should try."
			]
		}
	},
	methods: {
		addToCart() {
			this.cart += 1
		},
		updateVariant(index) {
			this.selectedVariant = index
		}
	},
	computed: {
		title() {
			return this.brand + ' ' + this.product
		},
		image() {
			return this.variants[this.selectedVariant].image
		},
		inStock() {
			return this.variants[this.selectedVariant].quantity
		},
		// solution
		sale() {
			if (this.onSale) {
				return this.brand + ' ' + this.product + ' is on sale.'
			}
			return ''
		}
		// solution
	}
})
