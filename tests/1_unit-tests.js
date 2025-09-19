const chai = require('chai');
const assert = chai.assert;

const Translator = require('../components/translator.js');
const translator = new Translator();

suite('Unit Tests', () => {

  test('Translate Mangoes are my favorite fruit. to British English', () => {
    assert.equal(translator.translate('Mangoes are my favorite fruit.', 'american-to-british').translation, 
                 'Mangoes are my <span class="highlight">favourite</span> fruit.');
  });

  test('Translate I ate yogurt for breakfast. to British English', () => {
    assert.equal(translator.translate('I ate yogurt for breakfast.', 'american-to-british').translation, 
                 'I ate <span class="highlight">yoghurt</span> for breakfast.');
  });

  test('Translate We had a party at my friend\'s condo. to British English', () => {
    assert.equal(translator.translate('We had a party at my friend\'s condo.', 'american-to-british').translation, 
                 'We had a party at my friend\'s <span class="highlight">flat</span>.');
  });

  test('Translate Can you toss this in the trashcan for me? to British English', () => {
    assert.equal(translator.translate('Can you toss this in the trashcan for me?', 'american-to-british').translation, 
                 'Can you toss this in the <span class="highlight">bin</span> for me?');
  });

  test('Translate The parking lot was full. to British English', () => {
    assert.equal(translator.translate('The parking lot was full.', 'american-to-british').translation, 
                 'The <span class="highlight">car park</span> was full.');
  });

  test('Translate Like a high tech Rube Goldberg machine. to British English', () => {
    assert.equal(translator.translate('Like a high tech Rube Goldberg machine.', 'american-to-british').translation, 
                 'Like a high tech <span class="highlight">Heath Robinson device</span>.');
  });

  test('Translate To play hooky means to skip class or work. to British English', () => {
    assert.equal(translator.translate('To play hooky means to skip class or work.', 'american-to-british').translation, 
                 'To play <span class="highlight">bunk off</span> means to skip class or work.');
  });

  test('Translate No Mr. Bond, I expect you to die. to British English', () => {
    assert.equal(translator.translate('No Mr. Bond, I expect you to die.', 'american-to-british').translation, 
                 'No <span class="highlight">Mr</span> Bond, I expect you to die.');
  });

  test('Translate Dr. Grosh will see you now. to British English', () => {
    assert.equal(translator.translate('Dr. Grosh will see you now.', 'american-to-british').translation, 
                 '<span class="highlight">Dr</span> Grosh will see you now.');
  });

  test('Translate Lunch is at 12:15 today. to British English', () => {
    assert.equal(translator.translate('Lunch is at 12:15 today.', 'american-to-british').translation, 
                 'Lunch is at <span class="highlight">12.15</span> today.');
  });

  // Add all British-to-American translations following the same pattern...
});
