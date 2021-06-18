type Timestamp = 'ms' | 's';
type TimeFormat = 'short' | 'long';

export interface SimpleOptions {
  timestamp: Timestamp;
  format: TimeFormat;
  pad0s: boolean;

  textSize: string;
}
