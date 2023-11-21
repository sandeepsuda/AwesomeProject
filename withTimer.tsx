import React, {ComponentType, useCallback, useState} from 'react';

export function withTimer<T>(Component: ComponentType<T>) {
  return (hocProps: Omit<T, 'count' | 'startTimer' | 'endTimer'>) => {
    const [count, setCount] = useState(0);
    const [timer, setTimer] = useState<NodeJS.Timeout>();

    const startTimer = useCallback(() => {
      const interval = setInterval(
        () =>
          setCount(previous => {
            return previous + 1;
          }),
        1000,
      );
      setTimer(interval);
    }, []);

    const endTimer = useCallback(() => {
      clearInterval(timer);
      setCount(0);
    }, [timer]);

    return (
      <Component
        {...(hocProps as T)}
        startTimer={startTimer}
        endTimer={endTimer}
        count={count}
      />
    );
  };
}
