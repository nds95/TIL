# Hashmap

* 특징
    * Key와 Value값이 있어, 파이썬의 dict와 비슷하다.
    * 동일한 key값을 저장할 수 없다. 만약 같다면 기존의 key가 갖고있던 value값이 없어지고 새로운 값이 저장된다.
    * ArrayList와는 다르게 각 객체들의 인덱스 값이 따로 없어, key로 원하는 정보를 찾아야 한다.
    <br><br>
* 입력예시
```java
HashMap<String,String> map1 = new HashMap<String,String>();//HashMap생성
HashMap<String,String> map2 = new HashMap<>();//new에서 타입 파라미터 생략가능
HashMap<String,String> map3 = new HashMap<>(map1);//map1의 모든 값을 가진 HashMap생성
HashMap<String,String> map4 = new HashMap<>(10);//초기 용량(capacity)지정
HashMap<String,String> map6 = new HashMap<String,String>(){{//초기값 지정
  put("a","b");
}};
```
<br>
* 입력하기
<br>
HashMap에 쌍을 추가할 때는 put 메소드를 사용한다.
<br>

```java
map1.put(key, value);
```
<br>
* 값 꺼내기
<br>
value를 꺼낼때는 get 메소드를 사용한다. 찾고자 하는 value에 해당하는 key를 파라미터로 넘겨주면 된다.
<br>

```java
map1.get(key)
```
<br>
* 반복문을 통해 HaspMap 탐색하기
<br>
HashMap의 keyset() 메소드는 모든 key를 담고 있는 Set를 리턴해준다.
<br>
Set는 List나 Map과 같이 원소를 담고 있는 자료형 중 하나이며 'for each'문으로 탐색이 가능하다.
<br>

```java
for (String key : map1.keyset()) {
     System.out.println(map1.get(index));
}
```

* 심화

HashMap의 key는 'hashcode'라는 것으로 관리된다.<br>
이 hashcode는 모든 클래스의 인스턴스가 가진 고유한 겂인데, 인스턴스마다 다르기 때문에<br>
HashMap이 key를 구분하는 값으로 사용된다 (여러 인스턴스가 같은 hashcode를 가질 수 있으며<br>
이 경우 HashMap에선 key.equals(anotherkey) 메소드로 구분한다.)<br>
  <br>
** 참고 : codeit **  
