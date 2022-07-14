import $ from 'jquery';

$(document).ready(function(){
    $('#btn').click(function(){
        $('#para').slideToggle(3000);

    });
    $('#btn').dblclick(function(){
        $('#para').animate({left:'250px',width:'200px',height:'200px'})
    });
});