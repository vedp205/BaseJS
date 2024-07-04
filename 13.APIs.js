const url = "https://cat-fact.herokuapp.com/facts";


const getfacts=async()=>{
    let promise =await fetch(url);
    console.log(promise);
}