'use strict';

const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js");
const britishOnly = require('./british-only.js');

class Translator {

  replaceAll(text, dict) {
    const keys = Object.keys(dict).sort((a,b) => b.length - a.length); // multi-word first
    keys.forEach(key => {
      // Escape special chars in key
      const escapedKey = key.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
      // Global, case-insensitive, match word or phrase anywhere
      const regex = new RegExp(escapedKey, 'gi');
      text = text.replace(regex, match => `<span class="highlight">${dict[key]}</span>`);
    });
    return text;
  }

  replaceTitles(text, dict, direction='us-to-uk') {
    Object.entries(dict).forEach(([us, uk]) => {
      const from = direction==='us-to-uk' ? us : uk;
      const to = direction==='us-to-uk' ? uk : us;
      const escapedFrom = from.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
      const regex = new RegExp(`\\b${escapedFrom}\\b`, 'gi'); // \b to match word boundaries
      text = text.replace(regex, match => `<span class="highlight">${to}</span>`);
    });
    return text;
  }

  americanToBritish(text) {
    let translated = text;

    translated = this.replaceAll(translated, americanOnly);
    translated = this.replaceAll(translated, americanToBritishSpelling);
    translated = this.replaceTitles(translated, americanToBritishTitles, 'us-to-uk');

    // Time hh:mm -> hh.mm
    translated = translated.replace(/(\d{1,2}):(\d{2})/g, '<span class="highlight">$1.$2</span>');

    return translated === text ? "Everything looks good to me!" : translated;
  }

  britishToAmerican(text) {
    let translated = text;

    translated = this.replaceAll(translated, britishOnly);
    translated = this.replaceTitles(translated, americanToBritishTitles, 'uk-to-us');

    // Time hh.mm -> hh:mm
    translated = translated.replace(/(\d{1,2})\.(\d{2})/g, '<span class="highlight">$1:$2</span>');

    return translated === text ? "Everything looks good to me!" : translated;
  }

  translate(text, locale) {
    if (text === undefined || locale === undefined) return { error: 'Required field(s) missing' };
    if (!text) return { error: 'No text to translate' };

    if (locale === 'american-to-british') {
      return { text, translation: this.americanToBritish(text) };
    } else if (locale === 'british-to-american') {
      return { text, translation: this.britishToAmerican(text) };
    } else {
      return { error: 'Invalid value for locale field' };
    }
  }

}

module.exports = Translator;
