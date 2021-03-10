# GIT
***
### WHY?
- Git 활용을 위한 메모
***
### HOW?
- Git을 사용하면서 유용한 개념들을 순서 상관없이 정리

***
<br>

```
git revert
```
- 커밋을 취소
<br>
ex) git revert {Hash}
<br><br>
- 여러개의 커밋을 취소
<br>
ex) git revert {Hash A}..{Hash D}
<br>
다만 이렇게 커맨드입력을 할 경우 'Hash A'는 취소 할 커밋에 포함되지 않는다.<br>
위와같은 경우 Hash B, C, D만 취소 할 커밋에 포함된다.
<br><br>
***
<br>

```
git fetch
```
* 커밋 가져오기
<br>
커밋을 가져와 바로 커밋까지 해주는 'pull'과는 다르게 'fetch'는 해당 커밋을 가져오기만 한다.
<br><br>
***
<br>

```
git blame
```
* 해당 파일에서 어떤 코드를 누가 작성했는지 확인(어떤 커밋에 의해 어떤 코드들이 작성됐는지 확인)
<br>
ex) git blame {file}
<br><br>
***
<br>

```
git reset --hard
```
* 'HEAD'가 가리키는 커밋 변경
<br>
ex) git reset --hard {Hash}
<br>
Hash에 해당하는 커밋을 가리킨다.
<br><br>
***
<br>

```
git reflog
```
* 'HEAD'가 지금까지 가리켜 왔던 커밋들의 정보를 확인

<br><br>
***
<br>

```
git config alias.{A} '{B}'
```
* B 명령어를 A로 지정(엘리어싱)
<br>
  ##### GIT에서만 적용됨.
<br><br>
***
<br>

```
git rebase {branch}
```
* 현재 branch의 베이스를 A branch로 재지정
  ##### conflict 발생 시 해당 파일 수정 후 
  <br>

  ```
  git rabase --continue
  ```
  ##### 위 명령어를 실행
  ##### merge를 실행하면 A와 B를 합친 새로운 커밋이 생성되지만,<br> rebase를 하면 A에 B를 합쳐 기존 커밋에 추가한다. (새로운 커밋이 생기지 않음)
  
<br><br>
***
<br>
