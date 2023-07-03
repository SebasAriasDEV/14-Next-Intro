import Link from 'next/link';
import Title from './Title';

export default function Page() {
  return (
    <main>
      <Title />
      <Link
        href='/'
        className='bg-slate-700 hover:bg-slate-500 text-white font-bold py-2 px-4 rounded'
      >
        Volver a principal
      </Link>
    </main>
  );
}
