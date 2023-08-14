document.addEventListener("DOMContentLoaded", function() {
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    const monthYear = document.getElementById("monthYear");
    const datesContainer = document.querySelector(".dates");
    
    let currentDate = new Date();
    
    function renderCalendar() {
      const year = currentDate.getFullYear();
      const month = currentDate.getMonth();
      const firstDay = new Date(year, month, 1).getDay();
      const lastDate = new Date(year, month + 1, 0).getDate();

      const monthYearString = new Intl.DateTimeFormat("en-US", {
        month: "long",
        year: "numeric"
      }).format(currentDate);
      
      monthYearLabel.textContent = monthYearString;
      monthYear.textContent=monthYearString;
      
      datesContainer.innerHTML = "";
      
      for (let i = 0; i < firstDay; i++) {
        const emptyDate = document.createElement("div");
        datesContainer.appendChild(emptyDate);
      }
      
      for (let i = 1; i <= lastDate; i++) {
        const date = document.createElement("div");
        date.textContent = i;
        date.addEventListener("click", selectDate);
        
        if (currentDate.getDate() === i) {
          date.classList.add("selected");
        }
        
        datesContainer.appendChild(date);
      }
    }
    
    function selectDate(event) {
      const selectedDate = event.target;
      const selectedDates = document.querySelectorAll(".selected");
      
      selectedDates.forEach(date => {
        date.classList.remove("selected");
      });
      
      selectedDate.classList.add("selected");
      
      const selectedDateLabel = document.getElementById("selectedDateLabel");
      selectedDateLabel.textContent = selectedDate.textContent;
    }
    
    prevBtn.addEventListener("click", function() {
      currentDate.setMonth(currentDate.getMonth() - 1);
      renderCalendar();
    });
    
    nextBtn.addEventListener("click", function() {
      currentDate.setMonth(currentDate.getMonth() + 1);
      renderCalendar();
    });
    
    renderCalendar();
  });


  
          



//guests selection
 const plus=document.querySelector(".plus");
const minus=document.querySelector(".minus");
const num=document.querySelector(".num");
const sla =document.getElementById("sl-a");
const slc=document.getElementById("sl-c");
const fa=document.getElementById("f-a");
const fc=document.getElementById("f-c");
const infant=document.getElementById("infant");
const slap=document.querySelector(".slap");
const slcp=document.querySelector(".slcp");
const fap=document.querySelector(".fap");
const fcp=document.querySelector(".fcp");
const totprice=document.getElementById("tottktprice");


let a=1;
let lap=10;
let lcp=5;
let ap=4;
let cp=2;

//adding event listner
 plus.addEventListener("click",()=>{
    a++;
    lap +=10;
    console.log(a);
    num.innerText=a;
    sla.innerText=a;
    slap.innerText="$"+lap;
    calculateTotalPrice();

})

minus.addEventListener("click",()=>{
    if(a>0){
    a--;
    lap-=10;
    console.log(a);
    num.innerText=a;
    sla.innerText=a;
    slap.innerText="$"+lap;
    calculateTotalPrice();
    }
})

//guests selection
 const plus2=document.querySelector(".plusa");
const minus2=document.querySelector(".minusa");
const num2=document.querySelector(".numa");


let aa=1;

//adding event listner
 plus2.addEventListener("click",()=>{
    aa++;
    lcp +=5;
    console.log(aa);
    num2.innerText=aa;
    slc.innerText=aa;
    slcp.innerHTML="$"+lcp;
    calculateTotalPrice();
})

minus2.addEventListener("click",()=>{
    if(aa>0){
    aa--;
    lcp -=5;
    console.log(aa);
    num2.innerText=aa;
    slc.innerText=aa;
    slcp.innerHTML="$"+lcp;
    calculateTotalPrice();
    }
})

//guests selection
const plus3=document.querySelector(".plusb");
const minus3=document.querySelector(".minusb");
const num3=document.querySelector(".numb");


let aaa=1;

//adding event listner
 plus3.addEventListener("click",()=>{
    aaa++;
    ap +=4;
    console.log(aaa);
    num3.innerText=aaa;
    fa.innerText=aaa;
    fap.innerHTML="$"+ap;
    calculateTotalPrice();
})

