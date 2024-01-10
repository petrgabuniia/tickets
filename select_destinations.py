from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import TimeoutException
import time

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

# Enter departure and destination airports
departure_airport = "RIX"
destination_airport = "AMS"

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

# Wait for the destination input field to be present
destination_input = WebDriverWait(driver, 30).until(
    EC.presence_of_element_located((By.XPATH, "//div[contains(@class, 'fsf-typeahead') and contains(@class, 'is-index')][2]//input"))
)
destination_input.clear()
destination_input.click()

# Wait for the destination option button to be clickable
try:
    destination_button = WebDriverWait(driver, 10).until(
        EC.element_to_be_clickable((By.XPATH, f"//div[contains(@class, 'airport') and contains(text(), '{destination_airport}')]//button"))
    )
    destination_button.click()
except TimeoutException:
    print(f"Destination option '{destination_airport}' button not found or not clickable within the timeout.")

# Click on the "Select dates" button
select_dates_button = driver.find_element(By.XPATH, "//div[contains(@class, 'btn-green')]//button")
select_dates_button.click()

# Wait for the results page to load (you may need to adjust the wait time)
time.sleep(5)

# Get the ticket prices
ticket_prices = driver.find_elements(By.XPATH, "//div[contains(@class, 'flight-list-price')]")

# Print the ticket prices
for index, price_element in enumerate(ticket_prices, start=1):
    print(f"Option {index}: {price_element.text}")

# Close the browser window
driver.quit()
