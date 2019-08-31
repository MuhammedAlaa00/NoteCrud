/*-------------------------------- the variables ----------------*/
//var searchInp = document.getElementById('searchInpu');
var noteTitle = document.getElementById('noteTitle'),
    noteDesc = document.getElementById('noteDescr'),
    noteBe = document.getElementById ('showNote');
    //productedit = document.getElementById('productsEdit'),
    //productsearch = document.getElementById('productsSearch');
var thebtn = document.getElementById('mybtn');
var noteContainer;
/*------------------------------------------------------------------*/
if (localStorage.getItem("noteContainer") == null) {
	noteContainer = [];
}
else
{
	noteContainer = JSON.parse(localStorage.getItem("noteContainer"));
	displayNote();
}
/*
searchInp.onkeyup = function()
{
    if (searchInp.value == false)
                {
                    productsearch.innerHTML = '';
                }
    else        {
                    searchProduct(searchInp.value);    
                }
    
}
/*
function searchProduct (term){
    var searchCols = "";
    for(var i=0; i< productContainer.length; i++)
        
        {
            if (productContainer[i].name.includes(term))
                {
                    searchCols += `<div class="col-lg-4 text-center"><p class="text-warning">`+productContainer[i].company+`</p>
                    <h3 class="text-info">`+productContainer[i].name+`</h3>
                    <p class="text-muted">`+productContainer[i].price+`</p>
                    <p class="text-danger">`+productContainer[i].description+`</p>
                    <button class="btn btn-danger" id="myDelBtn" onclick="deleteUser(`+i+`)">delete</button>
                    </div>`        
                }
        }
    productsearch.innerHTML = searchCols;
}
*/
thebtn.onclick = function(){
    theNotes();
    displayNote();
    resetNotes();
}
function theNotes(){
    if (noteTitle.value == false || noteDesc.value == false){
            alert("fill field");
            thebtn.setAttribute('disabled', 'disabled');
            return displayNote();
        }
    else {
        var products = 
        {
            notename:noteTitle.value,
            notedesc:noteDesc.value,
        }
        noteContainer.push(products);
        localStorage.setItem("noteContainer",JSON.stringify(noteContainer));
    }
}
function displayNote ()
{
    var cols = "";
    for(var i = 0; i < noteContainer.length; i++ )
        {
        
            cols +=`<div class="col-md-4" style="margin-top: 50px;margin-bottom: 50px">
                    <div class="box">
                    <h3 class="note-head">`+noteContainer[i].notename+`</h3>
                    <p class="lead">`+noteContainer[i].notedesc+`</p>
                    <button class="btn del-btn" id="myDelBtn" onclick="DeleteNote(`+i+`)">delete</button></div></div>`
        }
    noteBe.innerHTML = cols;
}
    
function DeleteNote(id){
    noteContainer.splice(id,1);
    localStorage.setItem("noteContainer",JSON.stringify(noteContainer));
    displayNote();
}
function resetNotes(){
    noteTitle.value = '';
    noteDesc.value = '';
}