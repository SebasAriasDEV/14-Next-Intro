import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <h1 className='font-bold text-2xl'>
        Mi primer proyecto de Next JS (13.2)
      </h1>
      <hr className='my-4' />
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
    </main>
  );
}
