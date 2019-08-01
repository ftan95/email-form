export class draftItem {
    name = '';
    subject = '';
    text = '';

    // use constructor to give unique information to each component
    constructor(user: string, topic: string, text: string) {
        this.name = user;
        this.subject = topic;
        this.text = text;
    }
}
