const marvel_heros = ["thor", "Ironman", "spiderman"] /*Array has been declared */
const dc_heros = ["superman", "flash", "batman"]

marvel_heros.push(dc_heros)/*Help us to push an array into another 
                             array as array allow us to enter any datatype into 
                             array so the output would be array ke andr array*/

console.log(marvel_heros);
console.log(marvel_heros[3][1]);/*Will give us the fouth value of the first
                                  array and the second bracket show us the second 
                                  value of second array.*/

const allHeros = marvel_heros.concat(dc_heros)/*Will give us the the new array which 
                                                is thw combination of the new array 
                                                which include the elments of both the array 
                                                in the form of new array/ */
console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]/*help us to spread the elements in the arrays*/

console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)/* by using flat and we have 
                                                          to give the number into this and if 
                                                          put infinity in it it will be solved till the 
                                                          maximum.*/
console.log(real_another_array);



console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))
console.log(Array.from({name: "hitesh"})) //interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));