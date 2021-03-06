const {ChromeLauncher} = require('lighthouse/lighthouse-cli/chrome-launcher');

/**
 *  * Launches a debugging instance of Chrome on port 9222.
 *   * @param {boolean=} headless True (default) to launch Chrome in headless mode.
 *    *     Set to false to launch Chrome normally.
 *     * @return {Promise<ChromeLauncher>}
 *      */
function launchChrome(port, headless = true) {
  const launcher = new ChromeLauncher({
    port: port,
    autoSelectChrome: true, // False to manually select which Chrome install.
    additionalFlags: [
      '--window-size=412,732',
      '--disable-gpu',
      '--remote-debugging-port=' + port,
      headless ? '--headless' : ''
    ]
  });

  return launcher.run().then(() => launcher)
    .catch(err => {
      return launcher.kill().then(() => { // Kill Chrome if there's an error.
        throw err;
      }, console.error);
    });
}

module.exports = launchChrome;
