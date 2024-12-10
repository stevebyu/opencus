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
				{id: 1, selected: false, text: "Okay, that's just as well."},
				{id: 2, selected: false, text: "Great job!"},
				{id: 3, selected: false, text: "Try looking for hidden files."},
				{id: 4, selected: false, text: "I still think it's a good idea."},
				{id: 5, selected: false, text: "I think Jennifer would agree we should try."},
			],
		}
	},
	methods: {
		selectChat(index) {
			var shouldSelect = false;
			this.selectedId = 0;
			if (this.onesToCorrect[index] !== undefined) {
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
			}
		},
		selectCorrection(index) {
			this.selectedCorrection = 0;
			var shouldSelect = false;
			if (!this.correctPossibilities[index].selected) {
				shouldSelect = true;
			}
			for (x in this.correctPossibilities) {
				this.correctPossibilities[x].selected = false;
			}
			if (shouldSelect) {
				this.correctPossibilities[index].selected = true;
				this.selectedCorrection = this.correctPossibilities[index].id;
			}
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
				var allPossibilities = [];
				for (x in this.correctPossibilities) {
					this.correctPossibilities[x].selected = false;
					allPossibilities.push(this.correctPossibilities[x]);
					this.selectedCorrection = 0;
				}
				this.onesToCorrect = newOnesToCorrect;
				this.correctPossibilities = allPossibilities;
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
			} else {
				okKeysOnesToCorrect = ['1','2','3','4','5'];
				if (okKeysOnesToCorrect.includes(event.key)) {
					var doSelect = parseInt(event.key) - 1;
					this.selectChat(doSelect);
				}
				okKeysPossibleCorrections = ['a','b','c','d','e'];
				if (okKeysPossibleCorrections.includes(event.key)) {
					var mappedLettersToIndex = {
						'a': 0,
						'b': 1,
						'c': 2,
						'd': 3,
						'e': 4,
					};
					this.selectCorrection(mappedLettersToIndex[event.key]);
				}
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
