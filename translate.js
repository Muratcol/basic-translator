

function Translate(word, language) {
    this.apikey = "trnsl.1.1.20200513T152508Z.2403404445b4644a.012cf64a427de2eea565032a1103ede0c829755c"
    this.word = word;
    this.language = language;

    this.xhr = new XMLHttpRequest();
}

// Arrow functions are not proper for prototypes
Translate.prototype.translateWord = function(callback) {
    const endpoint = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${this.apikey}&text=${this.word}&lang=${this.language}`

    this.xhr.open("GET", endpoint, true);
    
    this.xhr.onload = () => {
        if(this.xhr.status === 200) {
           const json = JSON.parse(this.xhr.responseText);
           const text = json.text[0]
           callback(null, text)
        }
        else{
            callback("Bir hata oluştu",null)
        }        
    }
    this.xhr.send();
}

Translate.prototype.changeParameters = function(newWord, newLanguage) {
    this.word = newWord;
    this.language = newLanguage;
}