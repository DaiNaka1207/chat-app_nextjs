import MessageArea from '@/app/ui/message-area';
import TitleArea from '@/app/ui/title-area';
import FormArea from './ui/form-area';

export const revalidate = 0; // キャッシュを無効化

export default async function Home() {
  return (
    <div className="flex justify-center">
      <div className="w-full sm:w-6/12 min-w-max flex flex-col m-5 p-5 bg-white rounded-xl">
        <TitleArea />
        <MessageArea />
        <FormArea />
      </div>
    </div>
  );
}
