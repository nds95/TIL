import requests
from bs4 import BeautifulSoup

url = "https://comic.naver.com/webtoon/weekday.nhn"
res = requests.get(url)
res.raise_for_status()

soup = BeautifulSoup(res.text, "lxml")
#print(soup.title) 
#print(soup.title.get_text())
#print(soup.a.get_text()) soup 객체에서 처음 발견되는 a태그의 이름을 반환
print(soup.a.attrs) # a태그의 속성정보를 객체형식으로 반환
print(soup.a["href"]) # a태그의 href 속성값을 반환

print(soup.find("a", attrs={"class":"Nbtn_upload"}))