const port = process.env.PORT || 3001;

const config = {
  "serverPort": port,
  "db": {
    "name": "task-tracker",
    "host": "localhost",
    "port": "27017"
  },
};

module.exports = config;