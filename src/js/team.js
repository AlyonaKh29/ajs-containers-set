export class Team {
    constructor() {
        this.members = new Set();
    }

    add(character) {
        if (this.members.has(character)) {
            throw new Error('This character is on the team');
        }
        this.members.add(character);
    }

    addAll(...characters) {
        characters.forEach((person) => {
            this.members.add(person);
        })
    }

    toArray() {
        return Array.from(this.members);
    }
}
