## how to use `flow-typed`?

```
yarn add --dev flow-typed

yarn run flow-typed -- install jest@^20

```
## how does it work?
pretty much the same as `typings` or `definitely-typed` in typescript.

https://flow.org/en/docs/libdefs/#toc-what-s-a-library-definition
>NOTE: Using the /flow-typed directory for libdefs is a convention that enables Flow to JustWork™ out of the box and encourages consistency across projects that use Flow, but it is also possible to explicitly configure Flow to look elsewhere for libdefs using the [libs] section of your .flowconfig.


## react-native
1. build apk
`$ cd android && ./gradlew assembleRelease`
The generated APK can be found under  `android/app/build/outputs/apk/app-release.apk`, and is ready to be distributed.
2. start gradlew
```
$ react-native run-android
```
for gradle task. to force a clean build , delete everything from `D:\SampleApp\android\app\build`

3. start bundle server

```
$ react-native start --help
Scanning 630 folders for symlinks in D:\SampleApp\node_modules (23ms)

  react-native start [options]
  starts the webserver

  Options:
    --reset-cache, --resetCache                                   Removes cached files

    --port [number]
    --host [string]
    --root [list]                                                 add another root(s) to be used by the packager in this project
    --projectRoots [list]                                         override the root(s) to be used by the packager
    --assetExts [list]                                            Specify any additional asset extensions to be used by the packager
    --sourceExts [list]                                           Specify any additional source extensions to be used by the packager
    --platforms [list]                                            Specify any additional platforms to be used by the packager
    --providesModuleNodeModules [list]                            Specify any npm packages that import dependencies with providesModule
    --max-workers [number]                                        Specifies the maximum number of workers the worker-pool will spawn for transforming files. This defaults to the numb
er of the cores available on your machine.
    --skipflow                                                    Disable flow checks
    --nonPersistent                                               Disable file watcher
    --transformer [string]                                        Specify a custom transformer to be used
    
    --custom-log-reporter-path, --customLogReporterPath [string]  Path to a JavaScript file that exports a log reporter as a replacement for TerminalReporter
    --verbose                                                     Enables logging
    --https                                                       Enables https connections to the server
    --key [path]                                                  Path to custom SSL key
    --cert [path]                                                 Path to custom SSL cert
    --config [string]                                             Path to the CLI configuration file
    -h, --help                                                    output usage information
```