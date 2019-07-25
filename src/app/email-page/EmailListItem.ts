export class EmailListItem {
    name = 'Fred';
    subject = 'Magic';
    text = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur perferendis officiis enim, suscipit vero odio ratione, animi asperiores eius itaque iste explicabo pariatur? Vitae, accusantium.';
    readFlag = false;

    // use constructor to give unique information to each component
    constructor(user: string, topic: string) {
        this.name = user;
        this.subject = topic;
    }
}
