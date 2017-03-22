function add_to_display(val){
  document.getElementById('display').value = '';
  document.getElementById('display').value = val;
  document.getElementById("display2").value += val;
}

function clear_display(val) {
  document.getElementById("display").value = val;
  document.getElementById("display2").value = val;
}

function eval_display(val){
  try{
    clear_display(eval(document.getElementById("display2").value));
  }
  catch(e){
    clear_display("Error");
  }
}
