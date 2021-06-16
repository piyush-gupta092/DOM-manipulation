var anchor = document.getElementById('anchor');
anchor.addEventListener('click',function(){
	prompt('Answer Here!!');
    var name = document.getElementById('line');
    name.innerHTML = "Sorry, I'm not in mood. See You Later!!";
    var button = document.getElementById('anchor');
    button.innerHTML = "Try Some Time Later";
    setTimeout(function() { alert('Refresh Your Browser Window!'); }, 2000);
});