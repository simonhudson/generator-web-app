const Generator = require("yeoman-generator");

const dirs = (self) => {
  return {
    src: {
      root: `${self.templatePath()}\\`,
      ".vscode": `${self.templatePath()}\\.vscode\\`,
      src: `${self.templatePath()}\\src\\`,
    },
    dest: {
      root: `${self.destinationPath()}\\`,
      ".vscode": `${self.destinationPath()}\\.vscode\\`,
      src: `${self.destinationPath()}\\src\\`,
    },
  };
};

const toSlug = (string) => {
  if (!string || !string.length || typeof string !== "string") return;
  return string.replace(/\s+/g, "-").toLowerCase();
};

module.exports = class extends Generator {
  /**

    NOTES (in no particular order)

    * To create a method which won't be run automatically, prefix the method name with an underscore (e.g: _myMethod)
    * We use this.log (instead of console.log) as it ties the logging to the context of the generator.
        If we were to use a GUI, the logging would still be visible to the user (whereas console.log is not visible to a GUI user)
    
    * Generators run methods in a run loop. Any method created outside of one of these groups will be put in the 'default' group.
        The priority order is as follows:
        1. initializing - Your initialization methods (checking current project state, getting configs, etc)
        2. prompting - Where you prompt users for options (where you'd call this.prompt())
        3. configuring - Saving configurations and configure the project (creating .editorconfig files and other metadata files)
        4. default - If the method name doesn't match a priority, it will be pushed to this group.
        5. writing - Where you write the generator specific files (routes, controllers, etc)
        6. conflicts - Where conflicts are handled (used internally)
        7. install - Where installation are run (npm, bower)
        8. end - Called last, cleanup, say good bye, etc
            
    **/

  _logActionStart(action) {
    return this.log(`START ${action}`);
  }
  _logActionComplete(action) {
    return this.log(`COMPLETED ${action}`);
  }

  _writeFileConfig() {
    return {
      projectName: this.config.get("projectName"),
      projectNameSlug: this.config.get("projectNameSlug"),
    };
  }

  initializing() {
    const greeting = () => {
      const message =
        "************************************************************\n" +
        "*                                                          *\n" +
        "*  This will set up all the basic files and tools          *\n" +
        "*  you will need to build a UI.                            *\n" +
        "*                                                          *\n" +
        "*  Please wait while we clean your working directory...    *\n" +
        "*                                                          *\n" +
        "************************************************************\n";
      this.log(message);
    };

    const clean = () => {
      const action = "Clean workspace";
      this._logActionStart(action);
      this.fs.delete(this.destinationPath() + "\\**\\*");
      this._logActionComplete(action);
    };

    greeting();
    clean();
  }

  async prompting() {
    const answers = await this.prompt([
      {
        type: "input",
        name: "name",
        message: "Your project name",
        default: this.appname, // Default to current folder name
      },
    ]);
    this.config.set({
      projectName: answers.name,
      projectNameSlug: toSlug(answers.name),
    });
    this.log(this.config.get("projectName"));
    this.log(this.config.get("projectNameSlug"));
  }

  writing() {
    const copyFiles = () => {
      const action = "Copy static files";
      this._logActionStart(action);
      const files = [
        ".babelrc",
        ".env.example",
        ".eslintignore",
        ".eslintrc",
        ".gitignore",
        ".prettierrc.json",
        "next.config.js",
        "nodemon.json",
        "package.json",
        "README.md",
      ];
      files.forEach((file) => {
        this.fs.copyTpl(
          `${dirs(this).src.root}${file}`,
          `${dirs(this).dest.root}${file}`,
          this._writeFileConfig()
        );
      });
      this._logActionComplete(action);
    };

    const writeFiles = () => {
      const action = "Writing files";
      this._logActionStart(action);
      fs.writeFile(".env", "", () => {
        this._logActionComplete(action);
      });
    };

    const copyDirs = () => {
      const action = "Copy directories";
      this._logActionStart(action);
      const dirsToCopy = [".vscode", "src"];
      dirsToCopy.forEach((dir) => {
        this.fs.copyTpl(
          `${dirs(this).src[dir]}**\\*`,
          `${dirs(this).dest[dir]}`,
          this._writeFileConfig()
        );
      });
      this._logActionComplete(action);
    };

    copyFiles();
    writeFiles();
    copyDirs();
  }

  install() {
    const action = "Installing dependencies";
    this._logActionStart(action);
    this.npmInstall();
  }

  end() {
    const message =
      "\n\n" +
      "********************************\n" +
      "*                              *\n" +
      "*  ALL DONE!                   *\n" +
      "*  Starting application        *\n" +
      "*                              *\n" +
      "********************************\n";
    this.log(message);
    this.spawnCommand("npm run", ["dev"]);
  }
};
