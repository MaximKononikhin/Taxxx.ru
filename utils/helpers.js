export const validatePassword = (password) => {
  // const lowerCasePassword = password.toLowerCase();
  // if (password !== lowerCasePassword && /^[a-zA-Z0-9]+$/.test(password) && /[0-9]/.test(password)) {
  //   return true;
  // }
  return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,50}$/.test(password);
}


// ^(([A-zА-я]+)( ?)([A-zА-я]+)?){3,25}$ регулярка имени
export const validateName = (name) => {
  return /^(([A-zА-я]+)( ?)([A-zА-я]+)?){3,25}$/.test(name);
}

// /^[0-9]{10}$/ регулярка телефона
export const validatePhone = (tel) => {
  return /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/.test(tel);
}

export const getMinsAndSecs = (sec) => {
  return `${Math.floor(sec / 60)}:${Math.floor(sec % 60) >= 10 ? Math.floor(sec % 60) : `0${Math.floor(sec % 60)}`}`;
};