import { PanelPlugin } from '@grafana/data';
import { SimpleOptions } from './types';
import { SimplePanel } from './SimplePanel';

export const plugin = new PanelPlugin<SimpleOptions>(SimplePanel).setPanelOptions(builder => {
  return builder
    .addRadio({
      path: 'timestamp',
      name: 'Provided Timestamp Format',
      defaultValue: 'ms',
      settings: {
        options: [
          {
            value: 'ms',
            label: 'Milliseconds',
          },
          {
            value: 's',
            label: 'Seconds',
          },
        ],
      },
    })
    .addRadio({
      path: 'format',
      name: 'Uptime Format',
      defaultValue: 'long',
      settings: {
        options: [
          {
            value: 'long',
            label: 'Long Form',
          },
          {
            value: 'short',
            label: 'Short Form',
          },
        ],
      },
    })
    .addBooleanSwitch({
      path: 'pad0s',
      name: 'Pad 0s To The Time',
      defaultValue: false,
    })

    .addTextInput({
      path: 'textSize',
      name: 'Text Size (CSS font-size property)',
      defaultValue: '2em',
    });
});
