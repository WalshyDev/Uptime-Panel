import React, { useState } from 'react';
import { PanelProps } from '@grafana/data';
import { SimpleOptions } from 'types';
import { css, cx } from 'emotion';

interface Props extends PanelProps<SimpleOptions> {}

let timer: NodeJS.Timeout | null = null;

export const SimplePanel: React.FC<Props> = ({ options, data, width, height }) => {
  const [time, setTime] = useState(new Date().getTime());

  const values = data.series
    .map(series => series.fields.find(field => field.type === 'number'))
    .map(field => field?.values.get(field.values.length - 1));

  if (values.length === 0) {
    return <div style={{ color: 'red' }}>Please add a query giving an unix timestamp!</div>;
  }
  const value = values[0];

  if (timer === null) {
    timer = setInterval(() => {
      setTime(new Date().getTime());
    }, 1000);
  }

  let diff;
  // If the user provides a second-since-epoch timestamp then we need to handle the time a bit differently
  if (options.timestamp === 's') {
    const secTime = time / 1000;
    diff = Math.floor(secTime - value);
  } else {
    diff = Math.floor((time - value) / 1000);
  }

  return (
    <div
      className={cx(
        css`
          width: ${width}px;
          height: ${height}px;
          position: relative;
          text-align: center;
          font-size: ${options.textSize};
        `
      )}
    >
      {formatTime(diff, options)}
    </div>
  );
};

const DAY_SECONDS = 86400;
const HOUR_SECONDS = 3600;
const MINUTE_SECONDS = 60;

const formatTime = (diffSeconds: number, options: SimpleOptions) => {
  const days = Math.floor(diffSeconds / DAY_SECONDS);
  const hours = Math.floor((diffSeconds - days * DAY_SECONDS) / HOUR_SECONDS);
  const minutes = Math.floor((diffSeconds - days * DAY_SECONDS - hours * HOUR_SECONDS) / MINUTE_SECONDS);
  const seconds = diffSeconds - days * DAY_SECONDS - hours * HOUR_SECONDS - minutes * MINUTE_SECONDS;

  let output = '';
  if (days > 0) {
    output =
      `${days < 10 && options.pad0s ? '0' : ''}${days}` +
      ` ${options.format === 'short' ? 'd' : days > 1 ? 'days' : 'day'}`;
  }
  if (hours > 0) {
    output +=
      ` ${hours < 10 && options.pad0s ? '0' : ''}${hours}` +
      ` ${options.format === 'short' ? 'h' : hours > 1 ? 'hours' : 'hour'}`;
  }
  if (minutes > 0) {
    output +=
      ` ${minutes < 10 && options.pad0s ? '0' : ''}${minutes}` +
      ` ${options.format === 'short' ? 'm' : minutes > 1 ? 'minutes' : 'minute'}`;
  }
  if (seconds > 0) {
    output +=
      ` ${seconds < 10 && options.pad0s ? '0' : ''}${seconds}` +
      ` ${options.format === 'short' ? 's' : seconds > 1 ? 'seconds' : 'second'}`;
  }

  return output.trim();
};
