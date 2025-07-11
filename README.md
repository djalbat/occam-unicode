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

This consists of the Unicode picker, present in both the IDE and the grammars sandbox.

The example also shows all the Unicode characters currently in the picker. 

They are broken down into collections for the purposes of showcasing and checking the corresponding glyphs in both JuliaMono and Computer Modern Unicode. All of the twenty variants of the latter that Occam supports are shown. The collections are somewhat arbitrary and follow the Unicode standard only vaguely, they have no purpose other than convenience here and are only exported re-joined as a whole. 

It is envisaged that more Unicode characters will be added to the picker over time.

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

Click on any of the links to see the corresponding collection. The Unicode picker is also present in the header. 

The source for the example can be found in the `src/example.js` file and corresponding `src/example` folder. You are encouraged to try the example whilst reading what follows. You can rebuild it on the fly with the following command:

    npm run watch-debug

The development server will reload the page whenever you make changes.

One last thing to bear in mind is that this package is included by way of a relative rather than a package import. If you are importing it into your own application, however, you should use the standard package import.

## Usage

The Unicode picker can be imported and adjusted thus:

```
import withStyle from "easy-with-style";  ///

import { UnicodeCharacterDropdownDiv } from "occam-unicode";

import { unicodeCharacterDropdownDivWidth } from "../../../styles";

export default withStyle(UnicodeCharacterDropdownDiv)`

  width: ${unicodeCharacterDropdownDivWidth};
  
`;
```

Note that the width has been set. It is not set in the picker itself and must be set explicitly in this way.

This augmented picker can now be used directly:

```
import UnicodeCharacterDropdownDiv from "../div/dropdown/unicodeCharacter";

...

class MainHeader extends Element {
  childElements() {
    return (

      <UnicodeCharacterDropdownDiv/>

    );
  }

  static tagName = "header";

  static defaultProperties = {
    className: "main"
  };
}
```

When a Unicode character is selected the picker calls a controller method thus:

```
controller.copyOrPasteUnicodeCharacter(unicodeCharacter);
```

The funny name comes from the fact that in the Occam IDE there is a setting that decides whether or not the character is copied to the system clipboard or pasted directly into the active document, by the way.

To continue, this is supported by way of the [Sufficient](https://github.com/djalbat/sufficient) package:

```
import { Body } from "easy";
import { controller } from "sufficient";

import createMethods from "./example/createMethods";

...

const body = new Body(),  ///
      view =

        <View/>

      ,
      model = null,
      scheduler = null;

controller.assignMethods(createMethods, scheduler, model, view);

body.mount(view);
```

Then the `createMethos()` function can be like the following:

```
export default function createMethods(scheduler, model, view) {
  function copyOrPasteUnicodeCharacter(unicodeCharacter) {
    console.log(unicodeCharacter);
  }

  return ({
    copyOrPasteUnicodeCharacter
  });
}
```

Lastly, there is a `focusUnicodeCharacterDropdownInput()` method that can be utilised by including the controller methods that come with the picker itself:

```
import { createUnicodeMethods } from "occam-unicode";

...

controller.assignMethods(createUnicodeMethods, scheduler, model, view);

...
```

Now the Unicode picker can be focused at will with the following call:

```
controller.focusUnicodeCharacterDropdownInput();
```

## Building

Automation is done with [npm scripts](https://docs.npmjs.com/misc/scripts), have a look at the `package.json` file. The pertinent commands are:

    npm run build-debug
    npm run watch-debug

## Contact

* james.smith@djalbat.com

