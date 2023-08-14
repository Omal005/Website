// Retrieve the stored value from local storage
var storedValueone = localStorage.getItem('fullName');
var storedml = localStorage.getItem('email');
var storegen = localStorage.getItem('gender');
var finaldate = localStorage.getItem('selectedDate');
var selectedValue = localStorage.getItem('selectedValue');
var tpprice=localStorage.getItem('totprice');
var sladult=localStorage.getItem('slapValue');
var slchild=localStorage.getItem('slcpValue');
var foradult=localStorage.getItem('fapValue');
var forchild=localStorage.getItem('fcpValue');


// Update the label with the retrieved value
var labelElement = document.getElementById('myLabel');
labelElement.textContent = storedValueone;

var ml = document.getElementById('ml');
ml.textContent = storedml;

var gen = document.getElementById('gen');
gen.textContent = storegen;

var fd = document.getElementById('monthYearLabel');
fd.textContent=finaldate;

var ts=document.getElementById('finalout');
ts.textContent=selectedValue;

var tp=document.getElementById('tot');
tp.textContent=tpprice;

var one=document.getElementById('sslap');
one.textContent=sladult;

var two=document.getElementById('sslcp');
two.textContent=slchild;

var three=document.getElementById('ffap');
three.textContent=foradult;

var four=document.getElementById('ffcp');
four.textContent=forchild;



const payButton = document.getElementById('cont');
        const successModal = document.getElementById('successModal');
        const closeButton = document.getElementById('closeButton');

        payButton.addEventListener('click', () => {
            successModal.style.display = 'flex';
        });

        closeButton.addEventListener('click', () => {
            successModal.style.display = 'none';
        });
