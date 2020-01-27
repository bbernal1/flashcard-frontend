export class Flashcard {
    constructor(
        public id: string,
        public word: string,
        public translation: string,
        public easiness: number,
        public repetitions: number,
        public interval: number,
        public dueDate: string
    ) {}
}