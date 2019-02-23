
const randomString = () => {
  return Math.random().toString(36).substring(2);
}

const randomList = (count) => {
  const list = new Array(count);
  return list.fill(0).map((x, index) => ({
    id: index,
    name: randomString(),
    b: Math.random()*1000,
    c: 'xyz',
    d: 'lorem',
    e: Math.random()*1000,
  }));
};


export {
  randomList,
  randomString,
}
