import shortid from 'shortid';


const initialState = [
  {
    title: 'First task',
    description: 'This is my first task in this world. I have to be burn.',
    date: new Date('Jun 12 1988'),
    priority: 'hight',
    complited: true,
    id: shortid.generate(),
  },
  {
    title: 'Second task',
    description: 'This is the second task. I have to learn JS.',
    date: new Date('Aug 18 2017'),
    priority: 'low',
    complited: false,
    id: shortid.generate(),
  },
  {
    title: 'Task tracker',
    description: 'Implemented task tracker single page API.',
    date: new Date('Mar 20 2018'),
    priority: 'low',
    complited: false,
    id: shortid.generate(),
  },
];

export default initialState;