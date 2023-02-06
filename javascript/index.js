// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
// getInstruction("mashedPotatoes", 0, (step1) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
// }, (error) => console.log(error));

// getInstruction("mashedPotatoes", 1, (step2) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
// }, (error) => console.log(error));

// getInstruction("mashedPotatoes", 2, (step3) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
// }, (error) => console.log(error));

// getInstruction("mashedPotatoes", 3, (step4) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
// }, (error) => console.log(error));

// getInstruction("mashedPotatoes", 4, (step5) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
//   document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
// }, (error) => console.log(error));



// Iteration 1 - using callbacks


getInstruction("mashedPotatoes", 0, (step1) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
  getInstruction("mashedPotatoes", 1, (step2) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
    getInstruction("mashedPotatoes", 2, (step3) => {
      document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
      getInstruction("mashedPotatoes", 3, (step4) => {
        document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
        getInstruction("mashedPotatoes", 4, (step5) => {
          document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
          
          
            // let li = document.createElement("li");
            document.querySelector("#mashedPotatoes").innerHTML += `<li> Mashed potatoes are ready!<li>`;
            document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
            // document.querySelector("#mashedPotatoes").appendChild(li);
            
           
          
          });
        });
      });
    });
  });





// Iteration 2 - using promises

obtainInstruction('steak', 0)
  .then( (step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`
      return obtainInstruction('steak', 1)
  })

  .then( (step1) => {
    document.querySelector("#steak").innerHTML += `<li>${step1}</li>`
    return obtainInstruction('steak', 2)
  })
  .then( (step3) => {
    document.querySelector("#steak").innerHTML += `<li>${step3}</li>`
    return obtainInstruction('steak', 3)
  })
  .then( (step4) => {
    document.querySelector("#steak").innerHTML += `<li>${step4}</li>`
    return obtainInstruction('steak', 4)
  })
  .then( (step5) => {
    document.querySelector("#steak").innerHTML += `<li>${step5}</li>`
    return obtainInstruction('steak', 5)
  })
  .then( (step6) => {
    document.querySelector("#steak").innerHTML += `<li>${step6}</li>`
    return obtainInstruction('steak', 6)
  })
   .then( (step7) => {
    document.querySelector("#steak").innerHTML += `<li>${step7}</li>`
    return obtainInstruction('steak', 7)
  })
  .then( (step8) => {
   document.querySelector("#steak").innerHTML += `<li>${step8}</li>`

        // let li = document.createElement("li");
    document.querySelector("#steak").innerHTML += `<li> Stake is ready! </li>`;
    document.querySelector("#steakImg").removeAttribute("hidden");
    // document.querySelector("#steak").appendChild(li);

    // return obtainInstruction('steak', 8)
    
  })  
   

// Iteration 3 using async/await
  async function makeBroccoli() {
try {
  let dir1 = await obtainInstruction('broccoli', 0) 
  document.querySelector("#broccoli").innerHTML += `<li> ${dir1} </li>`
  let dir2 = await obtainInstruction('broccoli', 1) 
  document.querySelector("#broccoli").innerHTML += `<li> ${dir2} </li>`
  let dir3 = await obtainInstruction('broccoli', 2) 
  document.querySelector("#broccoli").innerHTML += `<li> ${dir3} </li>`
  let dir4 = await obtainInstruction('broccoli', 3) 
  document.querySelector("#broccoli").innerHTML += `<li> ${dir4} </li>`
  let dir5 = await obtainInstruction('broccoli', 4) 
  document.querySelector("#broccoli").innerHTML += `<li> ${dir5} </li>`
  let dir6 = await obtainInstruction('broccoli', 5) 
  document.querySelector("#broccoli").innerHTML += `<li> ${dir6} </li>`
  let dir7 = await obtainInstruction('broccoli', 6) 
    document.querySelector("#broccoli").innerHTML += `<li> ${dir7} </li>`
  // let li = document.createElement("li");
   document.querySelector("#broccoli").innerHTML += `<li>Broccoli is ready!<li>`;
   document.querySelector("#broccoliImg").removeAttribute("hidden");

 
  } catch(err) {
  console.log("ERROR:", err);
} 
}
   makeBroccoli();




//  let  mash = getInstruction()
// let broc = makeBroccoli()
// let bistk = obtainInstruction ()


let bir1 = obtainInstruction('brusselsSprouts', 0);
let bir2 = obtainInstruction('brusselsSprouts', 1);
let bir3 = obtainInstruction('brusselsSprouts', 2);
let bir4 = obtainInstruction('brusselsSprouts', 3);
let bir5 = obtainInstruction('brusselsSprouts', 4);
let bir6 = obtainInstruction('brusselsSprouts', 5);
let bir7 = obtainInstruction('brusselsSprouts', 6);

Promise.all([bir1, bir2, bir3, bir4, bir5, bir6, bir7])
  .then((res) => {
    res.forEach(instruction => {
      document.querySelector("#brusselsSprouts").innerHTML += `<li> ${instruction} </li>`;
    });
    document.querySelector("#brusselsSproutsImg").removeAttribute("hidden");
    document.querySelector("#brusselsSprouts").innerHTML += `<li>Brussels sprouts are ready!<li>`;
  })
  .catch(error => {
    console.error("ERROR:", error);
  });
