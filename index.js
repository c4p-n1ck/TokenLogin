const { Plugin } = require("powercord/entities");

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
          setTimeout( () => {
            webpackChunkdiscord_app.push([[Math.random()],{},(r)=>{Object.values(r.c).find(m=>m.exports&&m.exports.default&&m.exports.default.login!==void 0).exports.default.loginToken(token)}]);
            location.reload();
          }, 3e3);
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
