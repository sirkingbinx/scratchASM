import { ScratchVMState } from "./vmstate";

declare const version: string;
declare const repository: string;

declare function createState(memSize: number?): ScratchVMState;