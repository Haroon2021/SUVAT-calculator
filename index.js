const form = document.querySelector('form');


form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Line below takes the form data from the HTML page and we have to make sure that 
    // the name tags are filled in the HTML elements otherwise we will not get proper key pair values
    // when the data is transformed
    const SUVATDATA = new FormData(form);
    // The linke below transforms the data into data wiht Key value pairs
    const SUVATDATATRANSFORMED = Object.fromEntries(SUVATDATA);
    const u = parseFloat(SUVATDATATRANSFORMED['U']);
    const v = parseFloat(SUVATDATATRANSFORMED['V']);
    const a = parseFloat(SUVATDATATRANSFORMED['A']);
    const s = parseFloat(SUVATDATATRANSFORMED['S']);
    const t = parseFloat(SUVATDATATRANSFORMED['T']);
    const V = u + (a*t);
    console.log(V);
    
    document.querySelector(".Voutput").innerText = `V = U + a*t \n V = ${u} + ${a} * ${t} \n V = ${u} + ${a*t}  \n V = ${V} ms-1`

    
    
    
})