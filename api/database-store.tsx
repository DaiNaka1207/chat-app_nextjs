import { neon } from '@neondatabase/serverless';

const sql = neon(`${process.env.DATABASE_URL}`);

// データベースからメッセージを取得
export function getMessages(query: string) {
  const rows = sql(query);
  return rows;
}
