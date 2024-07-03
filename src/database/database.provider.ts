import { DataSource } from 'typeorm';


export const Database = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'postgres',
        host: process.env.host_db,
        port: Number(process.env.port_db),
        username: process.env.user_db,
        password: process.env.password_db,
        database: process.env.db_name,
        entities: [
            __dirname + '/../**/*.entity{.ts,.js}',
        ],
        synchronize: true,
      });

      return dataSource.initialize();
    },
  },
];
