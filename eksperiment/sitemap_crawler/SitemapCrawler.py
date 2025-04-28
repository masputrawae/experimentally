import requests
from bs4 import BeautifulSoup
import xml.etree.ElementTree as ET
import json

def getSitemapUrls(sitemap_url):
    response = requests.get(sitemap_url)
    print(f'''Respons: {response.status_code}''')
    
    if response.status_code == 200:
        root = ET.fromstring(response.text)
        namespaces = {'ns': 'http://www.sitemaps.org/schemas/sitemap/0.9'}
        urls = [url.text for url in root.findall('.//ns:loc', namespaces)]
        dataLinkJson = {
            "url": urls
        }
        with open('link.json', 'w') as file:
            json.dump(dataLinkJson, file, indent=4)
        print("Tersimpan Di links.json")
        return urls
    else:
        print(f"Gagal mengakses sitemap: {sitemap_url}")
        return []

def crawlPage():
    dataContent = {}
    with open('link.json', 'r') as file:
        dataLinkJson = json.load(file)
        
    for link in dataLinkJson["url"]:
        responseUrl = requests.get(link)
        print(f'''{link} === Respons: {responseUrl.status_code}''')
        
        soup = BeautifulSoup(responseUrl.text, 'html.parser')
        titles = soup.find_all('h1')
        contents = soup.find_all('main')

        for title, content in zip(titles, contents):
            dataContent[link]= {
                "title": title.get_text(),
                "content": content.get_text()
            }
            
    with open('content.json', 'w') as file:
        json.dump(dataContent, file, indent=4)
        
sitemap_url = "https://masputrawae.github.io/sitemap.xml"
getSitemapUrls(sitemap_url)
crawlPage()