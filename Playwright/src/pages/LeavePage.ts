import { Page, Locator } from "@playwright/test";

export default class LeavePage {

  readonly page: Page;
  private leave: Locator;
  private leaveDropdown: Locator;
  private holiday: Locator;
  private configure: Locator;
  private button: Locator;
  private holidayName: Locator;
  private holidayDateDDMMYYYY: Locator;
  private holidayDateYYYYMMDD: Locator;
  private holidayDateYYYYDDMM: Locator;
  private saveButton: Locator;
  private holidayList: Locator;

  private static readonly HolidayName = "National Holiday123";
  private static readonly startDate = new Date("2025-01-01");
  private static readonly endDate = new Date("2025-12-31");

  constructor(page: Page) {
    this.page = page;
    this.leave = page.locator("");
    this.leaveDropdown = page.locator("");
    this.configure = page.locator("");
    this.holiday = page.locator("");
    this.button = page.locator("");
    this.holidayName = page.locator("");

    // All possible placeholder formats
    this.holidayDateDDMMYYYY = page.locator("");
    this.holidayDateYYYYMMDD = page.locator("");
    this.holidayDateYYYYDDMM = page.locator("");
    this.saveButton = page.locator("");
    this.holidayList = page.locator(``);
  }

  /**
   * Creates a new holiday entry in the system.
   *
   * Steps:
   * 1. Navigates through Leave > Configure > Holidays section.
   * 2. Fills in the holiday name with a predefined static value.
   * 3. Detects the correct date input format by checking visibility of specific fields.
   * 4. Generates and fills a random date within the allowed range based on the detected format.
   * 5. Saves the form and waits for the new holiday to appear in the list.
   * 6. Returns the text content of the first holiday item for verification in test.
   *
   * @returns {Promise<string>} - The text of the newly created holiday (trimmed)
   */

  async createNewLeaveRequest(): Promise<string> {
    return "";
  }

}
