import requests

URL =requests.get("https://opentdb.com/api.php?amount=10&category=9&type=multiple")
print(URL)