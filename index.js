function calculateSentenceLength(sentence) {
    let length = 0; 
    
    for (let i = 0; i < sentence.length; i++) {
        length++; 

        
        if (sentence[i] === '.') {
            break; 
        }
    }

    return length; 
}



function countWordsInSentence(sentence) {
    let wordCount = 0; 
    let inWord = false; 

    for (let i = 0; i < sentence.length; i++) {
        if (sentence[i] === ' ') {
            inWord = false; 
        } else if (sentence[i] === '.') {
            break; 
        } else if (!inWord) {
            wordCount++; 
            inWord = true; 
        }
    }
    return wordCount; 
}



function countVowelsInSentence(sentence) {
    let vowelCount = 0; 
    const vowels = "aeiouAEIOU"; 
    

    for (let i = 0; i < sentence.length; i++) {
        if (sentence[i] === '.') {
            break; 
        }

        if (vowels.includes(sentence[i])) { 
            vowelCount++; 
        }
    }

    return vowelCount; 
}


