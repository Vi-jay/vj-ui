const str = "12366666123";
console.log(str.replace(/(\d{3}).*(\d{3})/g,"$1***$2"))