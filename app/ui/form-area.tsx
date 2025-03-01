import { create } from '@/api/database-store';
import { cookies } from 'next/headers';

export default async function FormArea() {
  // Cookieを読み込み
  const cookieStore = await cookies();
  const nameCookie = cookieStore.get('user_name');
  const name = nameCookie ? nameCookie.value : 'Guest';

  return (
    <>
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
    </>
  )
}