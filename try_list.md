# 211118
* SearchScreen에서 filter가 first name에서만 filtering 되는 것으로 파악됨
=> last name에서도 filtering 되도록 변경해보기
* SocialScreen의 postview 활용하여 PIU Project의 LevelInfo Component 초기 디자인 구성하기
# 211122
* levelInfo에서 detail difficulty 별로 구분해보고 background color 적용시켜보기
* songInfo에서 imagebackground로 앨범커버 적용하고 투명도 넣기
* ~~dynamicImage 활용하여 동적으로 require 시도~~
``` javascript
export default function DynamicImage({props}){
    return (
        <Image source={this.props.imageName}
            resizeMode="contain"
            style={{ height: 24, width: 24 }}
        />
    ); 
}
<DynamicImage imageName={require(`../assets/images/a_${post.id}.png`)} />
```

# 211124
* levelInfo update가 너무 잦음 => useEffect에서 처리하도록 변경

# 211126
```javascript
hr: {
    width: '100%',
    height: 0.5,
    backgroundColor: '#444',
    marginTop: 6,
  },
```

# 211127
* PFY Project 시작
* flip card 활용하여 user 게시글 component 생성
* instaclone base로 틀 만들어보기

# 211129
* PFY Project bottomtab page는 총 4개
* 메인, 감사제목, 즐겨찾기, my page
* input form 조사해보기

# 211201
* 영어 react native 강의 sample app에 component 정리

