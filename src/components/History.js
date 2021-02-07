import React, { useContext } from 'react';
import uuid from 'uuidv4';
import { GameContext } from '../contexts/GameContext';

export default function History() {
  const {
    history,
    setHistory,
    setSquares,
    setIsXNext,
    setWhoIsWinner,
  } = useContext(GameContext);

  function handleClick(index) {
    const newHistory = [...history];
    newHistory.splice(index, Number.MAX_SAFE_INTEGER);
    setHistory(newHistory);

    setSquares(history[index].squares);
    setIsXNext(history[index].isNext);
    setWhoIsWinner(history[index].whoIsWinner);
  }

  return (
    <div>
      {history.map((data, index) => (
        <div key={uuid()} className="history">
          <button type="button" onClick={() => handleClick(index)}>voltar para a jogada{index}</button>
        </div>
      ))}
    </div>
  );
}
