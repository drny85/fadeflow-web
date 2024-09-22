import DownloadLinks from '@/components/DownloadLinks';

export default function Home() {
   return (
      <main className="flex min-h-screen min-w-full flex-col items-center justify-between bg-[#773344]">
         <img src="/images/banner.png" alt="banner" className="w-full h-full object-fill overflow-hidden" />
         <DownloadLinks />
      </main>
   );
}