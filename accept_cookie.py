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
    # Wait for the cookie consent popup to be present
    cookie_popup = WebDriverWait(driver, 10).until(
        EC.presence_of_element_located((By.CLASS_NAME, "cookie-alert"))
    )

    # Click on the "Accept" button
    accept_button = cookie_popup.find_element(By.XPATH, "//button[contains(text(), 'Accept')]")
    accept_button.click()

except TimeoutException:
    print("No cookie consent popup found or it was not displayed within the timeout.")

# Enter departure and destination airports
departure_airport = "RIX"  # Riga Airport (you can change this to your desired airport code)
destination_airport = "AMS"  # Amsterdam Airport (you can change this to your desired airport code)

# Wait for the departure input field to be present
departure_input = WebDriverWait(driver, 30).until(
    EC.presence_of_element_located((By.ID, "routeSelection_DepartureStation-input"))
)
departure_input.clear()
departure_input.send_keys(departure_airport)

# Wait for the destination input field to be present
destination_input = WebDriverWait(driver, 30).until(
    EC.presence_of_element_located((By.ID, "routeSelection_ArrivalStation-input"))
)
destination_input.clear()
destination_input.send_keys(destination_airport)

# Click on the search button
search_button = driver.find_element(By.XPATH, "//button[contains(@class, 'search-flights-button')]")
search_button.click()

# Wait for the results page to load (you may need to adjust the wait time)
time.sleep(5)

# Get the ticket prices
ticket_prices = driver.find_elements(By.XPATH, "//div[contains(@class, 'flight-list-price')]")

# Print the ticket prices
for index, price_element in enumerate(ticket_prices, start=1):
    print(f"Option {index}: {price_element.text}")

# Close the browser window
driver.quit()
