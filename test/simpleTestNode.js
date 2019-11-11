/**
 * Modification to TinyTest called SimpleTestNode
 * 
 * Library has same functionality than TinyTest but was modified to run 
 * better in Node (so no need of the HTML file).
 */
const logSymbols = require('log-symbols');

const SimpleTestHelper = {
  renderStats: function(failures, successes){
    // General styling
    document.body.style.fontFamily = "arial";
    document.body.style.textAlign = "center";
    // Message
    let numberOfTests = failures + successes;
    let statisticsText = "Ran " + numberOfTests + " tests: " + successes + " passed, and " + failures + " failed."
    // Display in DOM
    let statisticsTextContainer = document.createElement("h1");
    let statisticsTextContent = document.createTextNode(statisticsText); 
    statisticsTextContainer.appendChild(statisticsTextContent);
    statisticsTextContainer.style.color = "#333";
    document.body.appendChild(statisticsTextContainer);
  }
}

const SimpleTest = {

  run: function(tests) {
      let failures = 0;
      let successes = 0;
      for (let testName in tests) {
          let testAction = tests[testName];
          try {
              testAction.apply(this);
              successes++;
              console.log(logSymbols.success, "\x1b[32m", testName);
          } catch (e) {
              failures++;
              console.error(logSymbols.error, "\x1b[31m", `${e.name} ${failures}: `, e.message);
          }
      };
      console.log("\x1b[34m", `From a total of ${successes + failures} tests:`)
      console.log("\x1b[34m", `You had ${successes} passing tests.`);
      console.log("\x1b[34m", `You had ${failures} errors.`, "\x1b[37m");
  },

  fail: function(msg) {
      throw new Error('fail(): ' + msg);
  },

  assert: function(value, msg) {
      if (!value) {
          throw new Error('assert(): ' + msg);
      }
  },

  assertEquals: function(expected, actual) {
      if (expected != actual) {
          throw new Error('assertEquals() "' + expected + '" != "' + actual + '"');
      }
  },

  assertStrictEquals: function(expected, actual) {
      if (expected !== actual) {
          throw new Error('assertStrictEquals() "' + expected + '" !== "' + actual + '"');
      }
  },

};


export const fail               = SimpleTest.fail.bind(SimpleTest),
  assert             = SimpleTest.assert.bind(SimpleTest),
  assertEquals       = SimpleTest.assertEquals.bind(SimpleTest),
  eq                 = SimpleTest.assertEquals.bind(SimpleTest), // alias for assertEquals
  assertStrictEquals = SimpleTest.assertStrictEquals.bind(SimpleTest),
  tests              = SimpleTest.run.bind(SimpleTest)


  