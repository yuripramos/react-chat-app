export const forNextTick = (timeout = 1) =>
  new Promise(resolve => setTimeout(resolve, timeout));
