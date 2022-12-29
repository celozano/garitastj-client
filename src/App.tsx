import { useQuery } from 'react-query';

import { formatWaitTime } from './helpers';
import { Port } from './types';

const Card = ({ port }: { port: Port }) => {
  return (
    <div className="space-y-2 border-2 border-black bg-white p-5">
      <div className="flex items-end justify-between">
        <h3 className="text-xl font-extrabold">{port.port_name}</h3>
        <span
          className={
            port.port_status === 'Open' ? 'text-green-600' : 'text-red-600'
          }
        >
          {port.port_status}
        </span>
      </div>
      <div>
        <h4 className="text-lg font-semibold">Vehicles</h4>
        <ul>
          <li>
            <span>Ready Line: </span>
            {formatWaitTime(port.wait_times.vehicle.ready)}
          </li>
          <li>
            <span>Standard: </span>
            {formatWaitTime(port.wait_times.vehicle.standard)}
          </li>
          <li>
            <span>Sentri: </span>
            {formatWaitTime(port.wait_times.vehicle.sentri)}
          </li>
        </ul>
      </div>
      <div>
        <h3 className="text-lg font-semibold">Pedestrian</h3>
        <ul>
          <li>
            <span>Ready Line: </span>
            {formatWaitTime(port.wait_times.pedestrian.ready)}
          </li>
          <li>
            <span>Standard: </span>
            {formatWaitTime(port.wait_times.pedestrian.standard)}
          </li>
          <li>
            <span>Pedwest: </span>
            {formatWaitTime(port.wait_times.pedestrian.pedwest)}
          </li>
          {port.wait_times.pedestrian.sentri && (
            <li>
              <span>Sentri: </span>
              {formatWaitTime(port.wait_times.pedestrian.sentri)}
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export const App = () => {
  const { data, isLoading, error } = useQuery('border-wait-times', () =>
    fetch(import.meta.env.VITE_BWT_API_URL).then((res) => res.json())
  );

  return (
    <div className="mx-auto flex h-screen max-w-7xl flex-col justify-between">
      {isLoading && <div className="p-2">Loading...</div>}
      {error && (
        <div className="p-2">Something went wrong. Try again later.</div>
      )}
      <div className="grid grid-cols-[repeat(auto-fill,minmax(theme(width.64),1fr))] gap-2 p-2">
        {data?.ports.map((port: Port) => (
          <Card key={port.port_name} port={port} />
        ))}
      </div>

      {data?.ports.length && (
        <div className="flex justify-center p-2 text-xs">
          <div className="text-center">
            <p>
              Created by{' '}
              <a
                href="https://carloslozano.dev"
                target="_blank"
                className="hover:underline"
              >
                Carlos Lozano
              </a>
            </p>
            <p>Data provided by CBP</p>
          </div>
        </div>
      )}
    </div>
  );
};
