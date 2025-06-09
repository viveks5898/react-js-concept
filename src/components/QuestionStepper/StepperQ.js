import React, { useState, useEffect, use } from "react";

const StepperQ = ({ data = [] }) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const question = data[currentIdx];
  const [showMessage, setShowMessage] = useState({ message: "", opt: "" });
  const [answered, setAnswered] = useState(false);           

  const [timer, setTimer] = useState(15)

  const goNext = () => {
    setCurrentIdx(i => i + 1);
                                   
  };


  useEffect(()=>{
    setTimeout(() => {
setTimer((prev)=>{
  return{
    prev 
  }
})
      console.log("first")
    }, 100);
  },[timer])
  const handleQuestionClick = letter => {
    if (answered) return;                                     
    const isCorrect = letter === question.answer;

    setShowMessage({ message: isCorrect ? "correct" : "wrong", opt: letter });

    if (isCorrect) {
      setAnswered(true);                                    
      if (currentIdx < data.length - 1) {
        setTimer(15)
        setTimeout(goNext, 700);                              
      }
    }
  };

  useEffect(() => {
    setShowMessage({ message: "", opt: "" });
    setAnswered(false);
  }, [currentIdx]);

  if (!question) return <p>No questions supplied.</p>;

  return (
    <div className="flex justify-center pt-8">
      <div className="text-center">
<p className="rounded-[50px] bg-black text-white h-[40px] flex items-center justify-center  w-[40px]">      {timer}</p>

        <h3 className="text-2xl mb-8">{question.question}</h3>

        <div className="grid grid-cols-2 w-[800px] gap-8 place-items-center mx-auto">
          {["A", "B", "C", "D"].map(letter => {
            const picked = showMessage.opt === letter;
            const correct = showMessage.message === "correct";
            return (
              <button
                key={letter}
                onClick={() => handleQuestionClick(letter)}
                disabled={answered}                         
                className={`px-5 py-1 rounded-4xl text-xl w-fit text-white
                  ${picked
                    ? correct
                      ? "bg-green-500"
                      : "bg-red-500"
                    : "bg-[#c98b8b]"}
                  ${answered ? "cursor-not-allowed opacity-60" : "hover:bg-green-500"}`}
              >
                {question[letter]}
              </button>
            );
          })}
        </div>

        {showMessage.message && (
          <p
            className={`italic mt-3.5 text-xl ${
              showMessage.message === "correct" ? "text-green-600" : "text-gray-400"
            }`}
          >
            {showMessage.message} answer
          </p>
        )}
      </div>
    </div>
  );
};

export default StepperQ;
