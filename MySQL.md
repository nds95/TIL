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

