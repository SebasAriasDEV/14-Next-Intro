import Link from 'next/link';

type Beer = Record<string, any>;

const loadBeers = async (): Promise<Array<Beer>> => {
  const response = await fetch('https://api.punkapi.com/v2/beers');
  const beers = await response.json();

  console.log(beers);
  return beers;
};

export default async function Page() {
  const beers = await loadBeers();
  return (
    <main>
      <h1 className='font-bold text-2xl'>Beers</h1>
      <hr className='my-4' />
      <div className='flex flex-col'>
        {beers.map((beer) => (
          <Link href={`/beers/${beer.id}`}>{beer.name}</Link>
        ))}
      </div>
    </main>
  );
}