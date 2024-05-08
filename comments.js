// create web browser
var webBrowser = new WebBrowser();

// create a new comment
var comment = new Comment("John Doe", "This is a comment");

// add the comment to the web browser
webBrowser.addComment(comment);

// add another comment to the web browser
var comment2 = new Comment("Jane Doe", "This is another comment");
webBrowser.addComment(comment2);

// display the comments on the web browser
webBrowser.displayComments();

// delete the first comment
webBrowser.deleteComment(comment);

// display the comments on the web browser
webBrowser.displayComments();