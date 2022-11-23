const form = document.querySelector('form');


form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Line below takes the form data from the HTML page and we have to make sure that 
    // the name tags are filled in the HTML elements otherwise we will not get proper key pair values
    // when the data is transformed
    const SUVATDATA = new FormData(form);
    // The linke below transforms the data into data wiht Key value pairs
    const SUVATDATATRANSFORMED = Object.fromEntries(SUVATDATA);
    

    const u = parseFloat(SUVATDATATRANSFORMED['U'])
    const v = parseFloat(SUVATDATATRANSFORMED['V']);
    const a = parseFloat(SUVATDATATRANSFORMED['A']);
    const s = parseFloat(SUVATDATATRANSFORMED['S']);
    const t = parseFloat(SUVATDATATRANSFORMED['T']);
    
    console.log("V")
    console.log(v) 
    console.log(isNaN(v))
    console.log(isNaN(u))
    console.log(isNaN(s))
    console.log(SUVATDATATRANSFORMED['V'])
    console.log(parseFloat(SUVATDATATRANSFORMED['V']))


    if (isNaN(v) && isNaN(s) && u != "" && a != "" && t != "" ) {
        document.querySelector(".Voutput").innerText = `v = u + a*t \n v = ${u} + ${a} * ${t} \n v = ${u} + ${a*t}  \n v = ${u+a*t} ms-1`
        document.querySelector(".Soutput").innerText = `s = u*t + 0.5*a*t^2 \n s = ${u} * ${t} + 0.5 * ${a} * ${t} ^ 2 \n s = ${u*t} + 0.5 * ${a}*${t*t}  \n s = ${u*t} + 0.5 * ${a*t*t}  \n s = ${u*t} + ${0.5*a*t*t}  \n s = ${u*t + 0.5*a*t*t} meters `
        document.querySelector(".Uoutput").innerText = `u = ${u} ms-1`
        document.querySelector(".Aoutput").innerText = `a = ${a} ms-2`
        document.querySelector(".Toutput").innerText = `t = ${t} seconds`

    } else if (isNaN(u) && isNaN(s) && v != "" && a != "" && t != "") {
        document.querySelector(".Voutput").innerText = `v = ${v} ms-1`
        document.querySelector(".Soutput").innerText = `s = v*t - 0.5*a*t^2  \n s = ${v}*${t} - 0.5*${a}*${t}^2 \n s = ${v*t} - 0.5*${a}*${t^2} \n s = ${v*t} - 0.5*${a*(t^2)} \n s = ${v*t} - ${0.5*a*(t^2)} \n s = ${(v*t) - (0.5*a*(t^2))} meters`
        document.querySelector(".Uoutput").innerText = `v = u + a*t \n ${v} = u + ${a}*${t} \n ${v} = u + ${a*t} \n u = ${v} - ${a*t} \n u = ${v-a*t}   \n `
        document.querySelector(".Aoutput").innerText = `a = ${a} ms-2`
        document.querySelector(".Toutput").innerText = `t = ${t} seconds`

    } else if (isNaN(a) && isNaN(t) && s != "" && u != "" && v != "") {
        document.querySelector(".Voutput").innerText = `v = ${v} ms-1`
        document.querySelector(".Soutput").innerText = `s = ${s} meters`
        document.querySelector(".Uoutput").innerText = `u = ${u} ms-1`
        document.querySelector(".Aoutput").innerText = `v^2 = u^2 + 2 * a * s \n ${v}^2 = ${u}^2 + 2 * a * ${s} \n ${v*v} = ${u*u} + ${2*s}*a \n  ${(v*v - u*u)} = ${2*s} * a \n a= ${(v*v - u*u)/(2*s)} ms-2  \n`
        document.querySelector(".Toutput").innerText = `s=t*(u+v)/2 \n ${s}=t*(${u}+${v})/2  \n ${s}=t*(${u+v})/2 \n ${s*2}=t*(${u+v}) \n t = ${(s*2)/(u+v)} seconds`
    
    } else if (isNaN(v) && isNaN(t) && s != "" && u != "" && a != "") {

        // adapt for 2 solutions
        let v1 = Math.sqrt((u*u)+ (2*a*s));
        let v2 = -1*Math.sqrt((u*u)+ (2*a*s));
        document.querySelector(".Voutput").innerText = `v^2 = u^2 + 2*a*s \n  v^2 = ${u}^2 + 2*${a}*${s} \n v^2 = ${u*u} + ${2*a*s} \n v^2 = ${(u*u)+ (2*a*s)} \n v1 = ${Math.sqrt((u*u)+ (2*a*s))} ms-1 \n v2 = ${-1*Math.sqrt((u*u)+ (2*a*s))} ms-1 `
        document.querySelector(".Soutput").innerText = `s = ${s} meters`
        document.querySelector(".Uoutput").innerText = `u = ${u} ms-1`
        document.querySelector(".Aoutput").innerText = `a = ${a} ms-2`
        document.querySelector(".Toutput").innerText = `Find v (as above) then use this along with v = u + a*t \n using v1 we get: \n v = u + a*t \n ${v1} = ${u} + ${a} * t \n ${(v1 - u)} = t * ${a} \n t1 = ${(v1 - u)/(a)} seconds \n \n using v2 we get: \n v = u + a*t \n ${v2} = ${u} + ${a} * t \n ${v2-u} = ${a} * t \n t2 = ${(v2-u)/(a)} seconds`
    
    } else if (isNaN(v) && isNaN(a) && s != "" && u != "" && t != "") {
        document.querySelector(".Voutput").innerText = `s=t*(u+v)/2 \n ${s}=${t}*(${u}+v)/2 \n ${(2*s)}=${t}*(${u}+v) \n ${(2*s)/(t)}=${u}+v \n v = ${((2*s)/(t)) - (u)} ms-1`
        document.querySelector(".Soutput").innerText = `s = ${s} meters`
        document.querySelector(".Uoutput").innerText = `u = ${u} ms-1`
        document.querySelector(".Aoutput").innerText = `s = u*t + 0.5*a*t^2 \n ${s} = ${u}*${t} + 0.5*a*${t}^2 \n ${s} = ${u*t} + 0.5*a*${t*t} \n ${s - (u*t)} = 0.5*a*${t*t} \n ${2*(s-(u*t))} = a*${t*t} \n a = ${(2*(s-(u*t)))/(t*t)} ms-2  `
        document.querySelector(".Toutput").innerText = `t = ${t}`
    
    } else if (isNaN(u) && isNaN(t) && s != "" && v != "" && a != "") {
        let u1 = Math.sqrt(v*v)/(a*s*2);
        let u2 = -1*Math.sqrt(v*v)/(a*s*2) ;
        document.querySelector(".Voutput").innerText = `v = ${v} ms-1 `
        document.querySelector(".Soutput").innerText = `s = ${s} meters`
        document.querySelector(".Uoutput").innerText = `v^2 = u^2 + 2* a * s \n ${v}^2 = u^2 + 2* ${a} * ${s} \n ${v*v} = u^2 + ${a*s*2}  \n  u^2 = ${(v*v)/(a*s*2)}    \n u1 = ${u1} ms-1 or u2 = ${u2} ms-1`
        document.querySelector(".Aoutput").innerText = `a = ${a} ms-1 `
        document.querySelector(".Toutput").innerText = `Take the values of u above and calculate t using s = (u + v) * t ) / 2 \n using u1 we get: ${s} = (${u1} + ${v}) * t / 2 \n ${2*s} = (${(u1)+v} ) * t  \n  t1 = ${((2*s)/((u1+v)))} seconds \n now using u2 we get: s = (u + v) * t ) / 2 \n ${s} = (${u2} + ${v}) * t / 2 \n ${2*s} = (${u2 + v} ) * t \n ${2*s} = (${u2 + v} ) * t \n t = ${(2*s)/ (u2 + v)} seconds`
    
    } else if (isNaN(u) && isNaN(a) && s != "" && v != "" && t != "") {
        let u1 = Math.sqrt(v*v)/(a*s*2);
        let u2 = -1*Math.sqrt(v*v)/(a*s*2) ;
        let u = ((2*s)/(t))-v
        document.querySelector(".Voutput").innerText = `v = ${v} ms-1 `
        document.querySelector(".Soutput").innerText = `s = ${s} meters`
        document.querySelector(".Uoutput").innerText = `s=t*(u+v)/2 \n ${s}=${t}*(u+${v})/2 \n ${2*s}=${t}*(u+${v}) \n ${(2*s)/(t)}= u+${v} \n u = ${((2*s)/(t))-v}`
        document.querySelector(".Aoutput").innerText = `use the value of u from before (u = ${u}) along with the equation  \n v = u + a * t \n to get: \n ${v} = ${u} + a * ${t} \n ${v - u} = a * ${t} \n a = ${(v - u)/t} ms-2`
        document.querySelector(".Toutput").innerText = `t = ${t}`
    
    } else if (isNaN(u) && isNaN(v) && s != "" && a != "" && t != "") {    
        let u = (s - (0.5*a*t*t))/(t)
        document.querySelector(".Voutput").innerText = `Find u first which is (u=${u}) \n and use v = u + a * t \n v = ${u} + ${a} * ${t} \n v = ${u} + ${a * t}  \n v = ${(a*t)+u} ms-1 \n  `
        document.querySelector(".Soutput").innerText = `s = ${s} meters`
        document.querySelector(".Uoutput").innerText = `s = u * t + (0.5) * a * t^2 \n ${s} = u * ${t} + (0.5) * ${a} * ${t}^2 \n ${s} = u * ${t} + (0.5) * ${a} * ${t*t} \n ${s} = u * ${t} + ${0.5*a} * ${t*t} \n ${s} = u * ${t} + ${0.5*a*t*t} \n ${s - (0.5*a*t*t)} = u * ${t} \n u = ${(s - (0.5*a*t*t))/(t)}  `
        document.querySelector(".Aoutput").innerText = `a = ${a} ms-2`
        document.querySelector(".Toutput").innerText = `t = ${t}`
    
    } else if (isNaN(s) && isNaN(t) && u != "" && a != "" && v != "") {    
        document.querySelector(".Voutput").innerText = `v = ${v} ms-1 `
        document.querySelector(".Soutput").innerText = `v^2 = u^2 + 2 * a * s \n ${v}^2 = ${u}^2 + 2 * ${a} * s \n ${v*v} = ${u*u} + ${2*a} * s \n ${(v*v)-(u*u)} + ${2*a} * s \n s = ${((v*v)-(u*u))/(2*a)} meters \n`
        document.querySelector(".Uoutput").innerText = `u = ${u} ms-1 `
        document.querySelector(".Aoutput").innerText = `a = ${a} ms-2`
        document.querySelector(".Toutput").innerText = `v = u + a * t \n ${v} = ${u} + ${a} * t \n  ${v - u} =  ${a} * t \n t = ${((v - u)/(a))} seconds \n `
    
    } else if (isNaN(s) && isNaN(a) && u != "" && t != "" && v != "") {    
        document.querySelector(".Voutput").innerText = `v = ${v} ms-1 `
        document.querySelector(".Soutput").innerText = `s = (u + v) * t / 2 \n s = (${u} + ${v}) * ${t} / 2 \n s = ${u + v}  * ${t} / 2 \n s = ${(u + v)*t} / 2 \n s = ${((u + v)*t)/(2)} meters`
        document.querySelector(".Uoutput").innerText = `u = ${u} ms-1 `
        document.querySelector(".Aoutput").innerText = `v = u + a * t \n ${v} = ${u} + a * ${t} \n ${v-u} = a * ${t} \n a = ${(v-u)/(t)} ms-2 \n`
        document.querySelector(".Toutput").innerText = `t = ${t}`
    
    } else if (isNaN(v) && isNaN(s) && u != "" && a != "" && t != "" ) {
        document.querySelector(".Voutput").innerText = `v = u + a*t \n v = ${u} + ${a} * ${t} \n v = ${u} + ${a*t}  \n v = ${u+a*t} ms-1`
        document.querySelector(".Soutput").innerText = `s = u*t + 0.5*a*t^2 \n s = ${u} * ${t} + 0.5 * ${a} * ${t} ^ 2 \n s = ${u*t} + 0.5 * ${a}*${t*t}  \n s = ${u*t} + 0.5 * ${a*t*t}  \n s = ${u*t} + ${0.5*a*t*t}  \n s = ${u*t + 0.5*a*t*t} meters `
        document.querySelector(".Uoutput").innerText = `u = ${u} ms-1`
        document.querySelector(".Aoutput").innerText = `a = ${a} ms-2`
        document.querySelector(".Toutput").innerText = `t = ${t} seconds`

    } else if (isNaN(u) && isNaN(s) && v != "" && a != "" && t != "") {
        document.querySelector(".Voutput").innerText = `v = ${v} ms-1`
        document.querySelector(".Soutput").innerText = `s = v*t - 0.5*a*t^2  \n s = ${v}*${t} - 0.5*${a}*${t}^2 \n s = ${v*t} - 0.5*${a}*${t^2} \n s = ${v*t} - 0.5*${a*(t^2)} \n s = ${v*t} - ${0.5*a*(t^2)} \n s = ${(v*t) - (0.5*a*(t^2))} meters`
        document.querySelector(".Uoutput").innerText = `v = u + a*t \n ${v} = u + ${a}*${t} \n ${v} = u + ${a*t} \n u = ${v} - ${a*t} \n u = ${v-a*t}   \n `
        document.querySelector(".Aoutput").innerText = `a = ${a} ms-2`
        document.querySelector(".Toutput").innerText = `t = ${t} seconds`

    } else {
        document.querySelector(".errorhanger").innerText = "Please select only 3 variables"
    } 
    

    


    
    
    
})