const namaMantan = ["komang", "made", "ketut"];

//namaMantan.forEach(function (item, index, array){
//console.log(item, index, array);
//});

namaMantan.push("dewi");

const namaMantanLama = namaMantan.slice();

namaMantan.pop();

//console.log("Nama Mantan: ", namaMantan);

//console.log("Nama mantan lama: ", namaMantanLama);

//for (let index = 0; index < namaMantan.length; index++) {
   //const element = namaMantan[index];   
   //console.log(element);   
//}

console.log(
    namaMantan
    .filter(function (mantan, ke) {
        return mantan == "made";
    })
    .map(function (mantan, ke) {
        return `${mantan} adalah mantan ke ${ke + 1}`;
    })
);