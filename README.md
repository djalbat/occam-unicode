# Occam Unicode

[Occam](https://github.com/djalbat/occam)'s Unicode functionality.

### Contents

- [Introduction](#introduction)
- [Installation](#installation)
- [Example](#example)
- [Usage](#usage)
- [Building](#building)
- [Contact](#contact)

## Introduction

This includes the Unicode picker present in both the IDE and the grammars sandbox.

The example also shows all the Unicode characters currently in the picker. They are broken down into collections for the purposes of showcasing and checking the corresponding glyphs in both JuliaMono and Computer Modern Unicode. The collections are somewhat arbitrary and follow the Unicode standard only vaguely, they have no purpose other than convenience here and are only exported re-joined as a whole. It is envisaged that more will be added with time.

## Installation

With [npm](https://www.npmjs.com/):

    npm install occam-unicode

You can also clone the repository with [Git](https://git-scm.com/)...

    git clone https://github.com/djalbat/occam-unicode.git

...and then install the dependencies with npm from within the project's root directory:

    npm install

You can also run a development server, see the section on building later on.

## Example

There is a small development server that can be run from within the project's directory with the following command:

    npm start

The example will then be available at the following URL:

http://localhost:8888

The source for the example can be found in the `src/example.js` file and corresponding `src/example` folder. You are encouraged to try the example whilst reading what follows. You can rebuild it on the fly with the following command:

    npm run watch-debug

The development server will reload the page whenever you make changes.

One last thing to bear in mind is that this package is included by way of a relative rather than a package import. If you are importing it into your own application, however, you should use the standard package import.

## Usage

TODO

## Building

Automation is done with [npm scripts](https://docs.npmjs.com/misc/scripts), have a look at the `package.json` file. The pertinent commands are:

    npm run build-debug
    npm run watch-debug

## Contact

* james.smith@djalbat.com

