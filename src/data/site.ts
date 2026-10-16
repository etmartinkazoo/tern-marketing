export const site = {
  name: 'tern',
  tagline: 'Mail at the speed of vim.',
  description:
    'tern is mutt for 2026: mail, calendar and contacts in one dense, keyboard-driven terminal app. Push IMAP, CalDAV, CardDAV, undo send, snooze — and it wears your Omarchy theme.',
  version: '0.1.0',
  license: 'MIT',
};

export const sections = [
  { id: 'start', title: 'Getting started' },
  { id: 'mail', title: 'Mail' },
  { id: 'calendar', title: 'Calendar & people' },
  { id: 'plugins', title: 'Plugins' },
  { id: 'reference', title: 'Reference' },
] as const;
