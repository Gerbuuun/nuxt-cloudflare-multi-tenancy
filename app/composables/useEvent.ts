export default function useEvent() {
  return useState<string>('event', () => '');
}
