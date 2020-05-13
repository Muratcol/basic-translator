


function Ui() {

    this.outputImage = document.getElementById("outputImage");
    this.outputLanguage = document.getElementById("outputLanguage");
    this.outputWord = document.getElementById("outputWord");

    this.languageList = document.getElementById("language")
}

Ui.prototype.changeUi = function() {
    this.outputImage.src = `images/${this.languageList.value}.png`
    this.outputLanguage.innerHTML = this.languageList.options[this.languageList.selectedIndex].textContent
}


Ui.prototype.displayContent = function(word) {
    this.outputWord.textContent = word;
}