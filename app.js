

// let fullName  = `davlat`

// let ismerried = true;
// let birthYear = 2009;

// let res = ` ${fullName} ${ismerried ? "2 boshli" : "buydoq"} hozir ${2025 - birthYear} yoshda`

// console.log(res)

// -------------------------------------------------------------------------



// let str = `O'zbekiston buyuk davlat !`;


// for(let i = 0; i < str.length; i++){
//    if(str [i] == " "){
      //  continue
//    }
//    console.log(` ${i} : ${str[i]}`)
// }

// let a = 65

// for (let i = 97; i <= 122; i++) {
//    a++
//    console.log(`${String.fromCharCode(i)} : ${String.fromCharCode(i).codePointAt()}`)
// }

// console.log('==========')

// for (let i = 65; i <= 90; i++) {
//    a++
//    console.log(`${String.fromCharCode(i)} : ${String.fromCharCode(i).codePointAt()}`)
// }


// -------------------------------------------------------------------------


// let str = `hello ozbekiston`

// for(let i in )

// for(let v of str){
//    console.log(v)
// }

// -------------------------------------------------------------------------



// let str = `ozbekiston buyuk davlat`

// console.log(str.slice(0,10).toUpperCase())
// console.log(str.slice(11,16).toUpperCase())
// console.log(str.slice(17,23).toUpperCase())


// -------------------------------------------------------------------------


// let str = `ozbekiston buyuk davlat`

// console.log(str.slice(0,10).toUpperCase())
// console.log(str.slice(11,16).toUpperCase())
// console.log(str.slice(17,23).toUpperCase())

// -------------------------------------------------------------------------


// let ism= `muhammadsolih`

// for(let i = 0; i > ism.length; i++) {
//    console.log(ism[i].charAt())
// }


// let str = 'Javascript is the best programming language. Java is not'



// -------------------------------------------------------------------------

// let fullName = `muhammadsolih`;
// let birthYear = 2009;
// let isMerried = true;

// console.log(`${isMerried ? `ikki boshli` : `bir boshli`} ${fullName} hozir  ${ 2025 - birthYear} yoshda`)



// -------------------------------------------------------------------------


// let str = `ozbekiston buyuk davlat`

 // console.log(str.length)  //----> uzunligini kurish;

// console.log(str[0])
// console.log(str[1])
// console.log(str[2])
// console.log(str[3])
// console.log(str[4])
// console.log(str[5])
// console.log(str[6])
// console.log(str[7])
// console.log(str[8])
// console.log(str[9])
// console.log(str[10])
// console.log(str[11])
// console.log(str[12])
// console.log(str[13])
// console.log(str[14])
// console.log(str[15])
// console.log(str[16])
// console.log(str[17])
// console.log(str[18])
// console.log(str[19])
// console.log(str[20])
// console.log(str[21])
// console.log(str[22])

// -------------------------------------------------------------------------


// let str = `o'zbekiston buyuk davlat`

// for(let i = 0; i < str.length; i++){
//    if(str == ''){
//       continue
//    }
//    console.log(`${i + 1} : ${str[i].toUpperCase()}`)
// }



// -------------------------------------------------------------------------

// let doch = `ozbekiston buyuk davlat buladi`

// console.log(doch [doch.length - 1])  //! ---> oxiridan bitta harif olish



// console.log('a'.codePointAt())   //!--- > tagidagi raqamni kuradi
//console.log(String.fromCharCode(65))  //! ---> sonni orqasidagi raqamni aytadi


// -------------------------------------------------------------------------

// let a = 65
// let son = 0

// for (let i = 97 ; i <= 122 ; i++){
//    son++
//    a++
//    console.log(`${son} : ${String.fromCharCode(i)} --> ${String.fromCharCode(a - 1)}`)
// }


// -------------------------------------------------------------------------


let ali =  `salom ozbekiston`

// for (i in ali ){
//    console.log(ali[i])
// }

// for (i of ali){
//    console.log([i])
// }


// -------------------------------------------------------------------------

// let natija =`ali  va boshqa bolalar bilan yuribdi`

// console.log(natija.slice(0 , -10))  //! ---> bu kesib olish negativ qiymat qabul qiladi


// -------------------------------------------------------------------------

//  let l = `bolalar bilan yuribdi`

// console.log(l.substring(0 , 10))  //! ---> bu ham kesib olish bu negatibv qiymat qabul qilmaydi


// -------------------------------------------------------------------------

// let davlat = `ozbekiston buyuk davlat`
// let suz = davlat

// let oz = suz
// let buy = suz
// let dav = davlat

// console.log(` ${oz.slice(0, 10)} \n ${buy.slice(11, 17)} \n ${dav.slice(17, 23)}`);


// ------------------------------------------------------------------------------------------------------------------------------


// let davlat = `O'zbEkiston BuYuk davlaT`

// console.log(davlat.toLowerCase()) //!  ---> hammasini kichik qilib beradi


// ------------------------------------------------------------------------------------------------------------------------------


// let davlat = `O'zbEkiston BuYuk davlaT`

// console.log(davlat.toUpperCase()) //!  ---> hammasini katta  qilib beradi


// ------------------------------------------------------------------------------------------------------------------------------
 
let davlat = `O'zbEkiston BuYuk davlaT`
davlat = davlat.toLowerCase()

let natija = "";

for (let i = 0; i < davlat.length; i++){
   if (i === 0 || davlat[i - 1] === " "){
      natija += davlat[i].toUpperCase()
   }
   else{
      natija += davlat[i]
   }
}
console.log(natija)


// function davlatlar (davlat) {
//    console.log(davlat.toLowerCase())

//    if(davlat == " "){
//       console.log(davlat[0].toUppercase())
//    }
//    return davlat
// }

// davlatlar(`o'zbEkiston buYuk davlaT`)

// console.log(davlat)
