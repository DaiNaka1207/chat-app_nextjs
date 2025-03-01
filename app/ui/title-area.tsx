export default function TitleArea() {
  const appName = process.env.APP_NAME || 'Chat-app';

  return (
    <h1 className="text-2xl font-bold">
      {appName}
    </h1>
  )
}