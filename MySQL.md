# MySQL
***
### WHY?
- MySQL을 활용하기 위한 메모
***
### HOW?
- MySQL을 사용하면서 유용한 내용들을 순서에 상관없이 메모
***
<br>

* Primary key
<br>
특정 컬럼을 Primary key로 설정하면 Primary key와 같은 값이 있는 row가 추가되는 것을 <br>DBMS가 자동으로 막아준다.
<br><br>
  - Primary key의 종류
  1. Natural key<br>
  실제 어떤 개체가 갖고 있는 속성을 나타내는 컬럼이 Primary key가 됐을 때 이를
  Natural key라고 한다.<br><br>
  2. Surrogate Key<br>
  데이터의 속성을 직접적으로 나타내는 컬럼이 아닌 Primary key로 사용하기 위해 추가한 컬럼을 <br> Surrogate key라고 한다.
***
<br>

###  연도(YEAR) 구하기
<br>

```
WHERE YEAR(column) = '1995';
```
* column열에 있는 연도(year)의 1995가 있는 데이터 추출
  ##### 이 밖에 MONTH, DAYOFMONTH를 사용하여 월, 일을 추출하여 데이터를 추출 할 수 있다.
<br><br>
### 월(MONTH) 구하기
<br>

```
WHERE MONTH(column) IN (6, 7, 8);
```
* column 열에 있는 월(month)의 6, 7, 8에 해당하는 데이터 추출
<br><br><br>

### 일(DAYOFMONTH) 구하기
<br>

```
WHERE DAYOFMONTH(column) BETWEEN 15 AND 31;
```
* column 열에 있는 일(day)에서 15부터 31까지의 데이터 추출
<br><br><br>

### 날짜 간 차이 구하기
<br>

```
DATEDIFF(A, B);
```
* A와 B 날짜의 차이를 확인
<br><br>

### 오늘 날짜 구하기
<br>

```
CURDATE();
```
* 오늘 날짜를 확인
<br><br>

### 날짜 더하기
<br>

```
DATE_ADD(column, INTERVAL 300 DAY);
```
* column 날짜에서 300일 만큼 더하기
<br><br>

### 날짜 빼기
<br>

```
DATE_SUB(column, INTERVAL 300 DAY);
```
* column 날짜에서 300일 만큼 뺴기
<br><br>

### 대소문자 구분하기
<br>

```
WHERE column LIKE BINARY '%g%';
```
* BINARY를 사용하면 대소문자를 구분하여 어떤 문자열 사이에 소문자 'g'가 있는 문자열만 추출
<br>
  ##### BINARY는 해당 문자열이 컴퓨터에서 인식하는 '0'과 '1'이 정확히 일치하는 것을 찾으라는 의미
<br><br>

### 정렬하기
<br>

#### 문법 상 'ORDER BY' 절은 'WHERE' 뒤에 나와야 함
<br>

```
ORDER BY column ASC;
```
* column열을 가장 작은 값(ASC : 오름차순)부터 정렬
<br>

```
ORDER BY column DESC;
```
* column열을 가장 큰 값(DESC : 내림차순)부터 정렬
<br><br>

### TEXT타입 열 정렬하기
<br>

```
ORDER BY CAST(column AS signed) ASC;
```
* column열의 타입을 signed라는 데이터 타입으로 변경
  ##### signed type -> 양수와 음수를 포함한 모든 정수를 나타낼 수 있는 타입
<br>

*****
<br>

### 출력 개수 제한하기
<br>

```
ORDER BY column ASC LIMIT 10;
```
* column열을 10개만 추려서 오름차순으로 정렬
<br>

```
ORDER BY column ASC LIMIT 10, 2;
```
* column열을 10번째 이후 2개만 추려서 오름차순으로 정렬
<br><br>

### row 개수 구하기
<br>

```
SELECT COUNT(column) FROM table_name;
```
* 해당 column에서 값이 있는 row의 개수 확인
  ##### NULL의 개수는 제외하고 개수를 알려줌<br>
  ##### COUNT(*)를 사용하면 절대 row개수를 알 수 있음
<br>

### 최대값 구하기

```
SELECT MAX(column) FROM table_name;
```
* 해당 column에서 가장 큰 값을 확인
  ##### 마찬가지로 MIN()를 사용하면 최소값을 알 수 있음
<br>

### 평균 값 구하기

```
SELECT AVG(column) FROM table_name;
```
* 해당 column의 평균값을 확인
  ##### NULL값은 제외하고 평균값을 추출함

#### [MySQL 산술함수 공식 Documentation](https://dev.mysql.com/doc/refman/8.0/en/mathematical-functions.html)

<br><br>

### NULL값 찾기
<br>

```
WHERE column IS NULL
```
* column에 NULL값이 있는 row를 확인
  ##### 값이 있는 row를 구하려면 NOT NULL을 입력
<br>

### 하나라도 NULL값이 있는 row 구하기
<br>

```
WHERE column1 IS NULL
  OR column2 IS NULL
  OR column3 IS NULL:
```
* column1, 2, 3 중에 NULL값이 있는 모든 row 값 확인
<br><br>

### NULL값을 다른 이름으로 출력하기
<br>

```
SELECT
  COALESCE(column1, '비어있음'),
  COALESCE(column2, '비어있다')
FROM table_name;
```
* column1에서 값이 있다면 그대로 출력하고, NULL값이면 '비어있음'으로 치환하여 출력
  ##### IFNULL(column1, 'name')의 방법으로 동일하게 치환이 가능함. 하지만 IFNULL함수는 파라미터를 2개만 넣을 수 있으며, <br>COALESCE함수는 표준 SQL함수이므로 COALESCE함수를 사용하는 것을 권장
<br><br>

### COALESCE 응용하기
<br>

```
SELECT COALESCE(column1, column2, 'N/A') FROM table_name;
```
* column1의 값이 있다면 그대로 출력, 값이 NULL값이면 column2값을 출력, 이 마저도 NULL값이면 N/A로 출력
<br>

****

### column이름 Alias 하기
<br>

```
SELECT column AS name;
```
* column 이름을 name으로 변경하여 보여줌
  ##### column이름 뒤에 space를 하고 Alias 이름을 적어도 되지만 가독성을 위해 'AS'를 붙이는 것을 권장
<br><br>

### column을 합치고 단위 등을 붙이기
<br>

```
CONCAT(column1, 'name1', ', ', column2, 'name2') AS name3;
```
* Concatenate(연결하다)의 약자로, column1의 값에 name1을 붙이고 column2의 값에 name2를 붙여<br> name3의 이름으로 된 합쳐진 column으로 보여줌
<br>

***
<br>

### CASE문
<br>

```
CASE
  WHEN column 조건 THEN 'result1'
  WHEN column 조건 THEN 'result2'
  ELSE 'result3'
END
```
* column의 조건에따라 result를 확인. 보면 다른 언어의 if문과 비슷한 구조임.
<br>
