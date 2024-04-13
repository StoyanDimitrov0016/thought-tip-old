const AVG_WORDS_PER_MINUTE = 238;
const whitespaceRegEx = /\s+/;

function calculateAvgReadingTime(text) {
  const wordsCount = text.trim().split(whitespaceRegEx).length;
  const minutes = Math.ceil(wordsCount / AVG_WORDS_PER_MINUTE);
  return minutes;
}

function formatAvgReadingTime(minutes) {
  const minutesGrammaticalNumber = minutes === 1 ? "minute" : "minutes";
  return `${minutes} ${minutesGrammaticalNumber}`;
}

function formatAndCalculateAvgReadingTime(text) {
  const minutes = calculateAvgReadingTime(text);
  const formattedTime = formatAvgReadingTime(minutes);
  return formattedTime;
}

export default formatAndCalculateAvgReadingTime;
