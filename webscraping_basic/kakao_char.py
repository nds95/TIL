from bs4 import BeautifulSoup
from selenium import webdriver
from webdriver_manager.chrome import ChromeDriverManager

import csv
import time
#1. csv file open
csv_name = 'item_img_c.csv'
csv_open = open(csv_name, 'a', encoding='utf8', newline='')
csv_writer = csv.writer(csv_open)
csv_writer.writerow(('item_title', 'item_img'))

#2. Driver & BeautifulSoup
driver = webdriver.Chrome(ChromeDriverManager().install())

crawling_url = 'https://store.kakaofriends.com/kr/products/category/character?categorySeq=23&sort=createDatetime,desc'
driver.get(crawling_url)

#3. Parsing html code
full_html = driver.page_source
soup = BeautifulSoup(full_html, 'html.parser')
time.sleep(3)
# item 경로 click
item_len = soup.select(f'#mArticle > main > div.list__ListWrap-uqwbkk-0.heFHpk > ul > li')
time.sleep(2)
print(len(item_len))
for i in range(1, len(item_len)):
  time.sleep(2)
  get_url = driver.find_element_by_css_selector(f'#mArticle > main > div.list__ListWrap-uqwbkk-0.heFHpk > ul > li:nth-child({i}) > a').get_attribute('href')
  print(get_url)
  time.sleep(2)
  item_click = driver.find_element_by_css_selector(f'#mArticle > main > div.list__ListWrap-uqwbkk-0.heFHpk > ul > li:nth-child({i}) > a').click()
  time.sleep(3)
  driver.get(get_url)
  full_html = driver.page_source
  soup = BeautifulSoup(full_html, 'html.parser')
  time.sleep(1)
  imgLength = soup.select('#mArticle > div > div.swipe-images__Wrap-b1yvye-0.cPQuQo > div:nth-child(1) > div > div')
  for j in range(1, len(imgLength)):
    getImg = driver.find_element_by_css_selector(f'#mArticle > div > div.swipe-images__Wrap-b1yvye-0.cPQuQo > div:nth-child(1) > div > div:nth-child({j}) > span > img').get_attribute('src')
    item_title = driver.find_element_by_css_selector('#mArticle > div > div.detail-header__Detail-sc-1h4z2tt-0.cFRAaP > h2').text

    #csv file write
    csv_writer.writerow((item_title, getImg))
  driver.back()