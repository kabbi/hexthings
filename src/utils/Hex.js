const DOT_CHAR_CODE = '.'.charCodeAt(0);

export const formatHex = (value, length) => (
  (`0000000000000000${value.toString(16)}`).substr(-length)
);

export const formatString = (buffer, start, end) => {
  const chars = [];
  for (let i = start; i < end; i++) {
    const value = buffer[i];
    chars.push((value < 0x20 || value > 0x70) ? DOT_CHAR_CODE : value);
  }
  return String.fromCharCode(...chars);
};

export const randomData = length => {
  const array = new Uint8Array(length);
  for (let i = 0; i < length; i++) {
    array[i] = Math.floor(Math.random() * 256);
  }
  return array;
};
