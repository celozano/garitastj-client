import { useQuery } from 'react-query';

import { Card, Error, Footer, SkeletonLoader } from './components';
import { Port } from './types';

export const App = () => {
  const { data, isLoading, error } = useQuery('border-wait-times', () =>
    fetch(import.meta.env.VITE_BWT_API_URL).then((res) => res.json())
  );

  return (
    <div className="mx-auto flex h-screen max-w-7xl flex-col justify-between pt-0 lg:pt-28">
      <>
        {error && <Error />}

        <div className="grid grid-cols-[repeat(auto-fill,minmax(theme(width.64),1fr))] gap-2 p-2">
          {isLoading
            ? Array(4)
                .fill('')
                .map((_, index) => <SkeletonLoader key={index} />)
            : data?.ports.map((port: Port) => (
                <Card key={port.port_name} port={port} />
              ))}
        </div>

        {data?.ports.length && <Footer />}
      </>
    </div>
  );
};
