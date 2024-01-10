from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import TimeoutException
import time

# Your departure and destination details
departure_airport = "RIX"
destination_airport = "AMS"
departure_date = "2024-3-3"
return_date = "2024-3-4"



# Set up the Chrome webdriver
options = webdriver.ChromeOptions()
driver = webdriver.Chrome(options=options)

# Navigate to the AirBaltic website
url = "https://www.airbaltic.com/en-LV/index"
driver.get(url)

def accept_cookies(driver):
    try:
        cookie_popup = WebDriverWait(driver, 10).until(
            EC.presence_of_element_located((By.CLASS_NAME, "cookie-alert"))
        )
        accept_button = cookie_popup.find_element(By.XPATH, "//button[contains(text(), 'Accept')]")
        accept_button.click()
    except TimeoutException:
        print("No cookie consent popup found or it was not displayed within the timeout.")



def set_departure_airport(driver, airport_code):
    try:
        airport_input = WebDriverWait(driver, 30).until(
            EC.presence_of_element_located((By.XPATH, "//div[contains(@class, 'fsf-typeahead') and contains(@class, 'is-index')][1]//input"))
        )
        airport_input.clear()
        airport_input.send_keys(airport_code)
        airport_button = WebDriverWait(driver, 10).until(
            EC.element_to_be_clickable((By.CLASS_NAME, "airport"))
        )
        airport_button.click()
    except TimeoutException:
        print(f"Departure option '{airport_code}' button not found or not clickable within the timeout.")


def set_destination_airport(driver, airport_code):
    destination_input = WebDriverWait(driver, 30).until(
        EC.presence_of_element_located((By.XPATH, "//div[contains(@class, 'fsf-typeahead') and contains(@class, 'is-index')][2]//input"))
    )
    destination_input.clear()
    destination_input.send_keys(destination_airport)
    try:
        destination_button = WebDriverWait(driver, 10).until(
            EC.element_to_be_clickable((By.CLASS_NAME, "airport"))
        )
        destination_button.click()
    except TimeoutException:
        print(f"Destination option '{airport_code}' button not found or not clickable within the timeout.")
    time.sleep(1)


def find_month(driver, departure_date):
    departure_date = departure_date.split("-")
    year = departure_date[0]
    month = departure_date[1]
    try:
        target_month_year_element = WebDriverWait(driver, 10).until(
            EC.element_to_be_clickable((By.XPATH, "//div[@class='month-select-wrap']//div[@data-date='" + month + "-" + year + "']"))
        )
        target_month_year_element.click()
    except TimeoutException:
        print(f"Target month '{month} {year}' not found or not clickable within the timeout.")
    time.sleep(1)


def find_day(driver, departure_date):
    departure_date = departure_date.split("-")
    day = departure_date[2]
    try:
        target_day_element = WebDriverWait(driver, 10).until(
            EC.element_to_be_clickable((By.XPATH, "//div[contains(@class, 'vc-day') and .//span[contains(@class, 'date') and normalize-space(text())='" + day + "']]"))
        )
        target_day_element.click()
    except TimeoutException:
        print(f"Target day '{day}' not found or not clickable within the timeout.")
    time.sleep(1)


def find_price(driver):
    try:
        price_eur = driver.find_element(By.CLASS_NAME, "selected-price-main")
        price_cents = driver.find_element(By.CLASS_NAME, "selected-price-decimal")
        # print (price_eur.text + "." + price_cents.text)
        return (float(price_eur.text + "." + price_cents.text))
    except TimeoutException:
        # print(f"Target price is not found for these dates.")
        return None
    

accept_cookies(driver)
set_departure_airport(driver, departure_airport)
set_destination_airport(driver, destination_airport)
find_month(driver, departure_date)
find_day(driver, departure_date)
find_month(driver, return_date)
find_day(driver, return_date)
print(find_price(driver))
departure_date = "2024-4-4"
return_date = "2024-4-5"
find_month(driver, departure_date)
find_day(driver, departure_date)
find_month(driver, return_date)
find_day(driver, return_date)
print(find_price(driver))



