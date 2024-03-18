import { LivenessMachineState } from '../service';
export type LivenessSelectorFn<T> = (state: LivenessMachineState) => T;
export declare function createLivenessSelector<T>(selector: LivenessSelectorFn<T>): LivenessSelectorFn<T>;
export declare function useLivenessSelector<T>(selector: LivenessSelectorFn<T>): T;
