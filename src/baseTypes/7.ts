/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/
enum Weekdays {
  Monday = "MONDAY",
  Tuesday = "TUESDAY",
  Wednesday = "WEDNESDAY",
  Thursday = "THURSDAY",
  Friday = "FRIDAY",
  Saturday = "SATURDAY",
  Sunday = "SUNDAY",
}

const isWeekend = (weekday: Weekdays): boolean => {
  if (weekday === "SATURDAY" || weekday === "SUNDAY") {
    return true;
  }
  return false;
};

isWeekend(Weekdays.Sunday);
