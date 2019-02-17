import Tag from './Tag';

export default class extends Tag {
  constructor(name, attributes) {
    super(name, attributes);
  }

  toString() {
    return `<${this.name} ${this.getAttributes()} />`
  }
}
