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
return_date = "2024-4-4"

# Splitting date components
departure_date = departure_date.split("-")
return_date = return_date.split("-")
departure_year = departure_date[0]
departure_month = departure_date[1]
departure_day = departure_date[2]
return_year = return_date[0]
return_month = return_date[1]
return_day = return_date[2]

# Set up the Chrome webdriver
options = webdriver.ChromeOptions()
driver = webdriver.Chrome(options=options)

# Navigate to the AirBaltic website
url = "https://www.airbaltic.com/en-LV/index"
driver.get(url)

# Handle cookie consent popup if it exists
try:
    cookie_popup = WebDriverWait(driver, 10).until(
        EC.presence_of_element_located((By.CLASS_NAME, "cookie-alert"))
    )
    accept_button = cookie_popup.find_element(By.XPATH, "//button[contains(text(), 'Accept')]")
    accept_button.click()
except TimeoutException:
    print("No cookie consent popup found or it was not displayed within the timeout.")

# Enter departure airport
departure_input = WebDriverWait(driver, 30).until(
    EC.presence_of_element_located((By.XPATH, "//div[contains(@class, 'fsf-typeahead') and contains(@class, 'is-index')][1]//input"))
)
departure_input.clear()
departure_input.send_keys(departure_airport)

# Try to click on the "Departure" button using class name
try:
    departure_button = WebDriverWait(driver, 10).until(
        EC.element_to_be_clickable((By.CLASS_NAME, "airport"))
    )
    departure_button.click()
except TimeoutException:
    print(f"Departure option '{departure_airport}' button not found or not clickable within the timeout.")

# Enter destination airport
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
    print(f"Destination option '{destination_airport}' button not found or not clickable within the timeout.")


time.sleep(2)

# Find and click on the specific month and year you want to select (e.g., March 2023)
try:
    target_month_year_element = WebDriverWait(driver, 10).until(
        EC.element_to_be_clickable((By.XPATH, "//div[@class='month-select-wrap']//div[@data-date='" + departure_month + "-" + departure_year + "']"))
    )

    target_month_year_element.click()
except TimeoutException:
    print(f"Target month '{departure_month} {departure_year}' not found or not clickable within the timeout.")

time.sleep(2)
# Rest of your code...
