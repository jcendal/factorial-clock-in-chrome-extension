# Factorial TimeTracker Automation

This project is a Chrome extension designed to automate the clocking in and out
of work hours in Factorial, a time-tracking tool. The extension allows users to
specify intervals for clocking in and out, the month, the year, and the minutes
per day to be recorded.

## Features

- **Add multiple intervals**: Users can add multiple time intervals for clocking
  in and out.
- **Dynamic inputs**: Set the month, year, and minutes per day.
- **Automatic execution**: Automatically sends the specified data to a
  background script to be processed and recorded in Factorial.

## Installation

### From the Chrome Web Store

1. Open Google Chrome and go to the
   [Chrome Web Store](https://chrome.google.com/webstore).
2. Search for "Factorial TimeTracker Automation".
3. Click on the extension in the search results.
4. Click the "Add to Chrome" button.
5. Confirm the installation by clicking "Add extension".

### Manual Installation

1. Clone or download this repository to your local machine.
2. Open Google Chrome and go to `chrome://extensions/`.
3. Enable "Developer mode" by clicking the toggle switch in the top right
   corner.
4. Click the "Load unpacked" button.
5. Select the directory where you cloned or downloaded the repository.
6. The extension should now appear in your list of installed extensions.

## Usage

1. Click on the Factorial TimeTracker Automation icon in the Chrome toolbar to
   open the popup.
2. Set the month and year using the corresponding input fields.
3. Add intervals for clocking in and out by clicking the "Add interval" button.
   Each interval includes a clock-in time and a clock-out time.
4. Set the minutes per day based on your schedule (e.g., 480 minutes for a full
   day, 420 minutes for summer).
5. Click the "Execute" button to send the data to the background script, which
   will process it and interact with Factorial.
