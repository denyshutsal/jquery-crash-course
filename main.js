"use strict";

// Intro & Selectors ------------------------------------------

// $("h1").hide();
// $("h1#heading1").hide();
// $(".heading2").hide();
// $("p span").css("color", "red");

// ul -----------------------------------------------------------
// $("ul#list li:first").css("color", "red");
// $("ul#list li:last").css("color", "green");
// $("ul#list li:even").css("background-color", "yellow");
// $("ul#list li:odd").css("background-color", "#ccc");
// $("ul#list li:nth-child(3n)").css("list-style", "none");

// Buttons, forms --------------------------------------------
// $(":text").hide();
// $("[href]").css("color", "red");
// $("a[href='http://yahoo.com']").css("color", "green");

// $("*").hide();

// Events ------------------------------------------------------------

// $("#btn1").click(function () {
//   alert("Button clicked!");
// });

// $("#btn1").click(function () {
// $(".para2").hide();
// });

// $("#btn1").click(function () {
//   $(".para2").toggle();
// });

// $("#btn2").click(function () {
//   $(".para2").show();
// });

// $("#btn1").dblclick(function () {
//   $(".para2").toggle();
// });

// $("#btn1").hover(function () {
//   $(".para2").toggle();
// });

// $("#btn1").on("mouseenter", function () {
//   $(".para2").toggle();
// });

// $("#btn1").on("mouseleave", function () {
//   $(".para2").toggle();
// });

// $("#btn1").on("mousemove", function () {
//   $(".para2").toggle();
// });

// $("#btn1").on("mousedown", function () {
//   $(".para2").toggle();
// });

// $("#btn1").on("mouseup", function () {
//   $(".para2").toggle();
// });

// $("#btn1").click(function (e) {
// console.log(e);
// console.log(e.currentTarget.id);
// console.log(e.currentTarget.innerHTML);
// console.log(e.currentTarget.outerHTML);
// console.log(e.currentTarget.className);
// });

// $(document).on("mousemove", function (e) {
//   console.log(`Coords: Y: ${e.clientY} X: ${e.clientX}`);
// });

// Forms ---------------------------------------
// $("input").focus(function () {
//   $(this).css("background", "pink");
// });

// $("input").blur(function () {
//   $(this).css("background", "white");
// });

// $("input").keyup(function (e) {
//   console.log(e.target.value);
// });

// $("select#gender").change(function (e) {
//   console.log(e.target.value);
// });

// $("#form").submit(function (e) {
//   e.preventDefault();
//   let name = $("input#name").val();
//   console.log(name);
//   console.log("Submitted!");
// });

// DOM Manipulation -------------------------------------------

// $(document).ready(function () {
//   $("p.para1").css({ color: "red", background: "#ccc" });
//   $("p.para2").addClass("myClass");
//   $("p.para2").removeClass("myClass");
//   $("#btn1").click(function () {
//     $("p.para2").toggleClass("myClass");
//   });
//   $("#myDiv").text("Hello World!");
//   $("#myDiv").html("<h3>Hello World!</h3>");
//   alert($("#myDiv").text());
//   $("ul").append("<li>Append List Item");
//   $("ul").prepend("<li>Prepend List Item");
//   $(".para1").appendTo(".para2");
//   $(".para1").prependTo(".para2");
//   $("ul").defore("<h4>Hello</h4>");
//   $("ul").after("<h4>World</h4>");
//   $("ul").empty();
//   $("ul").detach();
//   $("a").attr("target", "_blank");
//   alert($("a").attr("href"));
//   $("a").removeAttr("target");
//   $("p").wrap("<h1>");
//   $("p").wrapAll("<h1>");

//   $("#newItem").keyup(function (e) {
//     let code = e.which;
//     if (code == 13) {
//       e.preventDefault();
//       $("ul").append("<li>" + e.target.value + "</li>");
//     }
//   });

//   let myArr = ["Brad", "Kelly", "Nate", "jose"];

//   $.each(myArr, function (i, val) {
//     $("#users").append("<li>" + val + "</li>");
//   });

//   var newArr = $("ul#list li").toArray();
//   $.each(newArr, function (i, val) {
//     console.log(val.innerHTML);
//   });
// });

// Effects and Animation ------------------------------
// $("#btnFadeOut").click(function () {
//   // $("#box").fadeOut("slow");
//   $("#box").fadeOut(3000, function () {
//     $("#btnFadeOut").text("Its Gone!");
//   });
// });

// $("#btnFadeIn").click(function () {
//   $("#box").fadeIn(3000);
// });

// $("#btnFadeTog").click(function () {
//   $("#box").fadeToggle(1000);
// });

// $("#btnSlideDown").click(function () {
//   $("#box").slideDown(3000);
// });

// $("#btnSlideUp").click(function () {
//   $("#box").slideUp(3000);
// });

// $("#btnSlideTog").click(function () {
//   $("#box").slideToggle(3000);
// });

// $("#btnStop").click(function () {
//   $("#box").stop();
// });

// $("#moveRight").click(function () {
//   $("#box2").animate({
//     left: 500,
//     height: "300px",
//     width: "300px",
//     opacity: "0.5",
//   });
// });

// $("#moveLeft").click(function () {
//   $("#box2").animate({
//     left: 0,
//     height: "100px",
//     width: "100px",
//     opacity: "1",
//   });
// });

// $("#moveAround").click(function () {
//   let box = $("#box2");
//   box.animate({
//     left: 300,
//   });
//   box.animate({
//     top: 300,
//   });
//   box.animate({
//     left: 0,
//     top: 300,
//   });
//   box.animate({
//     left: 0,
//     top: 0,
//   });
// });

// AJAX ----------------------------------------------------------

// $("#result").load("test.html", function (responseTxt, statusTxt, xhr) {
//   if (statusTxt == "succes") {
//     alert("It went fine");
//   } else if (statusTxt == "error") {
//     alert("Error: " + xhr.statusTxt);
//   }
// });

// $.get("test.html", function (data) {
//   $("#result").html(data);
// });

// $.getJSON("users.json", function (data) {
//   $.each(data, function (i, users) {
//     $("ul#users").append("<li>" + users.firstName + "</li>");
//   });
// });

// $.ajax({
//   method: "GET",
//   url: "https://jsonplaceholder.typicode.com/posts",
//   dataType: "json",
// }).done(function (data) {
//   console.log(data);
//   $.map(data, function (post, i) {
//     $("#result").append("<h3>" + post.title + "</h3><p>" + post.body + "</p");
//   });
// });

// $("#postForm").submit(function (e) {
//   e.preventDefault();

//   let title = $("#title").val();
//   let body = $("#body").val();
//   let url = $(this).attr("action");

//   $.post(url, { title: title, body: body }).done(function (data) {
//     console.log("Post Saved");
//     console.log(data);
//   });
// });
