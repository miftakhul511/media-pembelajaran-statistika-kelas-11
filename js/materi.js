function showConcept(){

document.getElementById("concept").style.display="block";


document.getElementById("concept")
.scrollIntoView({

behavior:"smooth"

});


}


let titikData=[];



function tambahData(){


let x=document.getElementById("nilaiX").value;

let y=document.getElementById("nilaiY").value;



if(x=="" || y==""){

alert("Masukkan nilai X dan Y");

return;

}



titikData.push({

x:Number(x),

y:Number(y)

});



buatTabel();

gambarGrafik();



}



function buatTabel(){


let table=document.getElementById("dataTable");


table.innerHTML=

`
<tr>
<th>X</th>
<th>Y</th>
</tr>
`;



titikData.forEach(data=>{


table.innerHTML+=

`
<tr>
<td>${data.x}</td>
<td>${data.y}</td>
</tr>
`;


});


}





function gambarGrafik(){


let canvas=document.getElementById("scatterCanvas");

let ctx=canvas.getContext("2d");



ctx.clearRect(
0,
0,
canvas.width,
canvas.height
);



/* sumbu */

ctx.beginPath();

ctx.moveTo(50,400);

ctx.lineTo(550,400);


ctx.moveTo(50,400);

ctx.lineTo(50,50);


ctx.stroke();




/* titik */


titikData.forEach(point=>{


let px=50+(point.x*50);

let py=400-(point.y*4);



ctx.beginPath();

ctx.arc(
px,
py,
8,
0,
Math.PI*2
);


ctx.fill();


});



}




function showScatterConcept(){


document.getElementById(
"scatterConcept"
).style.display="block";



document.getElementById(
"scatterConcept"
).scrollIntoView({

behavior:"smooth"

});


}

function gambarInterpretasi(){



gambarTitik(
"grafikPositif",
[
[1,50],
[2,60],
[3,70],
[4,85],
[5,95]
]
);



gambarTitik(
"grafikNegatif",
[
[1,90],
[2,75],
[3,60],
[4,45],
[5,30]
]
);



gambarTitik(
"grafikAcak",
[
[1,60],
[2,90],
[3,45],
[4,80],
[5,55]
]
);



}





function gambarTitik(id,data){


let canvas=document.getElementById(id);

if(!canvas) return;


let ctx=canvas.getContext("2d");


ctx.clearRect(
0,
0,
canvas.width,
canvas.height
);



ctx.beginPath();

ctx.moveTo(40,250);

ctx.lineTo(400,250);


ctx.moveTo(40,250);

ctx.lineTo(40,30);


ctx.stroke();



data.forEach(p=>{


ctx.beginPath();


ctx.arc(

40+(p[0]*60),

250-(p[1]*2),

7,

0,

Math.PI*2

);


ctx.fill();


});


}






function cekJawaban(grafik){


let jawaban =
document.getElementById(
"jawaban"+grafik
).value;


let hasil =
document.getElementById(
"hasil"+grafik
);



let benar = {

A:"positif",

B:"negatif",

C:"tidak"

};



if(jawaban==benar[grafik]){


hasil.innerHTML=
"✅ Benar! Kamu berhasil membaca pola data.";


hasil.style.color="green";


}

else{


hasil.innerHTML=
"❌ Coba amati kembali arah penyebaran titik.";


hasil.style.color="red";


}


}





window.onload=function(){

gambarInterpretasi();

}

function prediksiNilai(){


let x =
Number(
document.getElementById("jamBelajar").value
);



if(!x){

alert("Masukkan jumlah jam belajar");

return;

}



// contoh hasil regresi dari data
// y = 47 + 8.5x

let y =
47 + (8.5*x);



document.getElementById(
"hasilPrediksi"
)
.innerHTML =

`
Perkiraan nilai:
<b>${y.toFixed(2)}</b>
`;

}

