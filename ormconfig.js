module.exports = {
  type: 'mysql',
  host: 'localhost',
  port: 3311,
  username: 'root',
  password: '1',
  database: 'my_app',
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  migrations: [__dirname + '/migrations/**/*{.ts,.js}'],
  migrationsRun: false,
  cli: {
    entitiesDir: 'entities',
    migrationsDir: 'migrations',
  },
  // Timezone configured on the MySQL server.
  // This is used to typecast server date/time values to JavaScript Date object and vice versa.
  timezone: 'Z',
  synchronize: false,
  // debug: process.env.NODE_ENV === 'development' ? true : false,
  keepConnectionAlive: true,
  retryAttempts: 5, // I'll use as connectionLimit
  retryDelay: 300, // ms
};
