import i18n from 'i18n';
import path from 'path';
import { fileURLToPath } from 'url';

// Define __filename and __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

i18n.configure({
  locales: ['en', 'bg'],
  directory: path.join(__dirname, 'locales'),
  defaultLocale: 'bg',
  objectNotation: true,
  updateFiles: false,
});

export default i18n;