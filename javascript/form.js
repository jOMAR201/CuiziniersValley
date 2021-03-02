"use strict";

function results(){
    let fname=document.getElementById('fname').value;
    let country=document.getElementById('country').value;
    let Email=document.getElementById('Email').value;
    let subject=document.getElementById('subject').value;

    document.write("<h1>Thank You!</h1>");
    document.write("<p>Now your data will send via email</p>");
    document.write("<h3>Here is your data:</h3>");
    document.write(fname + "<br/>");
    document.write(country + "<br/>");
    document.write(Email + "<br/>");
    document.write(subject + "<br/>")
    document.write("<p>Refresh the page to go back</p>");

}
