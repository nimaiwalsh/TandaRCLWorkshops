import axios from 'axios';
import faker from 'faker';

// axios.defaults.baseURL = 'http://localhost:3000';
axios.defaults.baseURL = 'http://52.63.49.248';

const users = [{
  name: 'David Buchan-Swanson',
  email: 'david@tanda.co',
  password: 'testpassword',
}];
for (let i = 0; i < 15; i++) {
  users.push({
    name: faker.name.findName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
  });
}

const randomizer = {
  user() {
    return Math.floor(Math.random() * users.length);
  },
  para() {
    const m = Math.random();
    return m > 0.66
      ? 'paragraphs'
      : m > 0.33
        ? 'paragraph'
        : 'lines';
  },
};

const posts = [];
for (let i = 0; i < 150; i++) {
  posts.push({
    title: faker.lorem.words(),
    body: faker.lorem[randomizer.para()]() // randomly call `paragraph`, `paragraphs`, `lines`
  });
}

async function run() {
  // create our main user
  await Promise.all(users.map(u => axios.post('/users', u)));
  const tokens = (await Promise.all(users.map(({ name, ...login }) => axios.post('/login', login))))
    .map(({ data }) => data.token);

  await Promise.all(posts.map(p => {
    const random = randomizer.user();
    const token = tokens[random];
    axios.post('/posts', p, { headers: { Authorization: `bearer ${tokens[randomizer.user()]}` } })
  }));
}

run();
