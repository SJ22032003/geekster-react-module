function upperCaseTheString(str){
  if(!str) return '';
  if (typeof str !== 'string') return '';
  return str.toUpperCase();
}

export default upperCaseTheString;