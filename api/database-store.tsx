import { neon } from '@neondatabase/serverless';
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';

const sql = neon(`${process.env.DATABASE_URL}`);

// データベースからメッセージを取得
export function getMessages(query: string) {
  const rows = sql(query);
  return rows;
}

// データベースへの接続
export async function create(formData: FormData) {
  'use server';

  // Connect to the Neon database
  const user = formData.get('name');
  const message = formData.get('message');
  // Insert the comment from the form into the Postgres database
  await sql('INSERT INTO messages ("user", message) VALUES ($1, $2)', [user, message]);

  // 365日後の日付を取得
  const expirationDate = new Date(Date.now() + 9 * 60 * 60 * 1000); // 日本時間を取得
  expirationDate.setDate(expirationDate.getDate() + 365);

  // Cookieを設定
  const cookieStore = await cookies();
  cookieStore.set('user_name', user as string, { expires: expirationDate });
  
  redirect('/');
}