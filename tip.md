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
  - rm -rf ios/Pods
  - rm -rf ios/Podfile.Lock
  - npm i
  - npm start or npm run dev
  - cd ios && pod install

## 인터넷에 있는대로 따라하더라도 삭제할 때는 반드시 주의하자

* react-native-navigation version 이슈
=> [Solution1](https://2vup.com/mac-ruby-update/)
위 사이트처럼 ruby를 업데이트해서 cocoapods 재설치하면 해결된다.
=> cocoapods -v 1.10.2로 재설치
