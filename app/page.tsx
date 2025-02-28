import { neon } from '@neondatabase/serverless';
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import { getMessages } from '@/api/database-store';

export const revalidate = 0; // キャッシュを無効化

export default async function Home() {
  const appName = process.env.APP_NAME;

  // Cookieを読み込み
  const cookieStore = await cookies();
  const nameCookie = cookieStore.get('user_name');
  const name = nameCookie ? nameCookie.value : 'Guest';

  // データを取得
  const ITEMS = await getMessages('SELECT * FROM messages');

  // データベースへの接続
  async function create(formData: FormData) {
    'use server';

    // Connect to the Neon database
    const sql = neon(`${process.env.DATABASE_URL}`);
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

  return (
    <div className="w-[1000px] min-w-[600px] mx-auto grid bg-white mt-5 p-5 rounded-xl">

      {/* Title */}
      <p className="text-2xl font-bold">
        {appName}
      </p>

      {/* Message area */}
      {ITEMS.map((item) => {
        return (
          <div key={item.id} className="mt-5">
            <div className="flex gap-2 text-xs">
              <p>{new Date(item.date).toLocaleString()}</p>
              <p>@{item.user}</p>
            </div>
            <p>{item.message}</p>
          </div>
        );
      })}

      {/* Form area */}
      <hr className="mt-5"/>

      <form className="mt-5 flex items-center" action={create}>
        <div className="flex items-center">
          <label>Name</label>
          <input type="text" name="name" className="bg-gray-200 ml-2 p-1 w-24" defaultValue={name} required />
        </div>
        
        <div className="ml-5 flex-1 flex items-center">
          <label>Message</label>
          <input type="text" name="message" className="bg-gray-200 ml-2 p-1 flex-1" autoFocus required/>
        </div>

        <div>
          <button type="submit" className="ml-3 py-1 px-2 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-gray-200 text-gray-800 hover:bg-gray-200 focus:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none">
            送信
          </button>
        </div>
      </form>

    </div>
  );
}
