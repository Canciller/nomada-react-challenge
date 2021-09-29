export default function formatDate(
  date: Date,
  locale = 'es-ES',
  options: Intl.DateTimeFormatOptions = {},
) {
  const opts: Intl.DateTimeFormatOptions = {
    day: '2-digit',
    year: 'numeric',
    month: 'long',
    ...options,
  };

  return date.toLocaleDateString(locale, opts);
}
