const app = Vue.createApp({
	data() {
		return {
			inappropriateNum: 4,
			correctedNum: 150,
			correctedToday: 5,
			correctedWeek: 16,
			correctedMonth: 37,
			selectedChat: 0,
			onesToCorrect: [
				{
					id: 1,
					selected: false,
					chats: [
						"Student: that's out of scope",
						"Chatbot: I don't understand"
					]
				},
				{
					id: 2,
					selected: false,
					chats: [
						"Student: Lorem ipsum",
						"Chatbot: What???",
						"Student: Bacon ipsum?",
						"Chatbot: I'm sorry, could you try again?"
					]
				},
				{
					id: 3,
					selected: false,
					chats: [
						"Student: Goldy",
						"Chatbot: Could you please say that again?"
					]
				}
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
			this.cart += 1;
		},
		selectChat(index) {
			for (x in this.onesToCorrect) {
				this.onesToCorrect[x].selected = false;
			}
			this.onesToCorrect[index].selected = true;
		}
	},
	computed: {
		workarea1Height() {
			var height = 4;
			for (x in this.onesToCorrect) {
				height += this.onesToCorrect[x].chats.length * 36;
			}
			return height + 'px';
		},
		title() {
			return this.brand + ' ' + this.product
		},
		image() {
			return this.variants[this.selectedVariant].image
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
