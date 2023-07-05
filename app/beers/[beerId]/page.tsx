import Image from 'next/image';
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

      <div className='flex gap-2 mb-5'>
        <div className='w-1/5'>
          <div
            style={{
              width: '100%',
              height: '100%',
              position: 'relative',
            }}
          >
            <Image
              className='object-contain p-2 bg-slate-100 rounded-md shadow-sm'
              src={beer.image_url}
              alt='Beer image'
              fill={true}
              sizes='100vw'
            />
          </div>
        </div>
        <div className='w-4/5'>
          <h3 className='italic mb-2 text-end text-slate-600'>
            {beer.tagline}
          </h3>
          <p className='mb-5 text-justify'>{beer.description}</p>
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

export async function generateStaticParams() {
  const params = [];
  for (let i = 1; i <= 10; i++) {
    params.push({ beerId: i.toString() });
  }
  return params;
}
