$(".fileForm").submit((e) => {
    e.preventDefault();
    let text = e.target[1].value;
    // let fileName = e.target[2].value;
    const filePath = './readableFiles/autogenerated.txt';
    // console.log(e);
    
    if(text && filePath) {
        if((e.target[7].checked && e.target[8].checked) || (!e.target[7].checked && !e.target[8].checked)) {
            // If both or neither file type is selected - error out
            $("#modalContent")[0].textContent = "Don't forget to specify the file type."
            $("#ovrly").fadeIn();
	        $("#modal").show();
	        $("#modal").animate({top: "100"});
        } else {
            if(e.target[3].checked) {
                console.log("check for letters");
            }
            if(e.target[4].checked) {
                // Checking words only
                let searchingText = separateText(text)
                console.log(`Searching for '${searchingText}' in ${filePath}`);
                readTxtFile(filePath, searchingText);
            }
            if(e.target[5].checked) {
                console.log("check for phrases");
            }
        }
    } else {
        $("#ovrly").fadeIn();
	    $("#modal").show();
	    $("#modal").animate({top: "100"});

    }
})

// overlay buttons
$("#ovrly").click(function () {
    $("#ovrly").hide();
    $("#modal").hide();
    $("#modal").css("top", "-310px");
});
$("#cross").click(function () {
    $("#ovrly").hide();
    $("#modal").hide();
    $("#modal").css("top", "-310px");
});

// split all searching text and return array of searching text
function separateText(text) {
    const searchingText = text.split("~");
    const lower = searchingText.map(ele => {
        return ele.toLowerCase();
    })
    return lower;
}

// get all data content
function readTxtFile(file, searchingText) {
    console.log("reading file, searching for words");
    fetch(file)
    .then(res => res.text())
    .then(data => {getIndices(data.toLowerCase(), searchingText)})
}

// get all indices when searching words are found
function getIndices(content, searchingText) {
    // console.log(content);
    let index = 0;
    let iterations = 0;

    const wordArray = splitByWord(content);
    // let total = wordArray.length;        only used for progress bar
    let indexArray = [];
    wordArray.forEach(word => {
        searchingText.forEach(searcher => {
            if(word === searcher) {
                console.log(`found '${searcher}' at index: ${index}`);
                indexArray.push(index);
            }
            iterations++;
        })
        index++;
        // progressUpdate(index, total)         only usable with large files that take awhile to run through
    });
    console.log(`iterations: ${iterations} \nwords: ${index}`);
    console.log(indexArray);
    console.log(wordArray);
}

// Split words by spaces (plan to move this to remove all regex as well)
// May need to make this remove punctuation as well (not entirely sure yet though)
function splitByWord(content) {
    // remove newline characters
    let fixed = content.replace(/\r?\n|\r/g, " ");
    return fixed.split(" ");
}

// Only works with large files (for now will not be used but I like the idea)
function progressUpdate(index, total) {
    if(index === 0) {
        $(".progressContainer").show()
    }
    let progress = (Math.round(index/total) * 100)
    $(".progress-bar").css("width", progress + "%").text(progress + "%");
    if(progress === 100) {
        $(".progressContainer").hide()
    }
}