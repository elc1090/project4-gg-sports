import { Pool, PoolConfig, QueryResult, QueryResultRow } from 'pg';


export default class PostgresDB {
  private pool: Pool;

  constructor() {
    const dbConfig: PoolConfig = {
      user: process.env.PG_USERNAME,
      password: process.env.PG_PASSWORD,
      host: process.env.PG_HOST,
      port: parseInt(process.env.PG_PORT!),
      database: process.env.PG_DATABASE
    };
    this.pool = new Pool(dbConfig);
  }

  async query<T extends QueryResultRow = any>(query: string, values?: any[]): Promise<QueryResult<T>> {
    const client = await this.pool.connect();
    try {
      const result = await client.query<T>(query, values);
      return result;
    } finally {
      client.release();
    }
  }

  async end(): Promise<void> {
    await this.pool.end();
  }
}