import { ClockInOptions, ClockInOptionsInterval } from './models';

document.addEventListener('DOMContentLoaded', () => {
  const intervalsContainer = document.getElementById(
    'intervalsContainer'
  ) as HTMLElement;
  const addIntervalBtn = document.getElementById(
    'addIntervalBtn'
  ) as HTMLButtonElement;
  const executeBtn = document.getElementById('executeBtn') as HTMLButtonElement;
  const monthInput = document.getElementById('month') as HTMLInputElement;
  const yearInput = document.getElementById('year') as HTMLInputElement;
  const minutesPerDayInput = document.getElementById(
    'minutes_per_day'
  ) as HTMLInputElement;

  function createIntervalInput(
    clockInValue: string = '09:00',
    clockOutValue: string = '17:00'
  ): void {
    const intervalDiv = document.createElement('div');
    intervalDiv.classList.add('interval');

    const clockInInput = document.createElement('input');
    clockInInput.type = 'time';
    clockInInput.name = 'clock_in';
    clockInInput.required = true;
    clockInInput.value = clockInValue;
    intervalDiv.appendChild(clockInInput);

    const clockOutInput = document.createElement('input');
    clockOutInput.type = 'time';
    clockOutInput.name = 'clock_out';
    clockOutInput.required = true;
    clockOutInput.value = clockOutValue;
    intervalDiv.appendChild(clockOutInput);

    const removeBtn = document.createElement('button');
    removeBtn.type = 'button';
    removeBtn.textContent = '-';
    removeBtn.addEventListener('click', () =>
      intervalsContainer.removeChild(intervalDiv)
    );
    intervalDiv.appendChild(removeBtn);

    intervalsContainer.appendChild(intervalDiv);
  }

  addIntervalBtn.addEventListener('click', () => createIntervalInput());

  executeBtn.addEventListener('click', () => {
    const month = parseInt(monthInput.value);
    const year = parseInt(yearInput.value);
    const employee_id = parseInt(
      (document.getElementById('employee_id') as HTMLInputElement).value
    );
    const minutes_per_day = parseInt(minutesPerDayInput.value);

    const intervalDivs = intervalsContainer.querySelectorAll('.interval');
    const intervals: ClockInOptionsInterval[] = Array.from(intervalDivs).map(
      (div: Element) => ({
        clock_in: (
          div.querySelector('input[name="clock_in"]') as HTMLInputElement
        ).value,
        clock_out: (
          div.querySelector('input[name="clock_out"]') as HTMLInputElement
        ).value,
      })
    );

    const data: ClockInOptions = {
      month,
      year,
      employee_id,
      intervals,
      minutes_per_day,
    };

    console.log('Data to send:', data);
    if (employee_id) {
      chrome.runtime.sendMessage(
        { action: 'executeBatch', data },
        (response) => {
          console.log('Respuesta recibida:', response);
          chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            chrome.tabs.reload(tabs[0].id);
          });
        }
      );
    }
  });

  // Agregar un intervalo inicial con valores predeterminados
  createIntervalInput();

  // Establecer el mes actual y el año actual como valores por defecto
  const currentDate = new Date();
  monthInput.value = String(currentDate.getMonth() + 1); // Ajuste para base-0 a base-1
  yearInput.value = String(currentDate.getFullYear());
  minutesPerDayInput.value =
    currentDate.getMonth() >= 6 && currentDate.getMonth() <= 8 ? '420' : '480';
});
