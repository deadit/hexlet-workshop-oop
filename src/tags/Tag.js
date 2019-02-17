export default class {
  constructor(name, attributes) {
    this.name = name;
    this.attributes = attributes;
  }

  getAttributes() {
    return Object.keys(this.attributes)
                  .reduce(
                    (acc, key) => `${acc} ${key}='${this.attributes[key]}'`
                  , '')
  }
}
