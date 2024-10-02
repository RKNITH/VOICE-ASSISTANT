

const btn = document.querySelector('#mic-button');

// *********************
const statesData = {
    "अंडमान और निकोबार द्वीपसमूह": {
        "capital": "पोर्ट ब्लेयर",
        "chiefMinister": "केंद्र शासित प्रदेश (कोई मुख्यमंत्री नहीं)",
        "area": "8,249 km²",
        "population": "3.8 लाख (2021)",
        "surroundingRegions": "हिंद महासागर"
    },
    "अरुणाचल प्रदेश": {
        "capital": "ईटानगर",
        "chiefMinister": "पेमा खांडू",
        "area": "83,743 km²",
        "population": "13.8 लाख (2021)",
        "surroundingRegions": "असम, नागालैंड, भूटान, तिब्बत, म्यांमार"
    },
    "असम": {
        "capital": "दिसपुर",
        "chiefMinister": "हिमंता बिस्वा सरमा",
        "area": "78,438 km²",
        "population": "3.8 करोड़ (2021)",
        "surroundingRegions": "अरुणाचल प्रदेश, नागालैंड, मणिपुर, मिज़ोरम, त्रिपुरा, मेघालय, पश्चिम बंगाल, भूटान, बांग्लादेश"
    },
    "आंध्र प्रदेश": {
        "capital": "अमरावती",
        "chiefMinister": "वाईएस जगन मोहन रेड्डी",
        "area": "162,968 km²",
        "population": "5.3 करोड़ (2021)",
        "surroundingRegions": "तेलंगाना, तमिलनाडु, कर्नाटक, ओडिशा"
    },
    "उत्तर प्रदेश": {
        "capital": "लखनऊ",
        "chiefMinister": "योगी आदित्यनाथ",
        "area": "243,286 km²",
        "population": "20.42 करोड़ (2021)",
        "surroundingRegions": "उत्तराखंड, हरियाणा, दिल्ली, राजस्थान, मध्य प्रदेश, छत्तीसगढ़, झारखंड, बिहार, नेपाल"
    },
    "उत्तराखंड": {
        "capital": "देहरादून (शीतकालीन), गैरसैंण (ग्रीष्मकालीन)",
        "chiefMinister": "पुष्कर सिंह धामी",
        "area": "53,483 km²",
        "population": "1.1 करोड़ (2021)",
        "surroundingRegions": "उत्तर प्रदेश, हिमाचल प्रदेश, हरियाणा, नेपाल"
    },
    "ओडिशा": {
        "capital": "भुवनेश्वर",
        "chiefMinister": "नवीन पटनायक",
        "area": "155,707 km²",
        "population": "4.6 करोड़ (2021)",
        "surroundingRegions": "पश्चिम बंगाल, झारखंड, छत्तीसगढ़, आंध्र प्रदेश"
    },
    "कर्नाटक": {
        "capital": "बेंगलुरु",
        "chiefMinister": "सिद्धारमैया",
        "area": "191,791 km²",
        "population": "6.5 करोड़ (2021)",
        "surroundingRegions": "महाराष्ट्र, गोवा, तेलंगाना, आंध्र प्रदेश, तमिलनाडु, केरल"
    },
    "केरल": {
        "capital": "तिरुवनंतपुरम",
        "chiefMinister": "पिनाराई विजयन",
        "area": "38,863 km²",
        "population": "3.6 करोड़ (2021)",
        "surroundingRegions": "कर्नाटक, तमिलनाडु, लक्षद्वीप समुद्र"
    },
    "चंडीगढ़": {
        "capital": "चंडीगढ़",
        "chiefMinister": "केंद्र शासित प्रदेश (कोई मुख्यमंत्री नहीं)",
        "area": "114 km²",
        "population": "10.5 लाख (2021)",
        "surroundingRegions": "पंजाब, हरियाणा"
    },
    "छत्तीसगढ़": {
        "capital": "रायपुर",
        "chiefMinister": "भूपेश बघेल",
        "area": "135,194 km²",
        "population": "3.2 करोड़ (2021)",
        "surroundingRegions": "मध्य प्रदेश, महाराष्ट्र, तेलंगाना, आंध्र प्रदेश, ओडिशा, झारखंड, उत्तर प्रदेश"
    },
    "जम्मू और कश्मीर": {
        "capital": "श्रीनगर (ग्रीष्मकालीन), जम्मू (शीतकालीन)",
        "chiefMinister": "केंद्र शासित प्रदेश (कोई मुख्यमंत्री नहीं)",
        "area": "55,673 km²",
        "population": "1.3 करोड़ (2021)",
        "surroundingRegions": "लद्दाख, हिमाचल प्रदेश, पंजाब, पाकिस्तान, चीन"
    },
    "झारखंड": {
        "capital": "रांची",
        "chiefMinister": "हेमंत सोरेन",
        "area": "79,714 km²",
        "population": "3.7 करोड़ (2021)",
        "surroundingRegions": "बिहार, उत्तर प्रदेश, छत्तीसगढ़, ओडिशा, पश्चिम बंगाल"
    },
    "तमिलनाडु": {
        "capital": "चेन्नई",
        "chiefMinister": "एम.के. स्टालिन",
        "area": "130,058 km²",
        "population": "7.7 करोड़ (2021)",
        "surroundingRegions": "कर्नाटक, आंध्र प्रदेश, केरल, पुडुचेरी, बंगाल की खाड़ी"
    },
    "तेलंगाना": {
        "capital": "हैदराबाद",
        "chiefMinister": "के चंद्रशेखर राव",
        "area": "112,077 km²",
        "population": "3.9 करोड़ (2021)",
        "surroundingRegions": "महाराष्ट्र, छत्तीसगढ़, आंध्र प्रदेश, कर्नाटक"
    },
    "दिल्ली": {
        "capital": "नई दिल्ली",
        "chiefMinister": "अरविंद केजरीवाल",
        "area": "1,484 km²",
        "population": "3 करोड़ (2021)",
        "surroundingRegions": "हरियाणा, उत्तर प्रदेश"
    },
    "पुडुचेरी": {
        "capital": "पुडुचेरी",
        "chiefMinister": "एन. रंगासामी",
        "area": "479 km²",
        "population": "14.7 लाख (2021)",
        "surroundingRegions": "तमिलनाडु, बंगाल की खाड़ी"
    },
    "पश्चिम बंगाल": {
        "capital": "कोलकाता",
        "chiefMinister": "ममता बनर्जी",
        "area": "88,752 km²",
        "population": "9.7 करोड़ (2021)",
        "surroundingRegions": "बिहार, झारखंड, ओडिशा, असम, सिक्किम, बांग्लादेश, भूटान, नेपाल"
    },
    "पंजाब": {
        "capital": "चंडीगढ़",
        "chiefMinister": "भगवंत मान",
        "area": "50,362 km²",
        "population": "3 करोड़ (2021)",
        "surroundingRegions": "हरियाणा, हिमाचल प्रदेश, जम्मू और कश्मीर, राजस्थान, पाकिस्तान"
    },
    "बिहार": {
        "capital": "पटना",
        "chiefMinister": "नीतीश कुमार",
        "area": "94,163 km²",
        "population": "12.3 करोड़ (2021)",
        "surroundingRegions": "उत्तर प्रदेश, झारखंड, पश्चिम बंगाल, नेपाल"
    },
    "मध्य प्रदेश": {
        "capital": "भोपाल",
        "chiefMinister": "शिवराज सिंह चौहान",
        "area": "308,252 km²",
        "population": "8.5 करोड़ (2021)",
        "surroundingRegions": "उत्तर प्रदेश, छत्तीसगढ़, महाराष्ट्र, गुजरात, राजस्थान"
    },
    "मणिपुर": {
        "capital": "इम्फाल",
        "chiefMinister": "एन. बीरेन सिंह",
        "area": "22,327 km²",
        "population": "28.6 लाख (2021)",
        "surroundingRegions": "नागालैंड, मिज़ोरम, असम, म्यांमार"
    },
    "मिज़ोरम": {
        "capital": "आइजोल",
        "chiefMinister": "ज़ोरामथांगा",
        "area": "21,081 km²",
        "population": "12.4 लाख (2021)",
        "surroundingRegions": "असम, त्रिपुरा, मणिपुर, बांग्लादेश, म्यांमार"
    },
    "मेघालय": {
        "capital": "शिलांग",
        "chiefMinister": "कोनराड संगमा",
        "area": "22,429 km²",
        "population": "36.9 लाख (2021)",
        "surroundingRegions": "असम, बांग्लादेश"
    },
    "लक्षद्वीप": {
        "capital": "कवरत्ती",
        "chiefMinister": "केंद्र शासित प्रदेश (कोई मुख्यमंत्री नहीं)",
        "area": "32 km²",
        "population": "68,000 (2021)",
        "surroundingRegions": "अरब सागर"
    },
    "लद्दाख": {
        "capital": "लेह",
        "chiefMinister": "केंद्र शासित प्रदेश (कोई मुख्यमंत्री नहीं)",
        "area": "59,146 km²",
        "population": "2.9 लाख (2021)",
        "surroundingRegions": "जम्मू और कश्मीर, हिमाचल प्रदेश, तिब्बत, पाकिस्तान, चीन"
    },
    "महाराष्ट्र": {
        "capital": "मुंबई",
        "chiefMinister": "एकनाथ शिंदे",
        "area": "307,713 km²",
        "population": "11.42 करोड़ (2021)",
        "surroundingRegions": "गुजरात, मध्य प्रदेश, छत्तीसगढ़, तेलंगाना, कर्नाटक, गोवा"
    },
    "मणिपुर": {
        "capital": "इम्फाल",
        "chiefMinister": "एन. बीरेन सिंह",
        "area": "22,327 km²",
        "population": "28.6 लाख (2021)",
        "surroundingRegions": "नागालैंड, मिज़ोरम, असम, म्यांमार"
    },
    "मिज़ोरम": {
        "capital": "आइजोल",
        "chiefMinister": "ज़ोरामथांगा",
        "area": "21,081 km²",
        "population": "12.4 लाख (2021)",
        "surroundingRegions": "असम, त्रिपुरा, मणिपुर, बांग्लादेश, म्यांमार"
    },
    "हरियाणा": {
        "capital": "चंडीगढ़",
        "chiefMinister": "मनोहर लाल खट्टर",
        "area": "44,212 km²",
        "population": "2.9 करोड़ (2021)",
        "surroundingRegions": "पंजाब, हिमाचल प्रदेश, उत्तर प्रदेश, राजस्थान, दिल्ली"
    },
    "हिमाचल प्रदेश": {
        "capital": "शिमला",
        "chiefMinister": "सुखविंदर सिंह सुक्खू",
        "area": "55,673 km²",
        "population": "73.9 लाख (2021)",
        "surroundingRegions": "जम्मू और कश्मीर, पंजाब, हरियाणा, उत्तराखंड, तिब्बत"
    },
    "नागालैंड": {
        "capital": "कोहिमा",
        "chiefMinister": "नेफ्यू रियो",
        "area": "16,579 km²",
        "population": "22.8 लाख (2021)",
        "surroundingRegions": "असम, मणिपुर, अरुणाचल प्रदेश, म्यांमार"
    },
    "त्रिपुरा": {
        "capital": "अगरतला",
        "chiefMinister": "माणिक साहा",
        "area": "10,491 km²",
        "population": "41.9 लाख (2021)",
        "surroundingRegions": "मिज़ोरम, असम, बांग्लादेश"
    },
    "गोवा": {
        "capital": "पणजी",
        "chiefMinister": "प्रमोद सावंत",
        "area": "3,702 km²",
        "population": "15.8 लाख (2021)",
        "surroundingRegions": "महाराष्ट्र, कर्नाटक, अरब सागर"
    },
    "सिक्किम": {
        "capital": "गंगटोक",
        "chiefMinister": "प्रेम सिंह तमांग",
        "area": "7,096 km²",
        "population": "6.8 लाख (2021)",
        "surroundingRegions": "पश्चिम बंगाल, नेपाल, भूटान, तिब्बत"
    },
    "दादरा और नगर हवेली और दमन और दीव": {
        "capital": "दमन",
        "chiefMinister": "केंद्र शासित प्रदेश (कोई मुख्यमंत्री नहीं)",
        "area": "603 km²",
        "population": "5.8 लाख (2021)",
        "surroundingRegions": "गुजरात, महाराष्ट्र, अरब सागर"
    }

}




