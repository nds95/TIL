from bs4 import BeautifulSoup
from selenium import webdriver
from webdriver_manager.chrome import ChromeDriverManager

import csv
import time
#1. csv file open

#2. Driver & BeautifulSoup
driver = webdriver.Chrome(ChromeDriverManager().install())

crawling_url = "https://store.kakaofriends.com/kr/index?tab=today"
driver.get(crawling_url)

#3. Parsing html code
full_html = driver.page_source
soup = BeautifulSoup(full_html, 'html.parser')
time.sleep(2)

#4. Get element selecort (1)
img = soup.find_all("article", attrs={"class":"feed__Wrap-uhovpf-0 lbNmLd"}).find("section")
print(img)