var memory = null;


function add_to_memory(){
  if (memory !== null) {
    clear_display(memory);
    document.getElementById('display2').value += memory;
  } else {
    memory = document.getElementById('display').value;
    clear_working('');
    mark_memory(memory);
  }
}

function mark_memory(val){
  console.log(memory);
  document.getElementById('display3').value += val;
}

function add_to_display(val){
  document.getElementById('display').value = '';
  document.getElementById('display').value = val;
  document.getElementById("display2").value += val;
}

function clear_all(val){
  memory = null;
  document.getElementById('display3').value = '';
  clear_working(val);
}
 
function clear_working(val){
  clear_display(val);
  clear_display2(val);
}

function clear_display(val) {
  document.getElementById("display").value = val;
}

function clear_display2(val) {
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
