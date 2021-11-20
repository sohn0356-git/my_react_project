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

# 211107
* 이메일 여부 확인
```
const expression =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
return expression.test(String(value).toLocaleLowerCase());
```

* brew install --cask react-native-debugger //Debug tool 사용을 위한 설치

# 211108
* npm install --save @react-native-async-storage/async-storage

# 211109
* diary_ex01 한 번에 data write 안 되는 error 발생 => diary_ex02 생성 및 다시 만들어보기

# 211112
* npm install --save react-native-vector-icons
* ios
  * XCode에서 ios 폴더 들어가기
  * Fonts에 원하는 ttf파일 추가
  * Info에서 Fonts provided by application의 Item에 추가한 ttf파일 등록
  * shift command k
  * command b
* android
  * android₩app₩src₩build.gradle 제일 아래에 다음 코드 추가
```
project.ext.vectoricons = [
    iconFontNames: [ 'MaterialIcons.ttf', 'EvilIcons.ttf' ] // Name of the font files you want to copy
]
apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"
```
  * android₩gradle₩settings.gradle에 다음 코드 추가
```
include ':react-native-vector-icons'
project(':react-native-vector-icons').projectDir = new File(rootProject.projectDir, '../node_modules/react-native-vector-icons/android')
```
  * android₩app₩src₩build.gradle 다음 코드 추가
```
implementation project(':react-native-vector-icons')
```