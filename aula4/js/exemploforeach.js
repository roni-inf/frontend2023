var times=[];
/*push - insere o elemento no final do vetor*/

times.push("Flamengo");
times.push("Vasco");
times.push("Fluminense");
times.unshift("Bangu");
times.push("Botafogo");

/*unshift - insere o elemento no início do vetor*/


/* remove o primeiro e o último elemento do vetor 
times.pop();
times.shift();

times.splice(1,2);
*/
times.sort();

/*Arrow function */

times.forEach(f=>console.log(f));