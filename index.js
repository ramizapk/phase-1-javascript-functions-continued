function saturdayFun(activity="roller-skate"){
    return `This Saturday, I want to ${activity}!`;
}

function mondayWork(activity="go to the office"){
    return `This Monday, I will ${activity}.`;
}

function wrapAdjective(style="*"){
    const innerFunction = function (adjective="special") {
        // 3
        return `You are ${style}${adjective}${style}!`; 
      };
      return innerFunction;
}