function interpretasiR(){


let r =
Number(
document.getElementById("nilaiR").value
);



let hasil =
document.getElementById("hasilR");



if(r>1 || r<-1){

hasil.innerHTML=
"Nilai r harus antara -1 sampai 1";

return;

}



if(r>=0.8){

hasil.innerHTML=
"✅ Hubungan positif sangat kuat";

}


else if(r>0.5){

hasil.innerHTML=
"✅ Hubungan positif kuat";

}


else if(r>0){

hasil.innerHTML=
"↗ Hubungan positif lemah";

}


else if(r==0){

hasil.innerHTML=
"⚪ Tidak ada hubungan linear";

}


else if(r>-0.5){

hasil.innerHTML=
"↘ Hubungan negatif lemah";

}


else{

hasil.innerHTML=
"🔻 Hubungan negatif kuat";

}


}

function gambarKorelasi(){


gambarTitikKorelasi(
"grafikKuat",
[
[1,40],
[2,60],
[3,80],
[4,100],
[5,120]
]
);



gambarTitikKorelasi(
"grafikLemah",
[
[1,80],
[2,50],
[3,90],
[4,60],
[5,75]
]
);



}




function gambarTitikKorelasi(id,data){


let canvas=document.getElementById(id);


if(!canvas) return;



let ctx=canvas.getContext("2d");



ctx.clearRect(
0,
0,
canvas.width,
canvas.height
);



// sumbu X Y


ctx.beginPath();


ctx.moveTo(40,220);

ctx.lineTo(370,220);



ctx.moveTo(40,220);

ctx.lineTo(40,30);


ctx.strokeStyle="#64748b";

ctx.stroke();





// titik data


ctx.fillStyle="#2563eb";


data.forEach(point=>{


let x =
40 + point[0]*55;


let y =
220 - point[1];



ctx.beginPath();


ctx.arc(
x,
y,
7,
0,
Math.PI*2
);


ctx.fill();


});



}

let labData=[];

let kasus="";

let nilaiA=0;

let nilaiB=0;

let nilaiR=0;

function pilihKasus(jenis){


kasus=jenis;


let teks="";


if(jenis=="pendidikan"){

teks=
"Analisis hubungan jam belajar dengan nilai ujian";

}


if(jenis=="ekonomi"){

teks=
"Analisis hubungan suhu dengan penjualan es krim";

}


if(jenis=="bisnis"){

teks=
"Analisis hubungan biaya iklan dengan penjualan";

}


document.getElementById(
"deskripsiKasus"
).innerHTML=teks;


}

function tambahLabData(){


let x=
Number(
document.getElementById("inputX").value
);


let y=
Number(
document.getElementById("inputY").value
);



if(!x || !y){

alert("Isi data X dan Y");

return;

}



labData.push({
x:x,
y:y
});


buatTabelLab();

gambarLab();

hitungRegresiLab();

hitungKorelasiLab();

buatKesimpulanLab();
}

function buatTabelLab(){


let table =
document.getElementById("labTable");



table.innerHTML =

`
<tr>
<th>X</th>
<th>Y</th>
</tr>
`;



labData.forEach(data=>{


table.innerHTML +=

`
<tr>

<td>${data.x}</td>

<td>${data.y}</td>

</tr>

`;

});


}

function hitungRegresiLab(){


let n = labData.length;



// minimal membutuhkan 2 data

if(n < 2){

document.getElementById("hasilRegresi").innerHTML =

"Masukkan minimal 2 data";


return;

}



// nilai total

let sumX = 0;

let sumY = 0;

let sumXY = 0;

let sumX2 = 0;



labData.forEach(data=>{


sumX += data.x;

sumY += data.y;

sumXY += data.x * data.y;

sumX2 += data.x * data.x;


});




// menghitung nilai b

let b =

(

(n * sumXY) -

(sumX * sumY)

)

/

(

(n * sumX2) -

(sumX * sumX)

);





// menghitung nilai a

let meanX = sumX / n;

let meanY = sumY / n;



let a = meanY - (b * meanX);
nilaiA=a;

nilaiB=b;




// tampilkan hasil


document.getElementById("hasilRegresi").innerHTML =


`
Persamaan Regresi:

<br><br>

<b>
y = ${a.toFixed(2)} + ${b.toFixed(2)}x
</b>

`;



document.getElementById("detailRegresi").innerHTML =


`

<p>
Jumlah data (n) = ${n}
</p>


<p>
ΣX = ${sumX}
</p>


<p>
ΣY = ${sumY}
</p>


<p>
ΣXY = ${sumXY}
</p>


<p>
ΣX² = ${sumX2}
</p>


<p>
Nilai a = ${a.toFixed(2)}
</p>


<p>
Nilai b = ${b.toFixed(2)}
</p>

`;



}

