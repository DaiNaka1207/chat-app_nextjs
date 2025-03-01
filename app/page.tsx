import MessageArea from '@/app/ui/message-area';
import TitleArea from '@/app/ui/title-area';
import FormArea from './ui/form-area';

export const revalidate = 0; // キャッシュを無効化

export default async function Home() {
  return (
    <div className="w-[1000px] min-w-[600px] mx-auto grid bg-white mt-5 p-5 rounded-xl">
      <TitleArea />
      <MessageArea />
      <FormArea />
    </div>
  );
}
