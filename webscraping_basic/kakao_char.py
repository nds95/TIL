from bs4 import BeautifulSoup
from selenium import webdriver
from webdriver_manager.chrome import ChromeDriverManager

import csv
import time
#1. csv file open
csv_name = 'item.csv'
csv_open = open(csv_name, 'w+', encoding='utf8', newline='')
csv_writer = csv.writer(csv_open)
csv_writer.writerow(('item_name', 'item_price', 'review_cnt', 'title', 'description', 'item_img_url'))

#2. Driver & BeautifulSoup
driver = webdriver.Chrome(ChromeDriverManager().install())

crawling_url = "https://store.kakaofriends.com/kr/index?tab=today"
driver.get(crawling_url)

#3. Parsing html code
full_html = driver.page_source
soup = BeautifulSoup(full_html, 'html.parser')
time.sleep(2)
# Character 경로 click
sideMenu = driver.find_element_by_css_selector('#innerHead > div > button.hamburger__Link-i04mgq-0.exHeuu').click()
time.sleep(2)
character_button = driver.find_element_by_css_selector('body > div:nth-child(7) > div > div > div > ul > li:nth-child(3) > button').click()
time.sleep(2)
char_len = driver.find_element_by_css_selector('body > div:nth-child(6) > div > div > div > ul > li:nth-child(3) > ul > li:nth-child(1) > a')