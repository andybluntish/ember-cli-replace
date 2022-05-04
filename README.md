# ember-cli-replace

[![Ember Observer Score](http://emberobserver.com/badges/ember-cli-replace.svg)](http://emberobserver.com/addons/ember-cli-replace)

[Ember CLI](http://www.ember-cli.com/) addon to replace text patterns in files. This is just a thin wrapper around [outaTiME/applause](https://github.com/outaTiME/applause).

## Compatibility

- Ember.js v3.24 or above
- Ember CLI v3.24 or above
- Node.js v12 or above

## Installation

```
ember install ember-cli-replace
```

## Usage

Define the source files that will be used for replacements (relative to the `dist/` directory), and patterns that will be used to replace the contents of source files.

```js
var app = new EmberApp({
  replace: {
    files: ['index.html', '**/*.js'],
    patterns: [
      {
        match: 'foo',
        replacement: 'bar', // replaces "@@foo" to "bar"
      },
    ],
    enabled: true, // can be set to false to disable
  },
});
```

## Options

**Note:** most options are passed directly to [applause](https://github.com/outaTiME/applause). For more information on these options, see [applause](https://github.com/outaTiME/applause#options).

### Files

Type: `Array`
Default: `[]`

List of [globs](https://github.com/isaacs/node-glob) pointing to files to perform replacements in. Replacements are run after the build, so paths are relative to the `dist/` directory.

### Patterns

Type: `Array`
Default: `[]`

List of patterns used to perform replacements in source files.

### Enabled

Type: `Boolean`
Default: `true`

Enable string replacement during build.

## Contributing

See the [Contributing](CONTRIBUTING.md) guide for details.

## License

This project is licensed under the [MIT License](LICENSE.md).
