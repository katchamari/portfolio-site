function playSound(file: string) {
  const audio = new Audio(file);
  if (!audio) return;
  audio.play();
}

export function playClick() {
  playSound("/click.mp3");
}
