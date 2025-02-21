export default function Home() {
  const appName = process.env.APP_NAME;
  return (
    <div className="w-[1000px] min-w-[600px] mx-auto grid bg-white mt-5 p-5 rounded-xl">

      {/* Title */}
      <p className="text-2xl font-bold">
        {appName}
      </p>

      {/* Message area */}
      <div className="mt-5">
        <div className="flex gap-2 text-xs">
          <p>2025-2-21 23:30</p>
          <p>@user</p>
        </div>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. In, ipsam.</p>
      </div>

      <div className="mt-5">
        <div className="flex gap-2 text-xs">
          <p>2025-2-21 23:30</p>
          <p>@user</p>
        </div>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure magni tempore, ad voluptas explicabo exercitationem!</p>
      </div>

      <div className="mt-5">
        <div className="flex gap-2 text-xs">
          <p>2025-2-21 23:30</p>
          <p>@user</p>
        </div>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>

      <div className="mt-5">
        <div className="flex gap-2 text-xs">
          <p>2025-2-21 23:30</p>
          <p>@user</p>
        </div>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, autem.</p>
      </div>

      <div className="mt-5">
        <div className="flex gap-2 text-xs">
          <p>2025-2-21 23:30</p>
          <p>@user</p>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus accusamus sed cum et sunt, omnis iste doloribus dolore modi. Neque!</p>
      </div>

      {/* Form area */}
      <hr className="mt-5"/>

      <form className="mt-5 flex items-center">
        <div className="flex items-center">
          <label>Name</label>
          <input type="text" className="bg-gray-200 ml-2 p-1 w-24" autoFocus />
        </div>
        
        <div className="ml-5 flex-1 flex items-center">
          <label>Message</label>
          <input type="text" className="bg-gray-200 ml-2 p-1 flex-1" />
        </div>

        <div>
          <button type="button" className="ml-3 py-1 px-2 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-gray-200 text-gray-800 hover:bg-gray-200 focus:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none">
            送信
          </button>
        </div>
      </form>

    </div>
  );
}
