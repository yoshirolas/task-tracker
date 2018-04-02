import shortid from 'shortid';


const initialState = [
  {
    title: 'First task',
    description: 'This is my first task. I have to come into this world',
    date: new Date('Jun 12 1988'),
    priority: 'hight',
    complited: true,
    _id: shortid.generate(),
  },
  {
    title: 'Second task',
    description: 'This is my second task. I have to understand why I was born into the world',
    date: new Date('Jun 13 1988'),
    priority: 'hight',
    complited: false,
    _id: shortid.generate(),
  },
  {
    title: 'Front-end',
    description: 'Learn HTML, CSS and JavaScript and create my own cool Web application',
    date: new Date('Aug 18 2017'),
    priority: 'hight',
    complited: false,
    _id: shortid.generate(),
  },
  {
    title: 'Snowboarding',
    description: 'Practice new flat tricks',
    date: new Date('Feb 7 2018'),
    priority: 'low',
    complited: true,
    _id: shortid.generate(),
  },
  {
    title: 'Task tracker',
    description: 'Implemented task tracker single page API.',
    date: new Date('Mar 20 2018'),
    priority: 'hight',
    complited: false,
    _id: shortid.generate(),
  },
];

export default initialState;