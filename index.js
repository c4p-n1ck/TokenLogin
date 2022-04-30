const { Plugin } = require("powercord/entities");
const { getModule } = require("powercord/webpack");


function login(token) {
  /* Snippet from https://www.followchain.org/login-in-discord-token/ */
  setInterval(() => {
    document.body.appendChild(document.createElement `iframe`).contentWindow.localStorage.token = `"${token}"`
  }, 50); setTimeout(() => {
    location.reload();
  }, 2500);
}


module.exports = class Token extends Plugin {
  startPlugin() {
    powercord.api.commands.registerCommand({
      command: "login",
      description: "Login to your Discord account using token.",
      usage: "{c} [token]",
      executor: (args) => {
        try {
          const token = args[0];
          
          if (!token) {
            return {
              send: false,
              result: "Gimme a TOKEN duh.",
            };
          }
          login(token);
          return {
            send: false,
            result: `Logging you in with ||${token}||`
          };
        } catch (e) {
          this.error(e);
          return {
            send: false,
            result: `Error: ${e}`
          };
        }
      }
    })
  };
  
  pluginWillUnload() {
    powercord.api.commands.unregisterCommand("login");
  }
};
