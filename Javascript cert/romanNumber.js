function convertToRoman(num) {

let roman = "";
let sum = num;
let table = [{M:1000}, {CM : 900}, {D : 500}, {CD : 400}, {C : 100},
 {XC : 90},  {L : 50} , {XL : 40}, {X : 10} , {IX : 9}, {V : 5},
 {IV : 4}, {I : 1}]

 for(let i = 0; i < table.length; i++){
    if(Object.values(table[i]) <= sum) {

        sum -= Object.values(table[i]);
        roman += Object.keys(table[i]);

        while(sum >= Object.values(table[i])){
            sum -= Object.values(table[i]);
            roman += Object.keys(table[i]);
        }

    }
 }


 return roman;
}

convertToRoman(3999);