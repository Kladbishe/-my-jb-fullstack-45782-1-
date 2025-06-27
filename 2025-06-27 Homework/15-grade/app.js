num=+prompt('enter a grade')
document.write(`${
  num >= 0 && num <= 59 ? 'Fail' :
  num >= 60 && num <= 69 ? 'pass' :
  num >= 70 && num <= 79 ? 'Almost good' :
  num >= 80 && num <= 89  ? 'Good' :
  num >= 90 && num <= 99  ? 'very good' :
  num === 100 ? 'excellent' :
  'Invalid grade'}`); 
