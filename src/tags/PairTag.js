import Tag from './Tag';

export default class extends Tag {
  constructor(name, attributes, content) {
    super(name, attributes);
    this.content = content;
  }

  toString() {
    return `<${this.name} ${this.getAttributes()}>${this.content}</${this.name}`
  }
}
