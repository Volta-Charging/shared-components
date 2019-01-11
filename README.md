# Volta Shared Components

 > A common set of components used on Volta web platform

## Storybook Install

1. Install project dependencies:
```sh
yarn

cd ../
git clone git@github.com:Volta-Charging/mobile.git
cp ./mobile/android/app/src/main/assets/fonts/* shared-components/fonts/
```

2. Run Storybook locally:
```sh
yarn storybook
```

3. View Storybook locally in browser:

   > [http://localhost:9001](http://localhost:9001)

## Local Development with Other Projects

> This package is currently used as a dependency (ie. a `web-tools` dependency).  For local development of `shared-components` with projects which utilize it as a dependency, you may symlink to use local projects together for development purposes.  This avoids the need to publish `shared-components` on NPM and being able to observe, utilize, and test the package on other projects.

```bash
# Shared components repository
cd ../shared-components # or location of repository
yarn install --production
yarn build - w  # Watches for changes and rebuilds

# Project that utilizes shared-components as dependency
cd ../web-tools # or other project that depends on shared-components
npm link ../shared-components #location of shared-components
yarn && yarn start # run project (ie web-tools)
```

As updates are being made under `shared-components`, a build is run and being referenced by web-tools from the `npm link`.  So any changes you make in the `shared-components` folder, you can see and test the updates in `web-tools`.
