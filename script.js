function recursiv(result){
    let div = document.createElement("div");
    document.body.append(div);
    div.innerHTML = result;
    if (result > 500)return result
    else return recursiv(result+2);
}
recursiv(2);