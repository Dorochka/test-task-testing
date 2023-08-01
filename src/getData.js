import data from './assets/questions'

export function getData(){
    data.forEach(question => {
        question.checked = false
    });
    return data;
}