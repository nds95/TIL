# switch_case

* 특징
    * if문과 비슷한 비교문이지만 상황에 따라 if문 보다 더 간결하게 사용이 가능하다.
    * if 혹은 else if처럼 해당되는 실행문만 실행하지 않고, 해당되는 실행문 부터 아래로 쭉 실행한다.
    <br><br>
* 입력예시
```java
Scanner scanner = new Scanner(System.in);
String answer = scanner.next();

switch (answer) {
    case "E":
        System.out.println(answer + "를 입력하셨습니다.");
    case "A":
        System.out.println(answer + "를 입력하셨습니다.");
    case "C":
        System.out.println(answer + "를 입력하셨습니다.");
}
```
<br>
위와같이 입력 할 경우 String "E"를 받으면 아래와 같은 결과가 나온다.
<br>

```
E를 입력하셨습니다.
E를 입력하셨습니다.
E를 입력하셨습니다.
```
따라서 특별히 해당코드 아래로 쭉 실행하고 싶지 않다면 모든 case 실행문 마지막에 break; 를 넣어주는 것이 좋다.

<br>

```java
Scanner scanner = new Scanner(System.in);
String answer = scanner.next();

switch (answer) {
    case "E":
        System.out.println(answer + "를 입력하셨습니다.");
        break;
    case "A":
        System.out.println(answer + "를 입력하셨습니다.");
        break;
    case "C":
        System.out.println(answer + "를 입력하셨습니다.");
        break;
```