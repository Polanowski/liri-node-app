console.log('this is loaded');

var twitterConsumerKey = keys.twitterKeys.consumer_key
var twitterConsumerSecret = keys.twitterKeys.consumer_secret
var twitterAccessTokenKey =  keys.twitterKeys.access_token_key
var twitterAccessTokenSecret = keys.twitterKeys.access_token_secret

var twitterKeys = new Twitter({
  consumer_key: "A7SAnTKZFY94TLd1whV4z0lvB",
  consumer_secret: "a8CtKpXROUUp9qPnjiiEIhYJnyiOnMKCNo1TE5A8nDlM2qH0he",
  access_token_key: "	934273592291835905-s7MJ219BMcz5jK5Ejii2vsJMNgmJ3gm",
  access_token_secret: "oE676JXmMO9tUa7NlNvGanB79CIHWgsRvWh5LVB8GaHFJ"
 });

module.exports = twitterKeys;