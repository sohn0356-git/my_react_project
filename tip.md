``` node
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! my_first_app@0.0.1 start: `react-native start`
npm ERR! Exit status 1
npm ERR!
npm ERR! Failed at the my_first_app@0.0.1 start script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
```

* [Solution](https://velog.io/@fromzoo/npm-ERR-code-ELIFECYCLE-%EC%97%90%EB%9F%AC-%ED%95%B4%EA%B2%B0%ED%95%98%EA%B8%B0)
  - npm cache clean --force
  - rm -rf node_modules
  - rm -rf package-lock.json
  - rm -rf ios/build
  - rm -rf ios/Podfile.Lock
  - npm i
  - npm start or npm run dev
  - cd ios && pod install
