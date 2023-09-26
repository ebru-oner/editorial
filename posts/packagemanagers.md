---
id: "packagemanagers"
title: "Package Managers:NPM and Yarn"
summary: "NPM and Yarn:A Beginners Guide to Package Management"
date: "2023-09-25"
quote:
  {

  }
coverImage: "/assets/blog/packagemanagers/cover.webp"
ogImage:
  url: "/assets/blog/preview/cover.jpg"
---

**NPM** and **Yarn** are package managers used in a java script ecosystem to manage dependencies and packages for Node.js and web applications. They serve for the same purpose, package installation, project initialization. _The choice between them depends on your needs._

#### NPM (Node package manager):
- Default with node.js installation. 
- Use [https://www.npmjs.com](https://www.npmjs.com) as the registry.
- **Commands:**
  - ```npm init```:
  Initializes a new node.js project. Creates a package.json file, in which the project metadata, scripts and dependencies can be found.
  - ```npm install```:
  Installs *dependencies* and *devDependencies* sections defined in the _package.json_ file. Installs the packages into the *node_modules* folder. 

  - ```npm uninstall <package_name>``` \ ```npm un <package_name>```:
  Uninstalls ```<package_name>```
  
  - ```npm install <package_name>@<version>```:
  Installs ```<package_name>``` of ```<version>``` into the *node_modules* folder.
    
    Adds  ```<package_name>``` to  _package.json_ with following ```<options>```
      - --save-dev: add to *devDependencies*
      - --no-save: not enteres to the _package.json_
      - --save-optional: add to *optionalDependencies*
      - --no-optional: prevent optional dependencies to be installed
      - --registry=_https://registry.npmjs.org/_: install from a specific registry
  
  - ```npm update``` \ ```npm update <package_name>```:
  Updates the package(s) to the possible latest.

  - ```npm run <task_name>```:
  Executes scripts defined in the *scripts* section of _package.json_.
  eg: 
  ```
    {
      "scripts": {
        "start": "node server.js",
        "test": "mocha tests"
      }
    }
  ```
- **Lock file:** *package-lock.json* is created and updated with npm install, to lock down the version of packages and dependencies in the project.


#### Yarn:
- Alternative to npm
- Needs to be installed seperately _npm install yarn_
- **Commands:**
  - ```yarn init```:
  Initializes a new node.js project. Creates a package.json file, in which the project metadata, scripts and dependencies can be found.
  - ```yarn``` \ ```yarn install```:
  Installs *dependencies* and *devDependencies* sections defined in the _package.json_ file. Installs the packages into the *node_modules* folder. 
  
  - ```yarn add <package_name>@<version>```:
  Adds ```<package_name>``` of ```<version>``` into the *node_modules* folder, 
    
    Adds  ```<package_name>``` to  _package.json_ with following ```<options>```
      - --sdev: add to *devDependencies*
      - --peer: add to *peerDependencies*
      - --optional: add to *optionalDependencies*
   
  - ```yarn remove <package_name>```:
  Removes installed ```<package_name>```

  - ```yarn upgrade``` \ ```yarn upgrade <package_name>```:
  Upgrades the package(s) to the possible latest.

  - ```yarn <task_name>```:
  Executes scripts defined in the *scripts* section of _package.json_.
  eg: 
  ```
    {
      "scripts": {
        "start": "node server.js",
        "test": "mocha tests"
      }
    }
  ```
- **Lock file:** *yarn.lock* is created and updated with yarn install, to lock down the version of packages and dependencies in the project.
