import webdriver from 'selenium-webdriver';
import chrome from 'chromedriver';
import {until, By, Key} from 'selenium-webdriver';

export const getDriver = () => {
  let driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();
  return driver;
};

export const createTask = async (taskName, driver) => {
  await driver.wait(until.elementLocated(By.xpath("//input[@placeholder='Enter new task']")), 1000);
  const input = await driver.findElement(By.xpath("//input[@placeholder='Enter new task']"));
  await input.clear();
  await input.sendKeys(taskName + Key.ENTER);

  await driver.wait(until.elementLocated(By.xpath(`//*[text()='${taskName}']`)), 1000);
};