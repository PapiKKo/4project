function execute() {
    //var yoga = document.sampleForm.menu[0];
    //var bgm = document.sampleForm.menu[0];
    var result = document.getElementById("result");
    result.innerHTML = "";
    var none = true;
    const textbox = document.getElementById("input-message");
    const inputValue = textbox.value;
    const url = new URL(inputValue);
    const params = new URLSearchParams(url.search);
	//result.innerHTML += bgm.value + "が選択されています。";
	window.open("https://papikko.github.io/4project/index.htm?"+params+"&surl=./sample/example3_srt.js",'_blank');
	none = false;
}
