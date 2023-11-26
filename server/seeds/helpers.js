function getRandom(arr){
    const randomIndex = Math.floor(Math.random()* arr.length);
    const item = arr[randomIndex];
    return item;
}
function getRandomDate(from, to) {
    return new Date(
      from.getTime() +
        Math.random() * (to.getTime() - from.getTime()),
    );
  }
module.exports = {getRandom,getRandomDate}