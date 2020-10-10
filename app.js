const correctAnswers = ["A","C","B","C","C"];
const form = document.querySelector(".quiz-form");
const result = document.querySelector('.result');
const user_score = document.querySelector('.score');

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    let score = 0;
    const userAnswers = [form.q1.value,form.q2.value,form.q3.value,form.q4.value,form.q5.value];

    // Checking answers
    userAnswers.forEach((answer,index)=>{
        if(answer===correctAnswers[index]){
            score+=20;
        }
    });
    scrollTo(0,0);
    result.classList.remove("d-none");
    
    let output_val = 0
    const interval_func = setInterval(()=>{
        user_score.textContent=output_val;
        console.log(score)
        console.log(output_val)
        if(output_val===score){
            clearInterval(interval_func);
        }
        else{
            output_val++;
        }
        
    },15)
    // user_score.textContent=score;
    
});