import { getMessages } from "@/api/database-store";

export default async function messageArea() {
  // データを取得
  const ITEMS = await getMessages('SELECT * FROM messages');

  return (
    <div>
      {ITEMS.map((item) => {
        return (
          <div key={item.id} className="mt-5">
            <div className="flex gap-2 text-xs">
              <p>{new Date(item.date).toLocaleString()}</p>
              <p>@{item.user}</p>
            </div>
            <p>{item.message}</p>
          </div>
        )
      })}
    </div>
  )
}