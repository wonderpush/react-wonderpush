import { writable } from "svelte/store";

export const WonderPushState = writable(false);

export function setWonderPushState(state: boolean) {
  WonderPushState.set(state);
}