// *******************************

// Function to speak in Hindi
const speakFun = (input) => {
    let speakInput = new SpeechSynthesisUtterance(input);
    speakInput.rate = 1;
    speakInput.pitch = 1;
    speakInput.volume = 1;
    speakInput.lang = 'hi-IN';  // Hindi Language
    window.speechSynthesis.speak(speakInput);
};

// Handle voice commands
// Handle voice commands
const handleCommands = (command) => {
    const stateName = Object.keys(statesData).find(state => command.includes(state));

    if (stateName) {
        const stateInfo = statesData[stateName];
        const response = `${stateName} की राजधानी ${stateInfo.capital} है, वर्तमान मुख्यमंत्री ${stateInfo.chiefMinister} हैं, कुल क्षेत्रफल ${stateInfo.area}, कुल जनसंख्या ${stateInfo.population} है, और यह राज्य ${stateInfo.surroundingRegions} से घिरा हुआ है।`;
        speakFun(response);
    } else {
        speakFun('मुझे खेद है, मैं इस राज्य के बारे में जानकारी नहीं दे सकता। कृपया दूसरा राज्य पूछें।');
    }
};


// Initialize speech recognition
const startRecognition = () => {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = 'hi-IN';  // Hindi Language for Recognition

    recognition.onstart = () => {
        console.log('Voice recognition started. Speak now!');
    };

    recognition.onspeechend = () => {
        console.log('Voice recognition ended.');
        recognition.stop();
    };

    recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        console.log(`You said: ${transcript}`);
        handleCommands(transcript);
        btn.classList.remove('btn-box')
        btn.innerHTML = `<i class="fa-solid fa-microphone-lines-slash"></i> `
    };

    recognition.start();
};

// Button click event listener
btn.addEventListener('click', () => {
    startRecognition();
    btn.classList.add('btn-box')
    btn.innerHTML = `<i class="fa-solid fa-microphone-lines"></i> `
});
