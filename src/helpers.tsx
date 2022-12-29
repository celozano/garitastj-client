export const formatWaitTime = (time: string) => {
  if (time === 'N/A') {
    return <span>N/A</span>;
  }

  const minutes = Number(time);
  const textColor =
    minutes <= 30
      ? 'text-green-600'
      : minutes <= 60
      ? 'text-yellow-500'
      : 'text-red-600';

  const mm = minutes % 60;
  const hh = Math.floor(minutes / 60);

  const waitTime =
    hh > 0 && mm > 0
      ? `${hh}h ${mm}m`
      : hh > 0 && mm === 0
      ? `${hh}h`
      : `${mm}m`;

  return <span className={textColor}>{waitTime}</span>;
};
