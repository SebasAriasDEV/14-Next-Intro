type Props = {
  children: React.ReactNode;
};

export default function PrimeraLayout({ children }: Props) {
  return (
    <>
      <div>
        {children}
        <aside className='bg-blue-100 p-3'>Layout de Primera </aside>
      </div>
    </>
  );
}
