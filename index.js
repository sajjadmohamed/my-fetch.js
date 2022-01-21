const cat_result = document.gaeElemenById("cat_result");
const dog_result = document.gaeElemenById("dog_result");
const cat_btn = document.gaeElemenById("cat_btn");
const dog_btn = document.gaeElemenById("dog_btn");

cat_btn.addEventlListener("click", getRandomCat);
//dog_btn.addEventlListener("click", getRandomDog);

function getRandomCat() {
	fetch("https://aws.random.cat/meow")
		.then((res) => res.json())
		.then((data) => {
			cat_result.innerHTML = <img src='${data.url}' />;
		});
}
