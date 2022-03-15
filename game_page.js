player1_name=localStorage.getItem("player-1")
player2_name=localStorage.getItem("player-2")

player1_score=0;
player2_score=0;

document.getElementById("player_1_name").innerHTML=player1_name+" : ";
document.getElementById("player_2_name").innerHTML=player2_name+" : ";

document.getElementById("player_1_score").innerHTML=player1_score;
document.getElementById("player_2_score").innerHTML=player2_score;

document.getElementById("player_question").innerHTML="Question turn - "+player1_name;
document.getElementById("player_answer").innerHTML="Answer turn - "+player2_name;

function send(){
    get_word=document.getElementById("word").value;
    word=get_word.toLowerCase();

    second_letter=word.charAt(1);

    middle_letter_position=Math.floor(word.length/2);
    middle_letter=word.charAt(middle_letter_position);

    last_letter_position=word.length-1;
    last_letter=word.charAt(last_letter_position);

    replace_second_letter=word.replace(second_letter,"_");
    replace_middle_letter=replace_second_letter.replace(middle_letter,"_");
    replace_last_letter=replace_middle_letter.replace(last_letter,"_");

    question_tag="<h4 id='word_display'>Q. "+replace_last_letter+"</h4>";
    input_box="<br><br> <input type='text' id='input_checkbox'>";
    button="<br><br> <button class='btn btn-info' onclick='check()'>Check</button>";
    row=question_tag+input_box+button;
    document.getElementById("output").innerHTML=row;
    document.getElementById("word").value="";
}

question_turn="player1";
answer_turn="player2";

function check(){
    get_answer=document.getElementById("input_checkbox").value;
    answer=get_answer.toLowerCase();
    if(word==answer){
        if(answer_turn=="player1"){
            player1_score=player1_score+1;
            document.getElementById("player_1_score").innerHTML=player1_score
        }
        else{
            player2_score=player2_score+1;
            document.getElementById("player_2_score").innerHTML=player2_score
        }
    }
    if(question_turn=="player1"){
        question_turn="player2"
        document.getElementById("player_question").innerHTML="Question turn - "+player2_name;
    }
    else{
        question_turn="player1"
        document.getElementById("player_question").innerHTML="Question turn - "+player1_name;
    }
    if(answer_turn=="player1"){
        answer_turn="player2"
        document.getElementById("player_answer").innerHTML="Answer turn - "+player2_name;
    }
    else{
        answer_turn="player1"
        document.getElementById("player_answer").innerHTML="Answer turn - "+player1_name;
    }
    document.getElementById("output").innerHTML=""
}