minus3.addEventListener("click",()=>{
    if(aaa>0){
    aaa--;
    ap -=4;
    console.log(aaa);
    num3.innerText=aaa;
    fa.innerText=aaa;
    fap.innerHTML="$"+fa;
    calculateTotalPrice();
    }
})

//guests selection
const plus4=document.querySelector(".plusc");
const minus4=document.querySelector(".minusc");
const num4=document.querySelector(".numc");


let aaaa=1;

//adding event listner
 plus4.addEventListener("click",()=>{
    aaaa++;
    cp+=2;
    console.log(aaaa);
    num4.innerText=aaaa;
    fc.innerText=aaaa;
    fcp.innerHTML="$"+cp;
    calculateTotalPrice();
})

minus4.addEventListener("click",()=>{
    if(aaaa>0){
    aaaa--;
    cp-=2;
    console.log(aaaa);
    num4.innerText=aaaa;
    fc.innerText=aaaa;
    fcp.innerHTML="$"+cp;
    calculateTotalPrice();
    }
})

//guests selection
const plus5=document.querySelector(".plusd");
const minus5=document.querySelector(".minusd");
const num5=document.querySelector(".numd");


let aaaaa=1;

//adding event listner
 plus5.addEventListener("click",()=>{
    aaaaa++;
    console.log(aaaaa);
    num5.innerText=aaaaa;
    infant.innerText=aaaaa;
})

minus5.addEventListener("click",()=>{
    if(aaaaa>0){
    aaaaa--;
    console.log(aaaaa);
    num5.innerText=aaaaa;
    infant.innerText=aaaaa;
    }
})

function calculateTotalPrice() {
  const slapValue = parseFloat(slap.textContent.substring(1)); // Remove "$" and convert to number
  const slcpValue = parseFloat(slcp.textContent.substring(1));
  const fapValue = parseFloat(fap.textContent.substring(1));
  const fcpValue = parseFloat(fcp.textContent.substring(1));
  
  const total = slapValue + slcpValue + fapValue + fcpValue;
  totprice.textContent = "$" + total.toFixed(2); // Update total ticket price label

  
}

calculateTotalPrice();



const timeout = document.getElementById("timeout");

const timeSlots = [
  "07:00 AM - 08.00 AM",
  "08:00 AM - 09.00 AM",
  "09:00 AM - 10.00 AM",
  "10:00 AM - 11.00 AM",
  "11:00 AM - 12.00 PM",
  "12:00 PM - 01.00 PM",
  "01:00 PM - 02.00 PM",
  "02:00 PM - 03.00 PM",
  "03:00 PM - 04.00 PM",
  "04.00 PM - 05.00 PM",
  "05.00 PM - 06.00 PM"
];

const timeSlotsDropdown = document.getElementById("timeSlots");

timeSlots.forEach(slot => {
  const option = document.createElement("option");
  option.text = slot;
  timeSlotsDropdown.add(option);
});

timeSlotsDropdown.addEventListener("change", function() {
  const selectedValue = timeSlotsDropdown.value;
  timeout.textContent = timeSlotsDropdown.value;

  localStorage.setItem("selectedValue", selectedValue); // Store the selected value in local storage
});


const cont = document.getElementById("cont");

cont.addEventListener("click", function(event) {
    event.preventDefault();
  
     // Get the values from the table
     const numValue = document.querySelector(".num").innerText;
     const slapValue = document.querySelector(".slap").innerText;
     const slcpValue = document.querySelector(".slcp").innerText;
     const fapValue = document.querySelector(".fap").innerText;
     const fcpValue = document.querySelector(".fcp").innerText;
     const infantValue = document.getElementById("infant").innerText;
     const timeoutValue = document.getElementById("timeout").textContent;
 
     // Create an object to store the values
    localStorage.setItem("numValue", numValue);
    localStorage.setItem("slapValue", slapValue);
    localStorage.setItem("slcpValue", slcpValue);
    localStorage.setItem("fapValue", fapValue);
    localStorage.setItem("fcpValue", fcpValue);
    localStorage.setItem("infantValue", infantValue);
    localStorage.setItem("timeoutValue", timeoutValue);

     localStorage.setItem('totprice', totprice.textContent);
 
     // Redirect to Details page
     window.location.href = "Details.html";

  
   
    
  
});



  

  







