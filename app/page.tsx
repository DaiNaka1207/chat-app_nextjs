import { cookies } from 'next/headers';
import { getMessages, create } from '@/api/database-store';

export const revalidate = 0; // キャッシュを無効化

export default async function Home() {
  const appName = process.env.APP_NAME || 'Chat-app';

  // Cookieを読み込み
  const cookieStore = await cookies();
  const nameCookie = cookieStore.get('user_name');
  const name = nameCookie ? nameCookie.value : 'Guest';

  // データを取得
  const ITEMS = await getMessages('SELECT * FROM messages');

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
