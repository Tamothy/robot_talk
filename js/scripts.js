$(document).ready(function () {
  $("button#monday").click(function() {
    $("ul.said").prepend("<li>Are you having a happy Monday, humanoid?</li>");
    $("ul.said").children("li").first().click(function () {
      $(this).remove();
    });
  });
  $("button#job").click(function() {
    $("ul.said").prepend("<li>Are you burnt out from your job?</li>");
    $("ul.said").children("li").first().click(function () {
      $(this).remove();
    });
  });
  $("button#diet").click(function() {
    $("ul.said").prepend("<li>Are you you eating your vegetables?</li>");
    $("ul.said").children("li").first().click(function () {
      $(this).remove();
    });
  });
  $("button#monday").click(function() {
    $("ul.ask").prepend("<li>What do you think? Guess again.</li>");
    $("ul.ask").children("li").first().click(function () {
      alert("Cheer up buttercup!");
    });
  });
  $("button#job").click(function() {
    $("ul.ask").prepend("<li>Yeah, much charded.</li>");
    $("ul.ask").children("li").first().click(function () {
      alert("Burn baby, burn.");
    });
  });
  $("button#diet").click(function() {
    $("ul.ask").prepend("<li>I like my peanut butter, thanks much! </li>");
    $("ul.ask").children("li").first().click(function () {
      alert("Chunky is the best!");
    });
  });
});
