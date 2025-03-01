import { cookies } from 'next/headers';
import { create } from '@/api/database-store';
import MessageArea from '@/app/ui/message-area';
import TitleArea from '@/app/ui/title-area';

export const revalidate = 0; // キャッシュを無効化

export default async function Home() {

  // Cookieを読み込み
  const cookieStore = await cookies();
  const nameCookie = cookieStore.get('user_name');
  const name = nameCookie ? nameCookie.value : 'Guest';

  return (
    <div className="w-[1000px] min-w-[600px] mx-auto grid bg-white mt-5 p-5 rounded-xl">

      {/* Title */}
      <TitleArea />

      {/* Message area */}
      <MessageArea />

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
