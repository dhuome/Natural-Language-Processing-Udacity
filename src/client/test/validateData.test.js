import { validateData } from '../js/displayData'

describe('Putting the data validation to test', () => {
  test('Checking to see if the validation helper function returns the expected results', async () => {

    const result = validateData({
      "confidence": "92",
      "irony": "NONIRONIC",
      "score_tag": "P",
      "subjectivity": "SUBJECTIVE"
    });

    expect(result).toBe(true);
  });
});