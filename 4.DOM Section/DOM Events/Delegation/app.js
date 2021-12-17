const tweetForm = document.querySelector("#tweetForm");

const tweetsContainer = document.querySelector("#tweets")

tweetForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const usernameInput = tweetForm.elements.username;
    const tweetInput = tweetForm.elements.tweet;
    addTweet(usernameInput.value,tweetInput.value);
    usernameInput.value="";
    tweetInput.value = "";
})

const addTweet = function (username,tweet) {
    const newTweet = document.createElement("li");
    const bTag = document.createElement("b");
    bTag.append(username);
    newTweet.append(bTag);
    newTweet.append(`- ${tweet}`);
    tweetsContainer.append(newTweet); 
}
// with this eventlistener i will remove any tweet that is added to the ul
tweetsContainer.addEventListener('click', function (e) {
    e.target.remove();
})