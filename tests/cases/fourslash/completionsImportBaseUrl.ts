/// <reference path="fourslash.ts" />

// @Filename: /tsconfig.json
////{
////    "compilerOptions": {
////        "baseUrl": "."
////    }
////}

// @Filename: /src/a.ts
////export const foo = 0;

// @Filename: /src/b.ts
////fo/**/

// Test that it prefers a relative import (see sourceDisplay).
goTo.marker("");
verify.completionListContains({ name: "foo", source: "/src/a" }, "const foo: 0", "", "const", undefined, /*hasAction*/ true, {
    includeExternalModuleExports: true,
    sourceDisplay: "./a",
});
