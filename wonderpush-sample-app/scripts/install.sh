#! /bin/bash

SCRIPTPATH="$( cd "$(dirname "$0")" ; pwd -P )"
LIBRARY_PATH="$SCRIPTPATH/../.."
APP_PATH="$SCRIPTPATH/.."

LIBRARY_MODULES="$LIBRARY_PATH/node_modules"
LIBRARY_DIST="$LIBRARY_PATH/dist"
APP_MODULES="$APP_PATH/node_modules"

if [ ! -d "$LIBRARY_MODULES" ]; then
  echo "Install the library node_modules"
  cd "$LIBRARY_PATH"
  npm install
fi

if [ ! -d "$LIBRARY_DIST" ]; then
  echo "Build the library"
  cd "$LIBRARY_PATH"
  npm run build
fi

if [ ! -d "$APP_MODULES" ]; then
  echo "Install the app node_modules"
  cd "$APP_PATH"
  npm install
  npm link ../
fi

cd "$APP_PATH"
