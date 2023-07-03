type Props = {
  children: React.ReactNode;
};

export default function PrimeraLayout({ children }: Props) {
  return (
    <>
      <div>
        {children}
        <aside className='bg-blue-100'>Layout de Primera </aside>
      </div>
    </>
  );
}
