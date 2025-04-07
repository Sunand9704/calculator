function append(value) {
   if (document.getElementById('display').value === 'Error' ||  document.getElementById('display').value === 'undefined'){
      console.log('i am value')
       document.getElementById('display').value = '';
   }
    document.getElementById('display').value += value;
}

const delete1 = () => {
   let value = document.getElementById('display').value;
  document.getElementById('display').value =  value.slice(0,-1);
   
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    try {
        document.getElementById('display').value = eval(document.getElementById('display').value);
    } catch(err) {
        document.getElementById('display').value = 'Error';
       // console.log(err)
    }
}