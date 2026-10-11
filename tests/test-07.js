/* Marlin Test 07 — loaded only when this test is started. */
(function (w) {
  w.MarlinTestModules = w.MarlinTestModules || {};
  w.MarlinTestModules[7] = {
    id: 7,
    title: "Marlin Test 07",
    totalQuestions: 120,
    topicCount: 12,
    topicQuestionCounts: [10,10,10,10,10,10,10,10,10,10,10,10],
    prepareQuestions: function (questions) {
      // Keep the original random order inside each topic, but never interleave topics.
      return (Array.isArray(questions) ? questions : [])
        .map(function (question, index) { return { question: question, index: index }; })
        .sort(function (a, b) {
          return Number(a.question.topic_id) - Number(b.question.topic_id) || a.index - b.index;
        })
        .map(function (entry) { return entry.question; });
    }
  };
})(window);
