function kiemtraUSER() {
    let regex = /^[a-z0-9_-]{3,16}$/;
    let chuoiKT = document.getElementById("txtChuoi").value;
    let kq = regex.test(chuoiKT);
    if (kq == true) {
        document.getElementById("kqkt").innerHTML = "Nhap dung";
    } else {
        document.getElementById("kqkt").innerHTML = "Nhap sai";
    }
}

function kiemtraUSER1() {
    let regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    let chuoiKTPassword = document.getElementById("txtChuoiPassword").value;
    let kq1 = regex.test(chuoiKTPassword);
    if (kq1 == true) {
        document.getElementById("kqktPassword").innerHTML = "Nhap dung";
    } else {
        document.getElementById("kqktPassword").innerHTML = "Nhap sai";
    }
}

function kiemtraUSER2() {
    let regex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    let chuoiKTEmail = document.getElementById("txtChuoiEmail").value;
    let kq2 = regex.test(chuoiKTEmail);
    if (kq2 == true) {
        document.getElementById("kqktEmail").innerHTML = "Nhap dung";
    } else {
        document.getElementById("kqktEmail").innerHTML = "Nhap sai";
    }
}