function hitungKorelasiLab(){


let n = labData.length;



if(n < 2){

document.getElementById(
"hasilKorelasi"
).innerHTML =
"Masukkan minimal 2 data";


return;

}



let sumX=0;

let sumY=0;

let sumXY=0;

let sumX2=0;

let sumY2=0;



labData.forEach(data=>{


sumX += data.x;

sumY += data.y;


sumXY += data.x * data.y;


sumX2 += data.x * data.x;


sumY2 += data.y * data.y;


});





let pembilang =

(n*sumXY)-(sumX*sumY);




let penyebut =

Math.sqrt(

(

(n*sumX2)-(sumX*sumX)

)

*

(

(n*sumY2)-(sumY*sumY)

)

);



let r = pembilang / penyebut;
nilaiR=r;



document.getElementById(
"hasilKorelasi"
).innerHTML =


`

Koefisien Korelasi:

<br><br>

<b>
r = ${r.toFixed(2)}
</b>

<br><br>

${interpretasiKorelasi(r)}

`;



document.getElementById(
"detailKorelasi"
).innerHTML =


`

<p>
ΣXY = ${sumXY}
</p>


<p>
ΣX² = ${sumX2}
</p>


<p>
ΣY² = ${sumY2}
</p>

`;



}

function interpretasiKorelasi(r){


if(r >= 0.8){

return "Hubungan positif sangat kuat";

}


else if(r >= 0.5){

return "Hubungan positif kuat";

}


else if(r > 0){

return "Hubungan positif lemah";

}


else if(r == 0){

return "Tidak terdapat hubungan linear";

}


else if(r > -0.5){

return "Hubungan negatif lemah";

}


else if(r > -0.8){

return "Hubungan negatif kuat";

}


else{

return "Hubungan negatif sangat kuat";

}


}

function gambarLab(){


let canvas =
document.getElementById("labCanvas");


if(!canvas){

return;

}


let ctx =
canvas.getContext("2d");



ctx.clearRect(
0,
0,
canvas.width,
canvas.height
);



// =================
// SUMBU CARTESIUS
// =================


ctx.beginPath();


ctx.moveTo(50,350);

ctx.lineTo(550,350);


ctx.moveTo(50,350);

ctx.lineTo(50,50);


ctx.strokeStyle="#64748b";

ctx.stroke();




// =================
// LABEL
// =================


ctx.font="14px Arial";


ctx.fillText(
"X",
540,
370
);


ctx.fillText(
"Y",
30,
60
);





// =================
// TITIK DATA
// =================


ctx.fillStyle="#2563eb";



labData.forEach(point=>{


let posisiX =
50 + (point.x * 50);



let posisiY =
350 - (point.y * 3);



ctx.beginPath();


ctx.arc(

posisiX,

posisiY,

7,

0,

Math.PI*2

);


ctx.fill();



});

// =================
// GARIS REGRESI
// =================


gambarGarisRegresi(ctx);



}

