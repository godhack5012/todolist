var cccount = 0, cscount =0;

function cabt() {
    const doli = document.getElementById('doli').value;
    const cl = document.createElement('ul');
    cl.className = 'licss';

    const cc = document.createElement('input');
    cc.type = 'checkbox';
    cc.id = 'cc_'+cccount;
    cc.className = 'ccc';

    const cs = document.createElement('span');
    cs.innerText = doli;
    cs.id = 'cs_'+cscount;
    cs.className = 'listspan';

    if(doli.trim() === ""){
        alert('입력 해주세요.');
        return false;
    }
    else{
        cl.appendChild(cc);
        cl.appendChild(cs);
        ulid.appendChild(cl);
        cccount++;
        cscount++;
    }
}

function cdbt() {
    var ul = document.getElementById('ulid');
    var chkbox = document.querySelectorAll('#ulid .ccc');
    for(var i in chkbox) {
        if(chkbox[i].nodeType == 1 && chkbox[i].checked == true) {
            ul.removeChild(chkbox[i].parentNode);
        }
    }
}

function cdabt() {
    var ul = document.getElementById('ulid');
    while(ul.hasChildNodes() ) {
        ul.removeChild(ul.firstChild);
    }
}