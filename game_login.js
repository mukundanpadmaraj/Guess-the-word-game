function add(){
    player_1_name=document.getElementById("player_1_input").value
    player_2_name=document.getElementById("player_2_input").value
    localStorage.setItem("player-1",player_1_name);
    localStorage.setItem("player-2",player_2_name);
    window.location="game_page.html"
}