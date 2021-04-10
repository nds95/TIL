from bs4 import BeautifulSoup
from selenium import webdriver
from webdriver_manager.chrome import ChromeDriverManager

import csv
import time
#1. csv file open
csv_name = 'item.csv'
csv_open = open(csv_name, 'w+', encoding='utf8', newline='')
csv_writer = csv.writer(csv_open)
csv_writer.writerow(('id', 'item_name', 'item_price', 'review_cnt', 'title', 'description', 'item_img_url',))

#2. Driver & BeautifulSoup
driver = webdriver.Chrome(ChromeDriverManager().install())

crawling_url = "https://store.kakaofriends.com/kr/index?tab=today"
driver.get(crawling_url)

#3. Parsing html code
full_html = driver.page_source
soup = BeautifulSoup(full_html, 'html.parser')
time.sleep(2)
# item 경로 click
elem = driver.find_element_by_css_selector('#innerHead > div > button.hamburger__Link-i04mgq-0.exHeuu')
elem.click()
time.sleep(2)
elem_0 = driver.find_element_by_css_selector('body > div:nth-child(7) > div > div > div > ul > li:nth-child(3) > button > span')
elem_0.click()
time.sleep(2)
elem_1 = driver.find_element_by_css_selector('body > div:nth-child(7) > div > div > div > ul > li:nth-child(3) > ul > li:nth-child(1) > a')
elem_1.click()
time.sleep(2)
elem_item = driver.find_element_by_css_selector('#mArticle > main > div.list__ListWrap-uqwbkk-0.heFHpk > ul > li:nth-child(1) > a > p.item__ItemTitle-sc-5t2pho-2.doXtmD')
elem_item.click()
##4. Get element selector (1)
#articles = soup.select('#mArticle > main > div.today__Wrap-sc-1gh0i9h-0.eBhdPx > article')
#for i in range(1, len(articles) + 1):
  ## 게시물 profile img url select(src)
  #profile_img = driver.find_element_by_css_selector(f'#mArticle > main > div.today__Wrap-sc-1gh0i9h-0.eBhdPx > article:nth-child({i}) > section.header__Wrap-sc-1uyrtg9-0.iFrtWG > div.header__ImageWrap-sc-1uyrtg9-1.hcCvnI > img').get_attribute('src')
  ## 게시물 profile name select(text)
  #profile_name = driver.find_element_by_css_selector(f'#mArticle > main > div.today__Wrap-sc-1gh0i9h-0.eBhdPx > article:nth-child({i}) > section.header__Wrap-sc-1uyrtg9-0.iFrtWG > div:nth-child(2) > p').text
  ## 게시물 profile status select(text)
  #upload_date = driver.find_element_by_css_selector(f'#mArticle > main > div.today__Wrap-sc-1gh0i9h-0.eBhdPx > article:nth-child(1) > section.header__Wrap-sc-1uyrtg9-0.iFrtWG > div:nth-child(2) > div > span.header__Badge-sc-1uyrtg9-5.kta-dcg').text
  ## 게시물 like count select(text)
  #like_cnt = driver.find_element_by_css_selector(f'#mArticle > main > div.today__Wrap-sc-1gh0i9h-0.eBhdPx > article:nth-child({i}) > section:nth-child(2) > div.contents__LikeCountWrap-sc-1b0iw5u-2.jvMMAF > span > span > span').text
  ## 게시물 title select(text)
  #title = driver.find_element_by_css_selector(f'#mArticle > main > div.today__Wrap-sc-1gh0i9h-0.eBhdPx > article:nth-child({i}) > section:nth-child(2) > p').text
  ## 게시물 description select(text)
  #description = driver.find_element_by_css_selector(f'#mArticle > main > div.today__Wrap-sc-1gh0i9h-0.eBhdPx > article:nth-child({i}) > section:nth-child(2) > div.contents__SubCopy-sc-1b0iw5u-6.fDsieo').text

  ## 게시물 별 img url select
  #imges = soup.select(f'#mArticle > main > div.today__Wrap-sc-1gh0i9h-0.eBhdPx > article:nth-child({i}) > section:nth-child(2) > div.media-slider__Wrap-bw8abp-0.fYNEqL > div > div > div')
  #for j in range(1, len(imges)+1):
    #img = driver.find_element_by_css_selector(f'#mArticle > main > div.today__Wrap-sc-1gh0i9h-0.eBhdPx > article:nth-child({i}) > section:nth-child(2) > div.media-slider__Wrap-bw8abp-0.fYNEqL > div > div > div:nth-child({j}) > div > div > img').get_attribute('src')

    ##5. Create csv file
    #if i == 0:
      #csv_writer.writerow((profile_img, profile_name, upload_date, like_cnt, title, description, img))
    #else:
      #csv_writer.writerow((profile_img, profile_name, upload_date, like_cnt, title, description, img))
