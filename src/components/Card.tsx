import { formatWaitTime } from '../helpers';
import { Port } from '../types';

export const Card = ({ port }: { port: Port }) => {
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
