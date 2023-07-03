import Link from 'next/link';

type Beer = Record<string, any>;

const loadBeerById = async (id: string): Promise<Beer> => {
  const response = await fetch(`https://api.punkapi.com/v2/beers/${id}`);
  const [beer] = await response.json();

  return beer;
};

type Props = {
  params: {
    beerId: string;
  };
};

export default async function Page({ params }: Props) {
  const beer = await loadBeerById(params.beerId);
  return (
    <main>
      <h1 className='font-bold text-2xl'>{beer.name}</h1>
      <hr className='my-4' />
      <div className='flex'>
        <img className=' p-10 max-w-md max-h-56' src={beer.image_url} alt='' />
        <div>
          <h3 className='italic mb-2 text-end text-slate-600'>
            "{beer.tagline}"
          </h3>
          <p>{beer.description}</p>
        </div>
      </div>

      <Link
        href='/beers'
        className='bg-slate-700 hover:bg-slate-500 text-white font-bold py-2 px-4 rounded'
      >
        Back
      </Link>
    </main>
  );
}