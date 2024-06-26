# Instrucciones

1. Ejecutar el siguiente comando en la terminal:

```bash
npm run build
```

2. Compiar el contenido del fichero `dist/index.js` en la consola de Factorial
   en la página de fichaje de horas.

3. Por último, ejecutar la siguiente función en la página de fichaje de horas de
   Factorial personalizando los valores para cada empleado.

```javascript
ecc
  .batch({
    month: 2, // Los meses empiezan en 0
    year: 2024,
    employee_id: 1417389,
    intervals: [
      {
        clock_in: '08:30',
        clock_out: '14:00',
      },
      {
        clock_in: '16:00',
        clock_out: '18:30',
      },
    ],
    minutes_per_day: 480,
    // dry_run: true,
  })
  .then();
```

4. Se pueden eliminar todas las horas de un periodo automáticamente de la
   siguiente manera:

```javascript
ecc.deleteAllShiftsByPeriodId({ period_id: 13401838 }).then();
```
