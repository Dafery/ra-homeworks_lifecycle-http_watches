import dayjs from 'dayjs';
import { FC, Key, useEffect, useState } from 'react';

import { getUTCMilliseconds } from '../utils';
import { TClock } from '../types';

type TProps = TClock & {
  deleteClock: (id: Key) => () => void;
};

export const Clock: FC<TProps> = ({ id, name, zone, deleteClock }) => {
  const [time, setTime] = useState(getUTCMilliseconds(zone));

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => prevTime + 1000);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="world-clock-list__item">
      <p className="world-clock-list__item-name">{name}</p>
      <p className="world-clock-list__item-clock">{dayjs(time).format('HH:mm:ss')}</p>
      <button className="world-clock-list__item-delete" onClick={deleteClock(id)}>✘</button>
    </div>
  );
};
