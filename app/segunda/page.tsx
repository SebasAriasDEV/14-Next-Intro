import Link from 'next/link';

export default function Page() {
  return (
    <main>
      <h1 className='font-bold text-2xl'>Segunda</h1>
      <hr className='my-4' />
      <Link
        href='/'
        className='bg-slate-700 hover:bg-slate-500 text-white font-bold py-2 px-4 rounded'
      >
        Volver a principal
      </Link>
    </main>
  );
}
