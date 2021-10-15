<h1>CSS reset file</h1>
리셋파일들은 안쓰는게 좋음<br>
Why? unused code가 많아짐<br>
<h2>유용한 코드</h2>

```CSS
body {
    margin: 0;
    overflow-wrap: break-word;
}
```
* 단어 단위로 줄 바꿈

```CSS
:lang(ko) {
    word-break: keep-all;
}
```
* CJK(중국어, 일본어, 한국어)를 줄 바꿈 시 단어가 깨지지않도록 해줌<br>

```CSS
img {
    max-width: 100%;
    height: auto;
}
```
* 이미지가 삽입된 영역의 최대 폭 보다 크지않게 해줌<br>

```CSS
[class]:where(ol, ul) {
    list-style: none;
}
```
* ol, ul의 class에만 적용되도록 선언

### 작명 규칙을 잘못 관리한 사례
* 의미를 파악할 수 없는 작명<br>
    .bx { ... }<br>
    .cnt { ... }<br>
    .mt { ... }<br>
<br>
* 전역 공간을 선점한 흔한 이름<br>
    .content { ... }<br>
    .button { ... }<br>
    .top { ... }<br>
<br>
## CSS selector<br>