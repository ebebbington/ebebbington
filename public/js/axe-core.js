/**
 * `npm i axe-core
 * Inject: <script src="node_modules/axe-core/axe.min.js"></script> in the html file
 */
document.addEventListener("DOMContentLoaded", function () {
  axe
    .run()
    .then((results) => {
      if (results.violations.length) {
        console.error("Accessibility issues found:");
        console.error(results.violations);
      } else {
        console.log("No accessibility issues found");
      }
    })
    .catch((err) => {
      console.error("Something bad happened:", err.message);
    });
});
