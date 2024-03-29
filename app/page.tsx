import MainTitle from '@/components/MainTitle';
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <MainTitle />
      <Link
        href='/primera'
        className='bg-slate-700 hover:bg-slate-500 text-white font-bold py-2 px-4 rounded'
      >
        Ir a primera
      </Link>
      <Link
        href='/segunda'
        className='bg-slate-700 hover:bg-slate-500 text-white font-bold py-2 px-4 rounded'
      >
        Ir a segunda
      </Link>
      <Link
        href='/beers'
        className='bg-yellow-600 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded'
      >
        Ir a Beers
      </Link>
    </main>
  );
}
