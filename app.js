var passwordValidate = () => {
    var length = document.querySelector("#password").value.length;
    var first = document.querySelector("#password").value;
    //Start with Capital
    if(first.charCodeAt(0)>=65 && first.charCodeAt(0)<=90){
        document.querySelector(".upprcaseValidate").classList.remove('before');
        document.querySelector(".upprcaseValidate").classList.add('after');
    }else{
        document.querySelector(".upprcaseValidate").classList.remove('after');
        document.querySelector(".upprcaseValidate").classList.add('before');
    }

    //length validation
    if (length >= 8 && length <=12) {
        document.querySelector(".eightChar").classList.remove('before');
        document.querySelector(".eightChar").classList.add('after');
    } else {
        document.querySelector(".eightChar").classList.remove('after');
        document.querySelector(".eightChar").classList.add('before');
    }

    //symbol validation
    var count=0;
    var numcount = 0;
    for(var i=0;i<length;i++){
        if(first.charCodeAt(i)>=32 && first.charCodeAt(i)<=126){
            if(first.charCodeAt(i)<=47){
                count++;
            }else if(first.charCodeAt(i)>=58 && first.charCodeAt(i)<=64){
                count++;
            }else if(first.charCodeAt(i)>=91 && first.charCodeAt(i)<=96){
                count++;
            }else if(first.charCodeAt(i)>=123){
                count++;
            }
        }
    }
    if(count==1){
        document.querySelector(".symbolValidate").classList.remove('before');
        document.querySelector(".symbolValidate").classList.add('after');
    }else{
        document.querySelector(".symbolValidate").classList.remove('after');
        document.querySelector(".symbolValidate").classList.add('before');
    }

    //minimum number validation
    for(var i=0;i<length;i++){
        if(first.charCodeAt(i)>=48 && first.charCodeAt(i)<=57){
            numcount++;
        }
    }
    if(numcount>0){
        document.querySelector(".minNumberValidate").classList.remove('before');
        document.querySelector(".minNumberValidate").classList.add('after');
    }else{
        document.querySelector(".minNumberValidate").classList.remove('after');
        document.querySelector(".minNumberValidate").classList.add('before');
    }
    //success
    if(length>=8 && length <=12 && count==1 && numcount>0 && first.charCodeAt(0)>=65 && first.charCodeAt(0)<=90){
        document.querySelector(".success").classList.remove('after');
        document.querySelector(".success").classList.add('before');
    }else{
        document.querySelector(".success").classList.remove('before');
        document.querySelector(".success").classList.add('after');
    }
}