function gambarGarisRegresi(ctx){


if(labData.length < 2){

return;

}


// hitung ulang a dan b

let n = labData.length;


let sumX=0;
let sumY=0;
let sumXY=0;
let sumX2=0;



labData.forEach(data=>{


sumX += data.x;

sumY += data.y;

sumXY += data.x * data.y;

sumX2 += data.x * data.x;


});



let b =

(
(n*sumXY)-(sumX*sumY)

)

/

(
(n*sumX2)-(sumX*sumX)

);



let a =

(sumY/n)-(b*(sumX/n));





// batas garis


let xAwal = labData[0].x;

let xAkhir = labData[labData.length-1].x;



let yAwal = a + (b*xAwal);

let yAkhir = a + (b*xAkhir);





// konversi ke canvas


let canvasX1 =
50 + (xAwal*50);


let canvasY1 =
350 - (yAwal*3);



let canvasX2 =
50 + (xAkhir*50);


let canvasY2 =
350 - (yAkhir*3);






// gambar garis


ctx.beginPath();


ctx.moveTo(
canvasX1,
canvasY1
);



ctx.lineTo(
canvasX2,
canvasY2
);



ctx.strokeStyle="red";

ctx.lineWidth=3;


ctx.stroke();





// tampilkan persamaan


ctx.fillStyle="black";

ctx.font="16px Arial";


ctx.fillText(

`y = ${a.toFixed(2)} + ${b.toFixed(2)}x`,

70,

80

);



}

function buatKesimpulanLab(){


if(labData.length < 2){

return;

}



let arah="";


if(nilaiR >= 0.8){

arah="positif sangat kuat";

}

else if(nilaiR >= 0.5){

arah="positif kuat";

}

else if(nilaiR > 0){

arah="positif lemah";

}

else if(nilaiR == 0){

arah="tidak memiliki hubungan linear";

}

else if(nilaiR > -0.5){

arah="negatif lemah";

}

else if(nilaiR > -0.8){

arah="negatif kuat";

}

else{

arah="negatif sangat kuat";

}





let variabel="variabel X dan Y";


if(kasus=="pendidikan"){

variabel=
"Jam Belajar dan Nilai Ujian";

}


if(kasus=="ekonomi"){

variabel=
"Suhu dan Penjualan Es Krim";

}


if(kasus=="bisnis"){

variabel=
"Biaya Iklan dan Penjualan";

}




document.getElementById(
"kesimpulan"
).innerHTML =


`

<p>
Berdasarkan hasil analisis:
</p>


<p>

Terdapat hubungan 
<b>${arah}</b>

antara ${variabel}.

</p>


<p>

Persamaan regresi:

<br>

<b>
y = ${nilaiA.toFixed(2)} + ${nilaiB.toFixed(2)}x
</b>

</p>


<p>

Nilai korelasi:

<b>
r = ${nilaiR.toFixed(2)}
</b>

</p>


<p>

Artinya, perubahan pada variabel X
cenderung diikuti perubahan pada variabel Y.

</p>

`;



}

let skorEvaluasi=0;

let nomorSoal=0;



function jawab(benar){


nomorSoal++;



if(benar){


skorEvaluasi += 100/3;


document.getElementById(
"feedback"+nomorSoal
).innerHTML =

"✅ Jawaban benar";


}


else{


document.getElementById(
"feedback"+nomorSoal
).innerHTML =

"❌ Jawaban kurang tepat";


}



document.getElementById(
"nilaiAkhir"
).innerHTML =

"Skor: " + 
Math.round(skorEvaluasi);



if(nomorSoal==3){


tampilkanHasil();

}


}




function tampilkanHasil(){


let pesan="";



if(skorEvaluasi>=80){

pesan=
"🏆 Sangat baik! Kamu sudah mampu menganalisis hubungan antar variabel.";

}


else if(skorEvaluasi>=60){

pesan=
"👍 Bagus! Coba perkuat lagi interpretasi diagram dan korelasi.";

}


else{

pesan=
"📚 Yuk pelajari kembali konsep data bivariat, regresi, dan korelasi.";

}



document.getElementById(
"pesanAkhir"
).innerHTML=pesan;


}

let skorGrafik=0;



