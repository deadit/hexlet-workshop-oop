const fs = require('fs').promises;

class Pipeline {
  constructor(gist) {
    this.gist = gist || [];
  }

  filter() {
    const filtered = this.gist.filter(name => name[0] !== '.');
    return new Pipeline(filtered);
  }

  middle() {
    const list = [...this.gist];
    const middle = list[Math.round(list.length / 2)];
    return new Pipeline(middle);
  }

  sort() {
    const sorted = [...this.gist].sort();
    return new Pipeline(sorted);
  }

  plural() {
    const str = this.gist;
    const plural = str[str.length - 1] === 's' ? str : `${str}s`;
    return new Pipeline(plural);
  }

  toUpperCase() {
    return new Pipeline(this.gist.toUpperCase());
  }

  render() {
    return this.gist;
  }
}

const pipeline = async () => {
  const promisedFs = fs.readdir;
  const files = await promisedFs('.');
  const pipeline = new Pipeline(files);
  console.log(
    pipeline
    .filter()
    .sort()
    .middle()
    .plural()
    .toUpperCase()
    .render()
  )
};

pipeline();
