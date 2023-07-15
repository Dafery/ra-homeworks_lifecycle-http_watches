import { FC, FormEventHandler, Key, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { Clock } from './Clock';
import { TClock } from '../types';

export const WorldClock: FC = () => {
  const [clocks, setClocks] = useState<TClock[]>([]);

  const addClock: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    const newClock: TClock = {
      id: uuidv4(),
      name: String(e.currentTarget['name-capital'].value),
      zone: Number(e.currentTarget['time-zone'].value),
    };

    setClocks((prevState) => {
      return prevState.concat(newClock);
    });
  };

  const deleteClock = (id: Key) => () => {
    setClocks((prevState) => prevState.filter((el) => el.id !== id));
  };

  return (
    <>
      <form className="world-clock" onSubmit={addClock}>
        <label className="world-clock__label">
          Название
          <input className="world-clock__input" name="name-capital" type="text" required />
        </label>
        <label className="world-clock__label">
          Временная зона
          <input className="world-clock__input" name="time-zone" type="text" required />
        </label>
        <button className="world-clock__btn-add">Добавить</button>
      </form>
      <div className="world-clock-list">
        {clocks.map((clock) => (
          <Clock key={clock.id} deleteClock={deleteClock} {...clock} />
        ))}
      </div>
    </>
  );
};
