# Setting CMD
1. sudo curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash
2. vi ~/.bash_profile
3. export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh" # This loads nvm <= 작성
4. source ~/.bash_profile
  * nvm --version으로 version 확인해보기
5. nvm install 10.15.1
  * node -v로 version 확인해보기
  * nvm ls
  * nvm use 10.15.1
6. Android Studio 설치
  * vi ~/.bash_profile
    * export ANDROID_HOME=/Users/son/Library/Android/sdk
    * export PATH=$PATH:$ANDROID_HOME/emulator
    * export PATH=$PATH:$ANDROID_HOME/tools
    * export PATH=$PATH:$ANDROID_HOME/tools/bin
    * export PATH=$PATH:$ANDROID_HOME/platform-tools
  * source ~/.bash_profile
7. Java 설치
  * java 11.0.13
8. XCode <= 11.3.1
  * App store에서 검색
9. Visual Studio Code
  * extension
    * Prettier - Code formatter
    * ESLint
    * Material Icon Theme
    * Night owl
10. cocoapods 설치
  * sudo gem install cocoapods -v 1.8.4
11. react-native-cli 설치
  * npm install -g react-native-cli
