/**
 * Modification to TinyTest called SimpleTest
 * Functionality is the same one, so I will keep the description below:
 * 
 * Very simple in-browser unit-test library, with zero deps.
 *
 * Background turns green if all tests pass, otherwise red.
 * View the JavaScript console to see failure reasons.
 *
 * Example:
 *
 *   adder.js (code under test)
 *
 *     function add(a, b) {
 *       return a + b;
 *     }
 *
 *   adder-test.html (tests - just open a browser to see results)
 *
 *     <script src="tinytest.js"></script>
 *     <script src="adder.js"></script>
 *     <script>
 *
 *     tests({
 *
 *       'adds numbers': function() {
 *         eq(6, add(2, 4));
 *         eq(6.6, add(2.6, 4));
 *       },
 *
 *       'subtracts numbers': function() {
 *         eq(-2, add(2, -4));
 *       },
 *
 *     });
 *     </script>
 *
 * That's it. Stop using over complicated frameworks that get in your way.
 *
 * -Joe Walnes
 * MIT License. See https://github.com/joewalnes/jstinytest/
 */


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
              console.log("\x1b[32m", testName);
          } catch (e) {
              failures++;
              console.error("\x1b[31m",`${e.name} ${failures}: `, e.message);
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


  