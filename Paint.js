let getQuantityStar = document.getElementById('qttStar');
let getBtn = document.getElementById('btncheck');

getBtn.onclick = () => {
    let QuanttStar = parseInt(getQuantityStar.value);
    
    function numberOneTriangle(Qtt) {
        let square = '';
        for (let i = 1; i <= Qtt; i++) {
            for (let j = 1; j <= i;j++) {
                square += '* ';
            }
            square += '\n';
        }
        return square
    }
    numberOneTriangle(QuanttStar); 
    
    document.getElementById('resultStar').innerHTML = `${numberOneTriangle(QuanttStar)}`;
}
