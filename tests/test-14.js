/* Marlin Test 14 — loaded only when this test is started. */
(function (w) {
  w.MarlinTestModules = w.MarlinTestModules || {};
  w.MarlinTestModules[14] = {
    id: 14,
    title: "Marlin Test 14",
    totalQuestions: 150,
    topicCount: 12,
    topicQuestionCounts: [13,13,13,13,13,13,13,13,10,10,13,13],
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
