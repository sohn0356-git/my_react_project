# 211029
* react-native init --version 0.63.4 [Project Name]
* npx react-native run-ios
* npm start, npm run ios

# 211101
* npm install --save @react-native-community/picker
* npm install --save @react-native-community/slider

# 211102
* npm install --save @react-navigation/native
* npm install --save react-native-reanimated
* npm install --save @react-native-community/masked-view
* npm install --save react-native-gesture-handler react-native-screens react-native-safe-area-context
* npx pod-install ios
* npm install --save @react-navigation/stack

* npm install --save @react-navigation/native react-native-reanimated @react-native-community/masked-view react-native-gesture-handler react-native-screens react-native-safe-area-context @react-navigation/stack @react-navigation/bottom-tabs

# 211105
* podfile에서 다음 부분 주석처리하기
```cpp
# use_flipper!
# post_install do |installer|
#   flipper_post_install(installer)
# end
```

# 211106
* Stack Navigation의 HeaderTitle을 Function으로 설정할 경우
```
headerTitle: (props) => <LogoTitle {...props} />
```

* npm install --save @react-navigation/drawer
* npm install --save axios@0.18.0 react-redux@6.0.1 redux@4.0.1 redux-promise@0.6.0

* const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__

* npm unlink @react-navigation/native
* npm uninstall @react-navigation/native
* npm install --save @react-navigation/native@5.7.6 @install @react-navigation/stack@5.9.3 @react-navigation/bottom-tabs@5.9.2
* npm install --save react-native-reanimated@1.13.1 react-native-safe-area-context@3.1.8 react-native-screens@2.11.0 @react-native-community/masked-view@0.1.10