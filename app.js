$(document).ready(() => {

      const $foodCounterContainer = $('<div></div>')
      const $mainSection = $('.second-section')
      const $menuContainer = $('#menu')   
 
			let foods = [
				{
					name: 'pizza',
					imgUrl:
						'https://hips.hearstapps.com/hmg-prod/images/classic-cheese-pizza-recipe-2-64429a0cb408b.jpg?crop=0.6666666666666667xw:1xh;center,top&resize=1200:*',
				},
				{
					name: 'falafel',
					imgUrl:
						'https://www.elal.com/magazine/wp-content/uploads/2019/01/Falafel2_806.jpg',
				},
				{
					name: 'bolani',
					imgUrl:
						'https://upload.wikimedia.org/wikipedia/commons/f/f9/Bolani.jpg',
				},
				{
					name: 'burger',
					imgUrl:
						'https://www.eatthis.com/wp-content/uploads/sites/4/2022/04/burger-fries.jpg?quality=82&strip=1&w=640',
				},
				{
					name: 'crepe',
					imgUrl:
						'https://www.homemadeinterest.com/wp-content/uploads/2022/01/Homemade-Crepes-with-Nutella_2022_IG-2.jpg',
				},
				{
					name: 'ice-cream',
					imgUrl:
						'https://www.foodnetwork.com/content/dam/images/food/fullset/2022/02/9/0/KC3004_katie-lee-biegel-edible-cereal-treat-bowls-for-ice-cream-sundae-2_s4x3.jpg',
				},
				{
					name: 'hot-dog',
					imgUrl:
						'https://www.foodandwine.com/thmb/Au_zD0Qmb5sD5NWLOuktc5MPg1E=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/chorizo-and-kimchi-dogs-FT-RECIPE0819-74abcc92e9154e729c7e98e248daa3c7.jpg',
				},
				{
					name: 'meatball-sandwich',
					imgUrl:
						'https://img.delicious.com.au/XUko_aOz/w759-h506-cfill/del/2017/11/meatball-sandwiches-55197-2.jpg',
				},
			]
			let foodState = foods.reduce((prev, curr) => {
				console.log(curr.name)
				prev[curr.name] = 0
				console.log(prev)
				return prev
			}, {})

			$('#start').append($foodCounterContainer)
			$mainSection.after($menuContainer)

			foods.forEach((food) => {
				const foodCounter = getFoodCounterElement(food.name)
				$foodCounterContainer.append(foodCounter)

                const card = getCard(food)
                
                $menuContainer.append(card)

                card.on('click', function (event) {
									event.preventDefault()
									console.log($(this).text())
									foodState[food.name] += 1
                                    $(`#${food.name}-food-counter`).text(
                                    `${food.name}: ${foodState[food.name]}`)
								})
            

				
			})

			function getFoodCounterElement(food) {
				return $('<div></div>')
					.text(`${food}: ${foodState[food]}`)
					.attr('id', `${food}-food-counter`)
			}


			function getCard(food) {
				return $(`<div class="col">
            <div class="card" >
                <img src=${food.imgUrl} class="card-img-top" alt=${food.name}>
                <div id="${food}-card-body" class="card-body">
                    <h5 class="card-title">${food.name}</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                        content.</p>
                    <button id="food-btn" class="btn btn-primary">Add</button>
                </div>
            </div>
            </div>`)
						
			}

								
						

	
})
