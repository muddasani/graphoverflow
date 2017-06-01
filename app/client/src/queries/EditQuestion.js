// getQuestionQuery generates a query to fetch the question with the given UID
export function getQuestionQuery(questionUID) {
  return `{
    question(id: ${questionUID}) {
      Title {
        Text
      }
      Body {
        Text
      }
      Tags {
        TagName: Text
      }
      Timestamp
    }
  }`;
}