function gambarEvaluasiGrafik(){


gambarEvaluasi(
"evalGrafik1",
[
[1,40],
[2,70],
[3,100],
[4,130]
]
);



gambarEvaluasi(
"evalGrafik2",
[
[1,130],
[2,100],
[3,70],
[4,40]
]
);



gambarEvaluasi(
"evalGrafik3",
[
[1,80],
[2,120],
[3,60],
[4,100]
]
);



}




function gambarEvaluasi(id,data){


let canvas=document.getElementById(id);


if(!canvas)
return;


let ctx=canvas.getContext("2d");



ctx.beginPath();


ctx.moveTo(40,250);

ctx.lineTo(400,250);


ctx.moveTo(40,250);

ctx.lineTo(40,40);


ctx.stroke();




data.forEach(point=>{


ctx.beginPath();


ctx.arc(

40+(point[0]*70),

250-point[1],

8,

0,

Math.PI*2

);


ctx.fill();



});



}







function cekGrafik(no,jawaban){



let benar={

1:"positif",

2:"negatif",

3:"tidak"

};



let hasil=
document.getElementById(
"hasilGrafik"+no
);



if(jawaban==benar[no]){


hasil.innerHTML=
"✅ Benar! Kamu mampu membaca pola data.";


skorGrafik += 100/3;


}

else{


hasil.innerHTML=
"❌ Belum tepat. Amati arah penyebaran titik.";


}



document.getElementById(
"skorGrafik"
).innerHTML=

"Skor: "+Math.round(skorGrafik);



}
let skorKasus=0;



function jawabKasus(jawaban){



let hasil =
document.getElementById(
"hasilKasus"
);



if(jawaban=="ya"){


hasil.innerHTML=

`
✅ Tepat!

Karena nilai korelasi 0.97 menunjukkan
hubungan positif sangat kuat.

Peningkatan biaya iklan cenderung diikuti
peningkatan penjualan.

`;



skorKasus+=100;


}

else{


hasil.innerHTML=

`
❌ Kurang tepat.

Data menunjukkan hubungan positif kuat,
sehingga iklan memiliki peluang meningkatkan penjualan.

`;

}


document.getElementById(
"skorKasus"
).innerHTML=

"Skor: "+skorKasus;


}





function nilaiKesimpulan(){


let jawaban =
document.getElementById(
"jawabanSiswa"
).value.toLowerCase();



let feedback =
document.getElementById(
"feedbackKesimpulan"
);



if(

jawaban.includes("positif")

&&

jawaban.includes("meningkat")

){


feedback.innerHTML=

`
✅ Analisis sangat baik.

Kamu menggunakan informasi korelasi
dan regresi untuk membuat keputusan.

`;



skorKasus+=50;


}

else{


feedback.innerHTML=

`
👍 Kesimpulan sudah dibuat.

Coba hubungkan jawabanmu dengan nilai r
dan persamaan regresi.

`;

}



document.getElementById(
"skorKasus"
).innerHTML=

"Skor: "+skorKasus;


}

function simpanRefleksi(){


let r1 =
document.getElementById("refleksi1").value;


let r2 =
document.getElementById("refleksi2").value;


let r3 =
document.getElementById("refleksi3").value;



if(
r1=="" ||
r2=="" ||
r3==""
){

alert(
"Lengkapi semua refleksi terlebih dahulu"
);

return;

}



document.getElementById(
"hasilRefleksi"
).innerHTML =

`
✅ Refleksi berhasil disimpan.

Terima kasih telah menyelesaikan
Statistika Explorer.
`;



}

// Kembali ke halaman proyek sebelumnya; tautan menjadi cadangan saat dibuka langsung.
function kembaliSebelumnya(event) {
    if (document.referrer && window.history.length > 1) {
        try {
            const previous = new URL(document.referrer);
            const project = new URL('../', window.location.href);
            if (previous.origin === project.origin && previous.pathname.startsWith(project.pathname)) {
                event.preventDefault();
                window.history.back();
                return false;
            }
        } catch (_) { /* Gunakan href pada tombol jika referrer tidak valid. */ }
    }
    return true;
}
