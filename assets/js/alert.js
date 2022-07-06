//Alert
 function CustomAlert(){
    this.render = function(dialog){
      var winW = window.innerWidth;
      var winH = window.innerHeight;
      var dialogOverlay = document.getElementById('dialogOverlay');
      var dialogBox = document.getElementById('dialogBox');
      dialogOverlay.style.display = "block";
      dialogOverlay.style.height = winH + "px";
      dialogBox.style.left=(winW/2) - (550 * .5) + "px";
      dialogBox.style.top = "100px"
      dialogBox.style.display = "block";
      document.getElementById('dialogBoxHead').innerHTML = "Alert title Here";
      document.getElementById('dialogBoxBody').innerHTML = dialog;
      document.getElementById('dialogFooter').innerHTML = '<button onclick="Alert.ok()">OK</button>';
      
  
    }
    this.ok = function(){
      document.getElementById('dialogBox').style.display = "none";
      document.getElementById('dialogOverlay').style.display = "none";
  
  
    }
  console.log(CustomAlert());
  
  
  }

  var newAlert = new CustomAlert();