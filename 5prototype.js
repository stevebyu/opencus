const app = Vue.createApp({
	created() {
		window.addEventListener('keypress', this.onKeyPress);
	},
	beforeUnmount() {
		window.removeEventListener('keypress', this.onKeyPress);
	},
	data() {
		return {
			doneMessage: '',
			correctionMessage: '',
			inappropriateNum: 0,
			correctedNum: 150,
			correctedToday: 5,
			correctedWeek: 16,
			correctedMonth: 37,
			selectedId: 0,
			selectedCorrection: 0,
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
				},
				{
					id: 4,
					selected: false,
					chats: [
						"Student: I don't think I can.",
						"Chatbot: Could you please say that again?"
					]
				},
				{
					id: 5,
					selected: false,
					chats: [
						"Student: Wait, how do I do it?",
						"Chatbot: I don't understand."
					]
				},
			],
			correctPossibilities: [
				{id: 1, text: "Okay, that's just as well."},
				{id: 2, text: "Great job!"},
				{id: 3, text: "Try looking for hidden files."},
				{id: 4, text: "I still think it's a good idea."},
				{id: 5, text: "I think Jennifer would agree we should try."},
			],
		}
	},
	methods: {
		selectChat(index) {
			var shouldSelect = false;
			this.selectedId = 0;
			if (!this.onesToCorrect[index].selected) {
				shouldSelect = true;
			}
			for (x in this.onesToCorrect) {
				this.onesToCorrect[x].selected = false;
			}
			if (shouldSelect) {
				this.onesToCorrect[index].selected = true;
				this.selectedId = this.onesToCorrect[index].id;
			}
		},
		selectCorrection(id) {
			this.selectedCorrection = id;
		},
		correctTheChat() {
			if (this.selectedId > 0 && this.selectedCorrection > 0) {
				this.correctionMessage = 'corrected!';
				this.onesToCorrect[x]
				var newOnesToCorrect = [];
				for (x in this.onesToCorrect) {
					if (this.onesToCorrect[x].id !== this.selectedId) {
						newOnesToCorrect.push(this.onesToCorrect[x]);
					}
				}
				if (newOnesToCorrect.length === 0) {
console.log('asdf');
					this.doneMessage = 'there are no more to correct right now. good job!';
				}
				this.onesToCorrect = newOnesToCorrect;
				this.inappropriateNum--;
				this.correctedNum++;
				this.correctedToday++;
				this.correctedWeek++;
				this.correctedMonth++;
				console.log('corrected');
			}
		},
		onKeyPress(event) {
			if (event.key == 'Enter') {
				console.log('enter pressed');
				this.correctTheChat();
			}
		},
	},
	computed: {
		inappropriateNumber() {
			return this.onesToCorrect.length;
		},
		workarea1Height() {
			var height = 4;
			for (x in this.onesToCorrect) {
				height += this.onesToCorrect[x].chats.length * 36;
			}
			return height + 'px';
		},
	}
})
