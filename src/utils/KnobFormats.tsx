export const pan = (angle: number) => {
  if (angle === 0) return 'Center';
  if (angle < 0) return `${Math.round((Math.abs(angle) / 90) * 100)}% L`;
  return `${Math.round((angle / 90) * 100)}% R`;
};

export const vol = (angle: number) => {
  if (angle < 0) {
    const ratio = (angle + 135) / 135;
    const db = -135 + ratio * 135;
    return db.toFixed(2) + ' dB';
  } else {
    const ratio = angle / 135;
    const db = ratio * 12;
    return '+' + db.toFixed(2) + ' dB';
  }
};
