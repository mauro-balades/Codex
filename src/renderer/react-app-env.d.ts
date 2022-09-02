/// <reference types="react-scripts" />
declare module 'styled-components';

declare global {
    interface Window {
      electron: {
        ipcRenderer: {
          send(channel: string, args: unknown[]): void;
          on(
            channel: string,
            func: (...args: unknown[]) => void
          ): (() => void) | undefined;
          once(channel: string, func: (...args: unknown[]) => void): void;
        };
      };
    }
  }
  
  export {};

